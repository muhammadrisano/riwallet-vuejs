<template>
<h2>Node env : {{nodeenv}}</h2>
<h2>base url : {{baseurl}}</h2>
<h2>coba env: {{cobaenv}}</h2>
  <router-view/>
</template>
<script>
import { onMounted, computed } from 'vue'
export default {
  name: 'app',
  setup () {
    const nodeenv = computed(() => {
      return process.env.NODE_ENV
    })
    const baseurl = computed(() => {
      return process.env.VUE_APP_BASE_URL
    })
    const cobaenv = computed(() => {
      return process.env.VUE_APP_RISANO
    })
    onMounted(() => {
      console.log('node_env', process.env.NODE_ENV)
      console.log('BASE_URL', process.env.BASE_URL)
    })
    return {
      nodeenv,
      baseurl,
      cobaenv
    }
  }
}
</script>

<style>
body, html{
  padding: 0px;
  margin: 0px;
}

</style>
