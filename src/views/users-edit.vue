<template>
  <div>
    <div class="edit-user">
      <users-slot :users="users" :tableTitle="tableTitle" :visible="false"></users-slot>
    </div>
    <edit-steps :users="users"></edit-steps>
  </div>
</template>
<script>
import usersSlot from './../components/users-slot';
import editSteps from './../components/edit-steps';

export default {
  props: {
    picked: []
  },
  components: {
    usersSlot,
    editSteps
  },
  data() {
    return {
      users: this.log(),
      tableTitle: this.log()[0].name
    }
  },
  methods: {
    log() {
      let users = JSON.parse(localStorage.getItem('data'))
      let routeItem = this.$route.params.id

      return users.filter(u => u.id == routeItem)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
