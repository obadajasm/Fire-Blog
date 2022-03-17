<template>
  <el-row class="pt-4">
    <div class="flex flex-row-reverse space-x-9">
      <TagCard />
      <div class="w-full">
        <el-tabs lazy v-model="tab" type="card" @tab-click="handleTabChange">
          <el-tab-pane label="Your Feed" name="feed"> </el-tab-pane>
          <el-tab-pane label="Global Feed" name="general"></el-tab-pane>
          <el-tab-pane
            v-if="pagination.tag"
            :label="pagination.tag"
            :name="pagination.tag"
          ></el-tab-pane>
        </el-tabs>
        <div>
          <el-row class="flex justify-center">
            <articles-list v-if="articles.length > 0" :articles="articles" />
            <div v-else>
              <p class="text-center h-1/2">No articles are here... yet.</p>
            </div>
          </el-row>

          <el-row
            v-if="articles.length > 5"
            class="mt-6 pb-[200px] flex justify-center"
          >
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="pagination.offset"
              :page-sizes="[5, 10, 15, 20]"
              :page-size="pagination.limit"
              layout="total, sizes, prev, pager, next"
              :total="articlesCount"
            >
            </el-pagination>
          </el-row>
        </div>
      </div>
    </div>
  </el-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ArticlesList from "@/modules/articles/components/articles-list.vue";
import TagCard from "@/modules/tags/components/tag-card.vue";

import Loader from "@/mixins/loader";

export default {
  components: {
    ArticlesList,
    TagCard,
  },
  mixins: [Loader],
  data() {
    return {
      pagination: {
        offset: 1,
        limit: 5,
        tag: null,
      },
      tab: "feed",
    };
  },
  computed: {
    ...mapGetters("Articles", ["articles", "articlesCount", "loading"]),
    ...mapGetters("User", ["user"]),
    ...mapGetters("Tags", ["selectedTag"]),
    //     showedTag(){
    // return
    //     }
  },

  methods: {
    ...mapActions("Tags", ["setSelectedTag"]),

    ...mapActions("Articles", ["getArticles"]),
    handleSizeChange(val) {
      this.pagination.limit = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.pagination.offset = val * this.pagination.limit;
      this.fetchData();
    },
    fetchData() {
      this.getArticles({
        ...this.pagination,
        getAll: this.tab !== "Your Feed",
      });
    },
    handleTabChange() {
      this.setSelectedTag(null);

      this.fetchData();
    },
  },
  created() {
    this.fetchData();
  },
  watch: {
    pagination: {
      handler() {
        this.fetchData();
      },
      deep: true,
      immediate: true,
    },
    selectedTag(newV) {
      this.pagination.tag = newV;
      if (newV) {
        this.tab = newV;
      }
    },
  },
};
</script>

<style></style>
