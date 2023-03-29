<template>
  <div>
    <!-- <iframe class="ideapp" src="http://localhost:8080/?workspaceDir=d:/notebook"></iframe> -->
    <micro-app name='app1' url='http://localhost:8080/?workspaceDir=D:\workspace\fe-docs' baseroute='/ide'></micro-app>
    <!-- <WujieVue
      width="100%"
      height="100%"
      name="ideapp"
      :url="url"
      :sync="true"
      :alive="true"
    ></WujieVue> -->
  </div>
</template>

<script>

export default {
  name: 'App-2',

  data: () => {
    return {
      url: 'http://127.0.0.1:8080/'
    }
  },

  fetch() {
    console.log('fetch')
  }
}
</script>

<style>
.ideapp{
  width: 100%;
  height: 100vh;
  border: 0
}
</style>
