<template>
  <div class="h-full flex flex-col justify-between w-full">
    <el-row class="flex-1 flex flex-col justify-center text-center">
      <div>
        <el-row class="mt-6">
          <articles-list v-if="articles.length > 0" :articles="articles" />
          <div v-else>
            <p>No articles are here... yet.</p>
          </div>
        </el-row>
      </div>
    </el-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ArticlesList from "@/modules/articles/components/articles-list.vue";
import Loader from "@/mixins/loader";

export default {
  components: {
    ArticlesList,
  },
  mixins: [Loader],
  computed: {
    ...mapGetters("Articles", ["articles", "loading"]),
  },
  methods: {
    ...mapActions("Articles", ["getArticles"]),
  },
  created() {
    this.getArticles();
  },
};
</script>

<style></style>
