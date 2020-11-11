<template>
  <div>
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
    menuItems() {
      return [
        {
          icon: "mdi-domain",
          title: "Читать",
          route: "/books",
        },
        {
          icon: "mdi-message-text",
          title: "Учить слова",
          route: "/words",
        },
        {
          icon: "mdi-dialpad",
          title: "Мой кабинет",
          route: "/profile",
        },
        {
          icon: "mdi-export",
          title: "Выйти",
          route: "/logout",
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
};
</script>

<style lang="sass" scoped>
</style>