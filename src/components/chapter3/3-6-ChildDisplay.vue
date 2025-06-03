<template>
  <v-card class="pa-4">
    <h3 class="text-subtitle-1">受け取ったメッセージ</h3>
    <p>{{ props.text }}</p>
  </v-card>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  text: string
}>()
</script>
