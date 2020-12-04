<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md-2>
        <v-container fluid>
          <v-layout row>
            <v-flex xs7 md8>
              <v-text-field label="Поиск" v-model="searchTerm" />
            </v-flex>
            <v-flex xs5 md4>
              <v-select
                label="Уровень"
                :items="levels"
                multiple
                v-model="level"
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex
        v-for="(book, i) in filteredBooks"
        :key="i"
        xs12
        sm10
        md8
        offset-sm1
        offset-md-2
      >
        <BooksListItem :book="book" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BooksListItem from "./BooksListItem";
export default {
  data() {
    return {
      searchTerm: null,
      level: [],
      levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    };
  },
  components: {
    BooksListItem,
  },
  computed: {
    books() {
      return this.$store.getters.getBooks;
    },
    filteredBooks() {
      let books = this.books;
      if (this.searchTerm) {
        books = this.books.filter(
          (item) =>
            item.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            item.description
              .toLowerCase()
              .includes(this.searchTerm.toLowerCase())
        );
      }
      if (this.level.length) {
        books = books.filter(
          (b) => this.level.filter((val) => b.level.indexOf(val) !== -1).length
        );
      }
      return books;
    },
  },
  methods: {},
};
</script>
