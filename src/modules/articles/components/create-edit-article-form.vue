<template>
  <div class="my-6">
    <p class="max-w-[400px]">
      Currently adding a new Article is not supported due to a serve error (last
      tested 18/3 12:26 AM)
    </p>
    <el-form ref="form" :model="form" :rules="rules" class="custom-form mt-2">
      <el-form-item prop="title">
        <el-input v-model="form.title" placeholder="title"></el-input>
      </el-form-item>
      <el-form-item prop="description">
        <el-input
          v-model="form.description"
          type="textarea"
          placeholder="Description"
          :rows="2"
        ></el-input>
      </el-form-item>
      <el-form-item prop="body">
        <el-input
          v-model="form.body"
          placeholder="body"
          type="textarea"
          :rows="6"
        ></el-input>
      </el-form-item>
      <el-form-item class="flex flex-col justify-start items-start">
        <el-select
          v-model="form.tagList"
          multiple
          filterable
          allow-create
          style="width: 400px"
          placeholder="tags"
        >
          <el-option
            v-for="(item, index) in form.tagList"
            :key="index"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item class="mt-100">
        <el-button type="primary" @click="onSubmit">Create</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { isNotEmpty } from "@/utils/validators";
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
        title: "",
        description: "",
        body: "",
        tagList: [],
      },
      rules: {
        title: [{ validator: isNotEmpty, trigger: "blur" }],
        description: [{ validator: isNotEmpty, trigger: "blur" }],
        body: [{ validator: isNotEmpty, trigger: "blur" }],
      },
    };
  },
  computed: {
    ...mapGetters("Auth/Login", ["loading"]),
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.$emit("submit", { article: this.form });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  width: 100%;
  max-width: 700px;
  border-radius: 20px;
  box-shadow: 2px 2px 8px rgba(255, 255, 255, 0.5);
}
</style>
