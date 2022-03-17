<template>
  <div style="width: 400px" class="m-4">
    <el-card shadow="always ">
      <p>Popular Tags</p>
      <div class="flex flex-wrap">
        <div v-for="tag in tags" :key="tag" class="p-1">
          <el-tag
            class="hover:cursor-pointer"
            @click="setSelectedTag(tag)"
            :type="type(tag)"
            >{{ tag }}</el-tag
          >
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("Tags", ["tags", "selectedTag"]),
  },
  methods: {
    ...mapActions("Tags", ["getTags", "setSelectedTag"]),
    type(tag) {
      return this.selectedTag === tag ? "success" : "info";
    },
  },
  created() {
    this.getTags();
  },
};
</script>

<style></style>
