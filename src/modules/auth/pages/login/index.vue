<template>
  <div class="p-6">
    <loginForm
      :is-loading="loading"
      @submit="handleSubmit"
      @signup="$router.push('/signup')"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import LoginForm from "@/modules/auth/components/login-form.vue";

export default {
  components: {
    LoginForm,
  },
  computed: {
    ...mapGetters("Auth/Login", ["loading"]),
  },
  methods: {
    ...mapActions("Auth/Login", ["login"]),
    async handleSubmit(payload) {
      await this.login(payload);
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
