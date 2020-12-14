<template>
  <div>
    <v-card color="accent" class="white--text">
      <v-card-title primary-title class="headline">
        {{ part.title }}
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text
          class="primary"
          :to="{ name: 'BookPart', params: { bookId, partId: part.id } }"
          v-if="isUserBookLoaded"
          >Открыть</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    part: {
      type: Object,
      required: true,
    },
    bookId: {
      required: true,
    },
  },
  computed: {
    ...mapGetters(["isAuthenticated", "userData", "getProcessing"]),
    isUserBookLoaded() {
      return (
        this.isAuthenticated &&
        !this.getProcessing &&
        this.userData.books[this.bookId]
      );
    },
  },
};
</script>