<template>
  <v-container grid-list-md>
    <v-layout row wrapp>
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
        v-for="book in filteredBooks"
        :key="book.id"
        xs12
        sm10
        md8
        offset-sm1
        offset-md-2
      >
        <v-card color="info" class="white--text">
          <v-container fluid>
            <v-layout row class="hidden-sm-and-down">
              <v-flex xs4 md3>
                <v-img
                  src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/original/products/84605/93507/Harry-Potter-and-the-philosophers-stone-original-movie-poster-buy-now-at-starstills__45891.1577476239.jpg?c=2"
                  height="100"
                />
                <div class="d-flex justify-center">
                  <v-btn text color="white">
                    <v-icon left>mdi-antenna</v-icon>YouTube
                  </v-btn>
                </div>
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
                  <v-rating
                    v-model="book.rating"
                    color="yellow"
                    readonly
                    dense
                    half-increments
                  />
                  <div class="ml-1">
                    <span>{{ book.rating }}</span>
                    <span>({{ book.ratingCount }})</span>
                  </div>
                  <v-spacer />
                  <v-btn class="primary" text>Открыть</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>

            <div class="hidden-md-and-up">
              <v-layout row>
                <v-flex xs4 md3>
                  <v-img
                    src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/original/products/84605/93507/Harry-Potter-and-the-philosophers-stone-original-movie-poster-buy-now-at-starstills__45891.1577476239.jpg?c=2"
                    height="100"
                  />
                </v-flex>
                <v-flex xs8 md9>
                  <v-card-title>
                    <div>
                      <h4>{{ book.title }}</h4>
                      <div class="d-flex justify-center">
                        <v-btn text color="white">
                          <v-icon left>mdi-antenna</v-icon>YouTube
                        </v-btn>
                      </div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <div>{{ book.description }}</div>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <div>
                    Уровень: {{ getBookLevel(book.level) }},
                    {{ book.parts }} частей
                  </div>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-card-actions>
                    <v-rating
                      v-model="book.rating"
                      color="yellow"
                      readonly
                      dense
                      half-increments
                    />
                    <div class="ml-1">
                      <span>{{ book.rating }}</span>
                      <span>({{ book.ratingCount }})</span>
                    </div>
                    <v-spacer />
                    <v-btn class="primary" text>Открыть</v-btn>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </div>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: null,
      level: [],
      levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    };
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
  methods: {
    getBookLevel(level) {
      return level.join("/");
    },
  },
};
</script>
