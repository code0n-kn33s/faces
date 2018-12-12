<template>
  <div class="header">
    <div class="header-list">
      <div class="header-list-item">
        <router-link to="/">
          <md-icon class="md-size-2x">home</md-icon>
          <div class="header-label">home</div>
        </router-link>
      </div>
      <div class="header-list-item">
        <router-link to="/blog">
          <md-icon class="md-size-2x">dashboard</md-icon>
          <div class="header-label">blog</div>
        </router-link>
      </div>
      <div class="header-list-item">
        <router-link to="/about">
          <md-icon class="md-size-2x">subject</md-icon>
          <div class="header-label">about</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabContent',
  props: {
    href: String,
    required: true,
    blog: '/blog'
  }
}
</script>

<style lang="scss">
  * {
    color: white
  }
  .header {
    background: #424242;
    &-list {
      display: flex;
      &-item {
        margin-left: 10px;
        padding: 4px;
        a {
          color: transparent !important
        }
      }
    }
    &-label {
      text-align: center;
    }
  }
  .router-link-exact-active {
    i {
      color: #448aff !important;
    }
    div {
      color: #448aff !important;
    }
  }
</style>
