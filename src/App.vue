<template>
  <div id="app">
    <el-button type="text" @click="open">设置 token</el-button>
    <router-view/>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  methods: {
    open () {
      this.$prompt('请输入 token', '提示', {
      }).then(({ value }) => {
        localStorage.token = value
      })
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
