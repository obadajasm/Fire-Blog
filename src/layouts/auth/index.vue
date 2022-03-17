<template>
  <div class="flex flex-col justify-center items-center h-screen w-screen">
    <el-card shadow="hover">
      <h1 slot="header" class="app-title">🔥 Fire Blog 🔥</h1>

      <router-view />
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.app-title {
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
}
</style>
