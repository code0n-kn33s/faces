<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Del></Del>
  </div>
</template>
<script>
import Header from './components/page/header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="sass">
@import './assets/style/variables'
@import './assets/style/animation'
@import './assets/style/default'
@import './assets/style/optional'
</style>
