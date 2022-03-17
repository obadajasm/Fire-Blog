<template>
  <el-card
    shadow="hover"
    @click="$router.push('/articles/')"
    class="mb-2 max-w-lg hover:cursor-pointer"
  >
    <el-row>
      <div class="flex items-center justify-between w-full">
        <div class="flex">
          <img
            :src="article.author.image"
            class="rounded-full w-12 h-12 mr-2 cursor-pointer"
            @click="$router.push(`/articles/${article.slug}`)"
          />

          <div>
            <h3 class="text-lg font-bold">
              {{ article.author.username }}
            </h3>
            <p class="text-xs text-gray-600">
              {{ article.createdAt.split("T")[0] }}
            </p>
          </div>
        </div>
        <div class="border-2 p-2">❤️ {{ article.favoritesCount }}</div>
      </div>
    </el-row>
    <el-row type="flex justify-content" class="mt-3">
      <div class="px-2">
        <h5 class="text-xl font-bold text-left">
          {{ article.title }}
        </h5>
        <div class="break-word text-gray-400 text-left">
          {{ article.description }}
        </div>
      </div>
    </el-row>
    <el-button type="text" @click="$router.push(`/articles/${article.slug}`)">
      more?</el-button
    >
  </el-card>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
