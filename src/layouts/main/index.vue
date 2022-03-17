<template>
  <el-container direction="vertical">
    <el-card shadow="always">
      <div class="flex flex-row justify-between items-center w-full">
        <p class="app-title">🔥 Fire Blog 🔥</p>
        <div class="flex flex-row justify-center items-center">
          <el-button
            type="text"
            v-if="$route.path.includes('create')"
            icon="el-icon-s-home"
            @click="$router.back()"
          >
            Home</el-button
          >
          <el-button
            v-else
            type="text"
            icon="el-icon-edit"
            @click="$router.push('/articles/create')"
          >
            Create Article
          </el-button>
          <div class="space-x-3 flex mx-2">
            <img :src="user.image" class="rounded-full" style="width: 25px" />
            <p>
              {{ user.username }}
            </p>
          </div>
        </div>
      </div>
    </el-card>

    <div style="height: calc(100vh - 60px)">
      <div class="pa-6 pt-0" style="min-height: calc(100vh - 60px)">
        <router-view />
      </div>
    </div>
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
