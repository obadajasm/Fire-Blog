<template>
  <el-container>
    {{ user }}
  </el-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("User", ["user"]),
  },
};
</script>
