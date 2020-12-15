<template>
  <v-card class="pa-2">
    <div>
      <div class="display-1">{{ part.bookTitle }}</div>
      <div class="headline">{{ part.partTitle }}</div>
      <v-divider class="black"></v-divider>
    </div>
    <div class="text-center mt-2 mb-2 primary">
      <youtube
        :video-id="part.youtube_id"
        :player-width="playerWidth"
      ></youtube>
    </div>
    <div class="mt-2">
      <v-slider
        v-model="fontSize"
        :label="`Размер шрифта (${fontSize})`"
        step="1"
        max="30"
        min="10"
        tick-size="5"
      ></v-slider>
      <v-tabs
        v-model="tabMode"
        color="accent"
        dark
        fixed-tabs
        slider-color="success"
      >
        <v-tab key="german" ripple>Текст с подсказками</v-tab>
        <v-tab key="sidebyside" ripple>Параллельно</v-tab>
        <v-tab-item key="german">
          <div
            v-for="(paragraph, i) in part.content"
            :key="`par1${i}`"
            :style="textStyle"
          >
            <span>&nbsp;&nbsp;</span>
            <span
              v-for="(sentence, y) in paragraph.sentences"
              :key="`par1${i}sen1${y}`"
            >
              <span>
                {{ sentence.originText }}
                <v-icon :size="fontSize" @click="toggleVisibility(i, y)">
                  mdi-help-circle
                </v-icon>
                <span
                  v-if="getVisibilityFlag(i, y).value"
                  class="success--text"
                  style="font-weight: bold"
                >
                  {{ sentence.transText }}
                </span>
              </span>
            </span>
          </div>
        </v-tab-item>
        <v-tab-item key="sidebyside">
          <v-container>
            <v-layout
              row
              wrap
              v-for="(paragraph, i) in part.content"
              :key="`par2${i}`"
            >
              <v-flex xs6>
                <span>&nbsp;&nbsp;</span>
                <span
                  v-for="(sentence, y) in paragraph.sentences"
                  :key="`par2${i}sen2${y}_orig`"
                  :style="textStyle"
                >
                  <span>{{ sentence.originText }}</span>
                </span>
              </v-flex>
              <v-flex xs6>
                <span>&nbsp;&nbsp;</span>
                <span
                  v-for="(sentence, y) in paragraph.sentences"
                  :key="`par2${i}sen2${y}_trans`"
                  :style="textStyle"
                >
                  <span>{{ sentence.transText }}</span>
                </span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    part: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tabMode: "german",
      visibilityKeys: [],
      fontSize: 18,
    };
  },
  created() {
    for (var i = 0; i < this.part.content.length; i++) {
      for (var y = 0; y < this.part.content[i].sentences.length; y++) {
        this.visibilityKeys.push({
          key: `${i}${y}`,
          value: false,
        });
      }
    }
  },
  computed: {
    // playerWidth() {
    //   let width;
    //   switch (this.$vuetify.breakpoint.name) {
    //     case "xs":
    //       width = 220;
    //       break;
    //     case "sm":
    //       width = 400;
    //       break;
    //     case "md":
    //       width = 500;
    //       break;
    //     case "lg":
    //       width = 600;
    //       break;
    //     case "xl":
    //       width = 800;
    //       break;
    //   }
    //   return width;
    // },

    playerWidth() {
      return {
        xs: "220px",
        sm: "400px",
        md: "500px",
        lg: "600px",
        xl: "800px",
      }[this.$vuetify.breakpoint.name];
    },
    textStyle() {
      return { fontSize: `${this.fontSize}px` };
    },
  },
  methods: {
    getVisibilityFlag(i, y) {
      return this.visibilityKeys.find((k) => k.key === `${i}${y}`);
    },
    toggleVisibility(i, y) {
      const flag = this.getVisibilityFlag(i, y);
      flag.value = !flag.value;
    },
  },
};
</script>
