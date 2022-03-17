<template>
  <el-form ref="form" :model="form" :rules="rules" class="custom-form">
    <el-form-item label="Email" prop="email">
      <el-input v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input v-model="form.password" type="password"></el-input>
    </el-form-item>

    <el-form-item class="mt-4">
      <el-button type="primary" @click="onSubmit">Login</el-button>
    </el-form-item>

    <div class="flex justify-center items-center">
      <span class="text-gray-500">Don't have an account? </span>
      <el-button type="text" @click="$emit('signup')"> Signup </el-button>
    </div>
  </el-form>
</template>

<script>
import { isValidEmail, isValidPassword } from "@/utils/validators";
import { mapGetters } from "vuex";
import Loader from "@/mixins/loader";

export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  mixins: [Loader],
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      rules: {
        email: [{ validator: isValidEmail, trigger: "blur" }],
        password: [{ validator: isValidPassword, trigger: "blur" }],
      },
      passwordVisible: false,
    };
  },
  computed: {
    ...mapGetters("Auth/Login", ["loading"]),
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.$emit("submit", { user: this.form });
        }
      });
    },
  },
};
</script>

<style scoped>
.form-container {
  width: 100%;
  max-width: 450px;
  border-radius: 20px;
  box-shadow: 2px 2px 8px rgba(255, 255, 255, 0.5);
}

.custom-form {
  width: 400px;
  margin: auto;
}
</style>
