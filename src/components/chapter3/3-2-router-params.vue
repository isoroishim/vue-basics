<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5 font-weight-bold mb-4">3-2: 動的ルートとパラメータ</h2>

      <v-card class="pa-4" color="grey-lighten-4" min-height="100px">
        <v-list density="compact">
          <v-list-item v-for="id in [1, 2, 3]" :key="id" :to="`/3-2/${id}`" link>
            ユーザー{{ id }} のページへ
          </v-list-item>
        </v-list>
      </v-card>
      <v-divider class="my-4" />

      <h3 class="text-subtitle-2 mb-2">現在の選択</h3>

      <v-card class="pa-4" color="grey-lighten-4" min-height="100px">
        <v-alert v-if="userId" type="info" variant="tonal" border="start" density="comfortable">
          表示中のユーザーID: <strong>{{ userId }}</strong>
        </v-alert>
        <v-alert v-else type="warning" variant="tonal" border="start" density="comfortable">
          ユーザーIDが表示されていません
        </v-alert>
      </v-card>
    </v-sheet>
  </v-container>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const userId = computed(() => route.params.id)
</script>
