<template>
  <div>
    <v-app>
      <v-navigation-drawer app>
        <p>navigation drwwer</p>
        <v-btn small color="error">So Cute</v-btn>
      </v-navigation-drawer>
      
      <v-app-bar app>
        <p>app ber</p>
      </v-app-bar>
      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <p>main</p>

          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>
      <v-footer app>
        <!-- -->
      </v-footer>
      <p footer></p>
    </v-app>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "RMUTL",
    };
  },
};
</script>
<style>
</style>