<template>
  <div id="app">
    <list></list>
  </div>
</template>

<script>
import List from './components/NavList'

export default {
  name: 'app',
  components: {
    List
  }
}
</script>

<style lang="less">

*{
  margin: 0;
  padding: 0;
}
</style>
