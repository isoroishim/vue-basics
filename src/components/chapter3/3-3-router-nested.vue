<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 font-weight-bold mb-4">3-3: ネストされたルート</h2>

      <v-tabs v-model="tab" background-color="grey-lighten-3" class="mb-4">
        <v-tab to="/3-3/profile" replace>プロフィール</v-tab>
        <v-tab to="/3-3/posts" replace>投稿一覧</v-tab>
      </v-tabs>

      <v-divider class="my-4" />

      <router-view />
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tab = ref(null)
</script>
