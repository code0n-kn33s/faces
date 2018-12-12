<template>
  <div class="users-slot">
    <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title users-name">{{ tableTitle }}</h1>
        </div>

        <md-field md-clearable class="md-toolbar-section-end" v-if="visible">
          <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state
        md-label="No users found"
        :md-description="`No user found for this '${search}' query. Try a different search term or create a new user.`">
        <md-button class="md-primary md-raised" @click="newUser">Create New User</md-button>
      </md-table-empty-state>

      <md-table-row slot="md-table-row" class="users-table" :users="users" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Photo">
          <img v-bind:src="item.picture.thumbnail">
        </md-table-cell>
        <md-table-cell md-label="Name" class="users-name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Phone" md-sort-by="phone">{{ item.phone }}</md-table-cell>
        <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
        <md-table-cell v-if="visible" md-label="">
          <router-link :to="`/edit/${item.id}`">
            <speed-dial class="md-primary md-raised" @click="newUser"></speed-dial>
          </router-link>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
  import speedDial from './elements/speed-dial.vue';

  const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.name).includes(toLower(term)))
    }

    return items
  }

  export default {
    props: {
      users: {
        required: true,
        type: Array
      },
      tableTitle: String,
      visible: Boolean
    },
    components: {
      speedDial
    },
    name: 'TableSearch',
    data: () => ({
      search: null,
      searched: []
    }),
    methods: {
      newUser () {
        window.alert('Noop')
      },
      searchOnTable () {
        this.searched = searchByName(this.users, this.search)
      }
    },
    created () {
      this.searched = this.users
    }
  }
</script>

<style lang="scss">
  .md-field {
    max-width: 300px;
  }
  .users-table {
    td {
      cursor: pointer;
      img {
        border-radius: 100%;
        height: 48px;
        width: 48px;
      }
    }
  }
  .users-slot table tr:first-child {
    color: inherit;
    font-weight: inherit;
  }
  .md-table-head {
    text-align: center;
  }
  .md-empty-state
  .md-table-empty-state
  .md-theme-default {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .users-name {
    text-transform: capitalize;
  }
</style>