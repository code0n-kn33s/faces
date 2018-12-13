<template>
  <div>
    <users-slot :users="users" :tableTitle="tableTitle" :visible="true"></users-slot>
  </div>
</template>

<script>
import usersSlot from './../components/users-slot';
import users from '../api.js'

export default {
  components: {
    usersSlot
  },
  data() {
    return {
      tableTitle: "Users list",
      selected: [{ name: "Max", surname: "Ulinov"}],
      users: JSON.parse(localStorage.getItem('data')),
    }
  }
}

</script>

<style lang="sass">
  @import '../assets/style/variables'
</style>
