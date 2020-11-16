<template>
  <div class="appheader-block">
    <v-navigation-drawer absolute temporary v-model="drawer">
      <v-list>
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="`navdrawer${i}`"
          :to="item.route"
        >
          <v-list-item-action>
            <v-icon left v-html="item.icon" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar dark app class="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up" />

      <router-link to="/" tag="span" style="cursor: pointer">
        <v-toolbar-title v-text="'Ich Lerne Deuch'" />
      </router-link>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          text
          v-for="(item, i) in menuItems"
          :key="`menuItem${i}`"
          :to="item.route"
        >
          <v-icon left v-html="item.icon" />
          {{ item.title }}
        </v-btn>
        <v-btn text @click.prevent="signout" v-if="isUserAuthenticated">
          <v-icon left v-html="'mdi-export'" />
          Выйти
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    isUserAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    menuItems() {
      return this.isUserAuthenticated
        ? [
            {
              icon: "mdi-domain",
              title: "Читать",
              route: "/books",
            },
            {
              icon: "mdi-dialpad",
              title: "Мой кабинет",
              route: "/profile",
            },
          ]
        : [
            {
              icon: "mdi-domain",
              title: "Читать",
              route: "/books",
            },
            {
              icon: "mdi-arrow-up-bold-box-outline",
              title: "Вoйти",
              route: "/signin",
            },
            {
              icon: "mdi-minus-circle",
              title: "Зарегистрироваться",
              route: "/signup",
            },
          ];
    },
  },
  methods: {
    signout() {
      this.$confirm("Вы действительно хотите выйти?").then((res) => {
        res && this.$store.dispatch("SIGNOUT");
        this.$router.push("/");
      });
      // this.$store.dispatch("SIGNOUT");
      // console.log(this.$store)
    },
  },
};
</script>

<style lang="scss" scoped>
.appheader-block {
  .theme--dark.v-btn--active:before,
  .theme--dark.v-btn--active:hover:before,
  .theme--dark.v-btn:hover:before,
  .theme--dark.v-btn:focus:before {
    opacity: 0;
  }
}
</style>