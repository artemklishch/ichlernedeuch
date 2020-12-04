<template>
  <v-container grid-list-md v-if="book">
    <v-layout row wrap>
      <v-flex xs12 sm10 offset-sm1>
        <book-details :book="book" />
      </v-flex>
      <v-flex xs12 sm10 offset-sm1 v-for="(part,i) in book.parts" :key="i">
        <book-parts-list-item :part="part" :bookId="book.id" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BookDetails from "../components/BookDetails";
import BookPartsListItem from "../components/BookPartsListItem";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    BookDetails,
    BookPartsListItem,
  },
  computed: {
    book() {
      return this.$store.getters.getBooks.find((item) => item.id === this.id);
    },
  },
};
</script>