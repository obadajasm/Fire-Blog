<template>
  <div class="p-6">
    <signupForm
      :is-loading="loading"
      @submit="handleSubmit"
      @login="$router.push('/login')"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SignupForm from "@/modules/auth/components/signup-form.vue";

export default {
  components: {
    SignupForm,
  },
  computed: {
    ...mapGetters("Auth/Signup", ["loading"]),
  },
  methods: {
    ...mapActions("Auth/Signup", ["signup"]),
    async handleSubmit(payload) {
      await this.signup(payload);
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
