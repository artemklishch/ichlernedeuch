import Vue from "vue";

export default {
  state: {
    books: [],
    // books: [
    //   {
    //     id: "fdgdfsddsfgdsf68dfd",
    //     title: "Harry Potter under der Stain der Weisen - 1",
    //     description: "Первая глава первой части Гарри Поттере",
    //     imageId: "rsadfsdf6786sdfdfg",
    //     level: ["B2", "C1"],
    //     rating: 4,
    //     ratingCount: 100,
    //     youtube_playlist_id: "erertwer",
    //     parts: [
    //       {
    //         id: "2222",
    //         title: "Kapitel 1",
    //         youtube_id: "11111111111",
    //       },
    //       {
    //         id: "2222",
    //         title: "Kapitel 2",
    //         youtube_id: "2222222",
    //       },
    //       {
    //         id: "2222",
    //         title: "Kapitel 3",
    //         youtube_id: "333333333",
    //       },
    //       {
    //         id: "2222",
    //         title: "Kapitel 4",
    //         youtube_id: "44444444444",
    //       },
    //     ],
    //   },
    //   {
    //     id: "fdgdfsddsfgdsf68dfd",
    //     title: "Harry Potter under der Stain der Weisen - 2",
    //     description: "Вторая глава первой части Гарри Поттере",
    //     imageId: "rsadfsdf6786sdfdfg",
    //     level: ["B2", "B1"],
    //     rating: 5,
    //     ratingCount: 55,
    //     youtube_playlist_id: "sdfsertadf678sadfsdf",
    //     parts: [
    //       {
    //         id: "2222",
    //         title: "Kapitel 1",
    //         youtube_id: "11111111111",
    //       },
    //       {
    //         id: "2222",
    //         title: "Kapitel 2",
    //         youtube_id: "2222222",
    //       },
    //       {
    //         id: "2222",
    //         title: "Kapitel 3",
    //         youtube_id: "333333333",
    //       },
    //       {
    //         id: "2222",
    //         title: "Kapitel 4",
    //         youtube_id: "44444444444",
    //       },
    //     ],
    //   },
    //   {
    //     id: "fdgdfsddsfgdsf68dfd",
    //     title: "Harry Potter under der Stain der Weisen - 3",
    //     description: "Третья глава первой части Гарри Поттере",
    //     imageId: "rsadfsdf678r6sdfdfg",
    //     level: ["A2"],
    //     rating: 3.5,
    //     ratingCount: 25,
    //     youtube_playlist_id: "sdfretsertadf678sadfsdf",
    //     parts: [
    //       {
    //         id: "2222",
    //         title: "Kapitel 1",
    //         youtube_id: "11111111111",
    //       },
    //       {
    //         id: "2222",
    //         title: "Kapitel 2",
    //         youtube_id: "2222222",
    //       },
    //       {
    //         id: "2222",
    //         title: "Kapitel 3",
    //         youtube_id: "333333333",
    //       },
    //       {
    //         id: "2222",
    //         title: "Kapitel 4",
    //         youtube_id: "44444444444",
    //       },
    //     ],
    //   },
    // ],
    // bookParts: [
    //   {
    //     bookId: "fdgdfsddsfgdsf68dfd",
    //     bookPartId: "2222",
    //     bookTitle: "Harry Potter under der Stain der Weisen - 3",
    //     partTitle: "Kapital - 1",
    //     youtube_id: "u4DUmKFScvU",
    //     content: [
    //       {
    //         sentences: [
    //           {
    //             originText:
    //               "Viele Desktop Publisher und Webeditoren nutzen mittlerweile Lorem Ipsum als den Standardtext, auch die Suche im Internet nach lorem ipsum macht viele Webseiten sichtbar, wo diese noch immer vorkommen. Mittlerweile gibt es mehrere Versionen des Lorem Ipsum, einige zufällig, andere bewusst (beeinflusst von Witz und des eigenen Geschmacks)",
    //             transText:
    //               "Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам lorem ipsum сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).",
    //           },
    //           {
    //             originText:
    //               "Viele Desktop Publisher und Webeditoren nutzen mittlerweile Lorem Ipsum als den Standardtext, auch die Suche im Internet nach lorem ipsum macht viele Webseiten sichtbar, wo diese noch immer vorkommen. Mittlerweile gibt es mehrere Versionen des Lorem Ipsum, einige zufällig, andere bewusst (beeinflusst von Witz und des eigenen Geschmacks)",
    //             transText:
    //               'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
    //           },
    //           {
    //             originText:
    //               "Viele Desktop Publisher und Webeditoren nutzen mittlerweile Lorem Ipsum als den Standardtext, auch die Suche im Internet nach lorem ipsum macht viele Webseiten sichtbar, wo diese noch immer vorkommen. Mittlerweile gibt es mehrere Versionen des Lorem Ipsum, einige zufällig, andere bewusst (beeinflusst von Witz und des eigenen Geschmacks)",
    //             transText:
    //               "Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам lorem ipsum сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).",
    //           },
    //         ],
    //       },
    //       {
    //         sentences: [
    //           {
    //             originText:
    //               "Viele Desktop Publisher und Webeditoren nutzen mittlerweile Lorem Ipsum als den Standardtext, auch die Suche im Internet nach lorem ipsum macht viele Webseiten sichtbar, wo diese noch immer vorkommen. Mittlerweile gibt es mehrere Versionen des Lorem Ipsum, einige zufällig, andere bewusst (beeinflusst von Witz und des eigenen Geschmacks)",
    //             transText:
    //               'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
    //           },
    //           {
    //             originText:
    //               "Viele Desktop Publisher und Webeditoren nutzen mittlerweile Lorem Ipsum als den Standardtext, auch die Suche im Internet nach lorem ipsum macht viele Webseiten sichtbar, wo diese noch immer vorkommen. Mittlerweile gibt es mehrere Versionen des Lorem Ipsum, einige zufällig, andere bewusst (beeinflusst von Witz und des eigenen Geschmacks)",
    //             transText:
    //               'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
    //           },
    //           {
    //             originText:
    //               "Viele Desktop Publisher und Webeditoren nutzen mittlerweile Lorem Ipsum als den Standardtext, auch die Suche im Internet nach lorem ipsum macht viele Webseiten sichtbar, wo diese noch immer vorkommen. Mittlerweile gibt es mehrere Versionen des Lorem Ipsum, einige zufällig, andere bewusst (beeinflusst von Witz und des eigenen Geschmacks)",
    //             transText:
    //               "Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам lorem ipsum сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).",
    //           },
    //         ],
    //       },
    //       {
    //         sentences: [
    //           {
    //             originText:
    //               "Viele Desktop Publisher und Webeditoren nutzen mittlerweile Lorem Ipsum als den Standardtext, auch die Suche im Internet nach lorem ipsum macht viele Webseiten sichtbar, wo diese noch immer vorkommen. Mittlerweile gibt es mehrere Versionen des Lorem Ipsum, einige zufällig, andere bewusst (beeinflusst von Witz und des eigenen Geschmacks)",
    //             transText:
    //               'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
    //           },
    //           {
    //             originText:
    //               "Viele Desktop Publisher und Webeditoren nutzen mittlerweile Lorem Ipsum als den Standardtext, auch die Suche im Internet nach lorem ipsum macht viele Webseiten sichtbar, wo diese noch immer vorkommen. Mittlerweile gibt es mehrere Versionen des Lorem Ipsum, einige zufällig, andere bewusst (beeinflusst von Witz und des eigenen Geschmacks)",
    //             transText:
    //               'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
    //           },
    //           {
    //             originText:
    //               "Viele Desktop Publisher und Webeditoren nutzen mittlerweile Lorem Ipsum als den Standardtext, auch die Suche im Internet nach lorem ipsum macht viele Webseiten sichtbar, wo diese noch immer vorkommen. Mittlerweile gibt es mehrere Versionen des Lorem Ipsum, einige zufällig, andere bewusst (beeinflusst von Witz und des eigenen Geschmacks)",
    //             transText:
    //               "Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам lorem ipsum сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).",
    //           },
    //         ],
    //       },
    //     ],
    //     words: [
    //       {
    //         originWord: "Hello1",
    //         transWord: "Привет1",
    //       },
    //       {
    //         originWord: "Hello2",
    //         transWord: "Привет2",
    //       },
    //       {
    //         originWord: "Hello3",
    //         transWord: "Привет3",
    //       },
    //       {
    //         originWord: "Hello4",
    //         transWord: "Привет4",
    //       },
    //       {
    //         originWord: "Hello1",
    //         transWord: "Привет1",
    //       },
    //       {
    //         originWord: "Hello2",
    //         transWord: "Привет2",
    //       },
    //       {
    //         originWord: "Hello3",
    //         transWord: "Привет3",
    //       },
    //       {
    //         originWord: "Hello4",
    //         transWord: "Привет4",
    //       },
    //     ],
    //   },
    // ],
  },
  mutations: {
    SET_BOOKS(state, payload) {
      state.books = payload;
    },
  },
  actions: {
    LOAD_BOOKS({ commit }) {
      Vue.$db
        .collection("books")
        .get()
        .then((querySnapshot) => {
          let books = [];
          querySnapshot.forEach((s) => {
            const data = JSON.parse(JSON.stringify(s.data()));
            data.id = s.id;
            books.push(data);
          });
          commit("SET_BOOKS", books);
        })
        .catch((error) => console.log(error));
    },
  },
  getters: {
    getBooks: (state) => state.books,
    // getParts: (state) => state.bookParts,
  },
};
