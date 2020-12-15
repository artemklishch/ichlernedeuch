<template>
  <div>
    <v-card color="accent" class="white--text">
      <v-card-title primary-title class="headline">
        {{ part.title }}
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <div v-if="finishedDate" class="mr-2">
          <v-icon>mdi-check-outline</v-icon>
          Прочитано {{ finishedDate | formatedDate }}
        </div>
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
        !!this.userData.books[this.bookId]
      );
    },
    finishedDate() {
      if (!this.isUserBookLoaded) {
        return false;
      } else return new Date();
      const book = this.userData?.books[this.bookId];
      return book.parts[this.part.id].finishedDate || new Date();
    },
  },
};
</script>