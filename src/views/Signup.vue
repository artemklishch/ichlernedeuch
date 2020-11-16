<template>
  <div class="signup-form-block">
    <v-container>
      <v-layout row class="text-xs-center">
        <v-flex xs4 class="lighten-4">
          <v-container
            style="position: relative; top: 13%"
            class="text-xs-center"
          >
            <v-card>
              <v-card-title primary-title>
                <h4>Регистрация</h4>
              </v-card-title>

              <v-alert v-if="error" type="warning">{{ error }}</v-alert>

              <v-form v-model="valid">
                <v-text-field
                  name="email"
                  label="E-mail"
                  v-model="email"
                  :rules="emailRules"
                />
                <v-text-field
                  name="password"
                  label="Пароль"
                  type="password"
                  v-model="password"
                  :rules="passwordRules"
                />
                <v-card-actions>
                  <v-btn
                    primary
                    large
                    block
                    @click.prevent="signup"
                    :disabled="processing || !valid"
                    >Зарегистрироваться</v-btn
                  >
                </v-card-actions>
              </v-form>
            </v-card>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: null,
      email: null,
      valid: false,
      emailRules: [
        (v) => !!v || "Пожалуйста введите email",
        (v) =>
          /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
            v
          ) || "Неправильный email",
      ],
      passwordRules: [
        (v) => !!v || "Пожалуйста введите email",
        (v) =>
          (v && v.length >= 6) ||
          "Пароль слишком короткий - минимум 6 символов",
      ],
    };
  },
  computed: {
    error() {
      return this.$store.getters.getError;
    },
    processing() {
      return this.$store.getters.getProcessing;
    },
    isUserAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  watch: {
    isUserAuthenticated(val) {
      if (val === true) this.$router.push("/");
    },
  },
  methods: {
    signup() {
      this.$store.dispatch("SIGNUP", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.signup-form-block {
  height: 80vh;
  display: flex;
  align-items: center;
  .container .layout {
    display: flex;
    justify-content: center;
    max-width: 100%;
    width: 100%;
    & > div {
      width: 100%;
      .v-card.v-sheet.theme--light {
        padding: 10px;
        width: 500px;
        max-width: 500px;
      }
    }
  }
}
</style>

