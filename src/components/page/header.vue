<template>
  <div>
    <md-tabs>
      <md-tab id="tab-home" md-label="Home" to="/" md-icon="home"></md-tab>

      <md-tab id="tab-pages" md-label="Pages" to="/blog" md-icon="pages"></md-tab>

      <md-tab id="tab-favorites" md-label="About" to="/about" md-icon="favorite">
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
export default {
  name: 'TabContent',
  props: {
    href: String,
    required: true
  }
}
</script>

<style>
  * {
    color: white
  }
</style>
