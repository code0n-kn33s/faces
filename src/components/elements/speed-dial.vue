<template>
  <div class="notes">
    <md-speed-dial class="md-left">
      <md-speed-dial-target>
        <md-icon class="md-morph-initial">add</md-icon>
        <md-icon class="md-morph-final">edit</md-icon>
      </md-speed-dial-target>
    </md-speed-dial>
  </div>
</template>

<script>
export default {
  name: 'PositionDirection',
  data: () => ({
    topPosition: 'md-top-left',
    bottomPosition: 'md-bottom-left'
  })
}
</script>

<style lang="scss" scoped>
  .notes {
    min-height: 70px;
  }

  .md-speed-dial-content {
    flex-direction: row-reverse;
    button {
      margin-right: 5px;
    }
  }
  .md-speed-dial {
    flex-direction: row-reverse;
  }
</style>