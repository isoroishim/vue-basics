<template>
  <v-container class="pa-4">
    <v-sheet class="pa-4" elevation="2">
      <h2 class="text-h5">2-4: v-if / v-else / v-show 条件分岐</h2>

      <v-btn @click="toggle" color="primary" class="mb-6">表示/非表示トグル</v-btn>

      <v-card class="pa-4 mb-6" outlined>
        <h3 class="text-h6 mb-2">v-if/ v-elseの動き</h3>
        <v-alert v-if="show" type="success" variant="tonal" density="comfortable" class="mb-2">
          表示されています
        </v-alert>
        <v-alert v-else type="error" variant="tonal" density="comfortable" class="mb-2">
          表示されています
        </v-alert>
      </v-card>

      <v-card class="pa-4 mb-6" outlined>
        <h3 class="text-h6 mb-2">v-showの動き</h3>
        <v-alert v-show="show" type="info" variant="tonal" density="comfortable">
          v-shoe: DOMは常に存在し、見えるかどうかだけ切り変わります
        </v-alert>
      </v-card>
    </v-sheet>
  </v-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const show = ref(true)

const toggle = () => {
  show.value = !show.value
}
</script>
