<template>
  <v-container grid-list-md v-if="part">
    <v-layout row wrap>
      <v-flex v-if="part" xs12 sm10 offset-sm1>
        <BookPartContent :part="part" />
      </v-flex>
      <v-flex xs12 sm10 offset-sm1>
        <BookPartWords :words="part.words" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Vue from "vue";
import BookPartContent from "../components/BookPartContent";
import BookPartWords from "../components/BookPartWords";
export default {
  props: {
    bookId: {
      type: String,
      required: true,
    },
    partId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      part: null,
    };
  },
  computed: {
    // part() {
    //   let val = this.$store.getters.getParts.find(
    //     (b) => b.bookId === this.bookId && b.bookPartId === this.partId
    //   );
    //   return val;
    // },
  },
  created() {
    Vue.$db
      .collection("bookParts")
      .where("bookId", "==", this.bookId)
      .where("bookPartId", "==", this.partId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((s) => {
          this.part = s.data();
        });
      })
      .catch((error) => console.log(error));
  },
  components: {
    BookPartContent,
    BookPartWords,
  },
};
</script>
