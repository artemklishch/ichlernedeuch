<template>
  <v-container grid-list-md v-if="part">
    <v-layout row wrap>
      <v-flex v-if="finishedDate" xs12 sm10 offset-sm1>
        <v-card>
          <v-responsive>
            <v-img
              src="gs://ichlernedeuch.appspot.com/erledogtimg.jpg"
              max-width="350px"
            />
          </v-responsive>
          <v-card-title primary-title>
            <div class="headline">
              Я закончил читать эту часть {{ finishedDate | formatedDate }}!
            </div>
          </v-card-title>
          <v-card-actions>
            <span>Моя оценка</span>
            <v-rating v-model="savedRating" color="success" readonly large />
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex v-if="part" xs12 sm10 offset-sm1>
        <BookPartContent :part="part" />
      </v-flex>
      <v-flex xs12 sm10 offset-sm1>
        <BookPartWords :words="part.words" />
      </v-flex>
      <v-flex xs12 sm10 offset-sm1 class="text-xs-center">
        <v-dialog v-model="finishDialog" persistent max-width="600px">
          <v-btn
            slot="activator"
            color="success"
            dark
            @click="finishDialog = true"
            v-if="!finishedDate"
          >
            <v-icon>mdi-check-outline</v-icon>
            Я закончил работу!
          </v-btn>
          <v-card>
            <v-responsive>
              <v-img
                src="gs://ichlernedeuch.appspot.com/erledogtimg.jpg"
                max-width="350px"
              />
            </v-responsive>
            <v-card-title primary-title>
              <div class="headline">Я закончил читать эту часть!</div>
            </v-card-title>
            <v-card-text>
              <span>Моя оценка</span>
              <v-rating
                v-model="rating"
                color="success"
                half-increments
                large
              />
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                dark
                text
                @click.native="finishDialog = false"
              >
                <v-icon>mdi-close-octagon-outline</v-icon> Закрыть
              </v-btn>
              <v-btn color="success" dark text @click.native="finishWork">
                <v-icon>mdi-checkbox-marked-circle-outline</v-icon> Я закончил
                работу!
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
      finishDialog: false,
      rating: 0,
    };
  },
  computed: {
    // part() {
    //   let val = this.$store.getters.getParts.find(
    //     (b) => b.bookId === this.bookId && b.bookPartId === this.partId
    //   );
    //   return val;
    // },
    finishedDate() {
      return (
        this.$store?.getters?.userData?.books[this.bookId]?.parts[this.partId]
          ?.finishedDate || new Date()
      );
    },
    savedRating() {
      return (
        this.$store.getters?.userData?.books[this.bookId]?.parts[this.partId]
          .rating || 3
      );
    },
  },
  methods: {
    finishWork() {
      this.$store.dispatch("FINISH_USER_BOOK_PART", {
        bookId: this.bookId,
        partId: this.partId,
        rating: this.rating,
      });
      this.finishDialog = false;
    },
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
      .then(() => {
        this.$store.dispatch("UPDATE_USER_BOOK_PART_STATS", {
          bookId: this.bookId,
          partId: this.partId,
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
