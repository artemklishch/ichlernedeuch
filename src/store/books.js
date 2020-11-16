export default {
  state: {
    books: [
      {
        id: "fdgdfsdsfgdsf68dfd",
        title: "Harry Potter under der Stain der Weisen - 1",
        description: "Первая глава первой части Гарри Поттере",
        imageId: "rsadfsdf6786sdfdfg",
        parts: 7,
        level: ["B2", "C1"],
        rating: 4,
        ratingCount: 1,
        youtube_playlist_id: "sdfsadf678sadfsdf",
      },
      {
        id: "fdgdfsddsfgdsf68dfd",
        title: "Harry Potter under der Stain der Weisen - 2",
        description: "Вторая глава первой части Гарри Поттере",
        imageId: "rsadfsdf6786sdfdfg",
        parts: 7,
        level: ["B2", "B1"],
        rating: 5,
        ratingCount: 55,
        youtube_playlist_id: "sdfsertadf678sadfsdf",
      },
      {
        id: "fdgdfsddertsfgdsf68dfd",
        title: "Harry Potter under der Stain der Weisen - 3",
        description: "Третья глава первой части Гарри Поттере",
        imageId: "rsadfsdf678r6sdfdfg",
        parts: 7,
        level: ["A2"],
        rating: 3.5,
        ratingCount: 25,
        youtube_playlist_id: "sdfretsertadf678sadfsdf",
      },
    ],
  },
  mutations: {
    SET_BOOKS(state, payload) {
      state.books = payload;
    },
  },
  getters: {
    getBooks: (state) => state.books,
  },
};
