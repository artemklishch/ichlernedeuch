<template>
  <div>
    <v-container fluid>
      <span class="display-1">Слова</span>
      <v-data-iterator :items="words" hide-default-footer>
        <template v-slot:default="props">
          <v-row>
            <v-col
              v-for="item in props.items"
              :key="item.name"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card>
                <v-card-title class="subheading font-weight-bold">
                  {{ item.originWord }}
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>{{ item.transWord }}</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="mx-2" fab dark small color="primary">
                    <v-icon dark> mdi-plus </v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    words: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      itemsPerPage: 4,
    };
  },
};
</script>
