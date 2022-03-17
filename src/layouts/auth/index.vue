<template>
  <div class="h-full w-full">
    <el-card shadow="always">
      <div class="flex justify-between">
        <h1 class="app-title">🔥 Fire Blog 🔥</h1>
        <el-row v-if="showAuthBtns" class="flex justify-end">
          <el-button type="primary" @click="$router.push('/login')">
            Login
          </el-button>
          <el-button type="primary" @click="$router.push('/signup')">
            Signup
          </el-button>
        </el-row>
        <el-button v-else type="primary" @click="$router.push('/home')"
          >Home</el-button
        >
      </div>
    </el-card>

    <div class="flex justify-center h-full">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    showAuthBtns() {
      return !["login", "signup"].some((e) => this.$route.path.includes(e));
    },
  },
};
</script>

<style></style>
