<template>
  <v-container grid-list-md>
    <v-layout row wrapp>
      <v-flex
        v-for="book in books"
        :key="book.id"
        xs12
        sm10
        md8
        offset-sm1
        offset-md-2
      >
        <v-card color="info" class="white--text">
          <v-container fluid>
            <v-layout row>
              <v-flex xs4 md3>
                <v-img
                  src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/original/products/84605/93507/Harry-Potter-and-the-philosophers-stone-original-movie-poster-buy-now-at-starstills__45891.1577476239.jpg?c=2"
                  height="200"
                />
              </v-flex>
              <v-flex xs8 md9>
                <v-card-title>
                  <div>
                    <div class="headline">{{ book.title }}</div>
                    <div>{{ book.description }}</div>
                    <v-divider class="white" />
                    <div>
                      Уровень: {{ getBookLevel(book.level) }},
                      {{ book.parts }} частей
                    </div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-rating v-model="book.rating" color="yellow" readonly dense half-increments />
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    books() {
      return this.$store.getters.getBooks;
    },
  },
  methods: {
    getBookLevel(level) {
      return level.join("/");
    },
  },
};
</script>
