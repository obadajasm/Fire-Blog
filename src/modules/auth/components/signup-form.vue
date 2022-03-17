<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" class="custom-form">
      <el-form-item label="Username" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>

      <el-form-item class="mt-10">
        <el-button type="primary" @click="onSubmit">Signup</el-button>
      </el-form-item>

      <div class="flex justify-end items-center gap-x-1 text-sm">
        <span class="text-gray-500">Already registered?</span>
        <!-- Doesn't have account yet -->
        <el-button type="text" @click="$emit('login')"> Login </el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { isNotEmpty, isValidEmail, isValidPassword } from "@/utils/validators";
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
        username: "",
        email: "",
        password: "",
      },
      rules: {
        username: [{ validator: isNotEmpty, trigger: "blur" }],
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
.custom-form {
  width: 400px;
  margin: auto;
}
</style>
