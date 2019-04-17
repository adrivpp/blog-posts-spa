<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app>
      <v-list dense>
        <v-list-tile :to="{ name: 'home' }">
          <v-list-tile-action>
            <v-icon>view_list</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Posts
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{ name: 'create' }">
          <v-list-tile-action>
            <v-icon>view_list</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Create Post
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Blog Posts</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>    
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: true,
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  text-decoration: none;
}
</style>