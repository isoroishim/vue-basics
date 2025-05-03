// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// 第1章
import Intro1 from '../components/1-0.vue'
import Counter from '../components/1-1-counter.vue'
import CounterButtons from '../components/1-2-counter-buttons.vue'
import CounterWithTime from '../components/1-3-counter-with-time.vue'
import IfElseColor from '../components/1-4-0-if-else-color.vue'
import ClassBind from '../components/1-4-1-bind-class.vue'
import ComputedClass from '../components/1-4-2-computed-class.vue'
import EmptyCheck from '../components/1-5-empty-check.vue'

// 第2章
import InputPreview from '../components/1-6-input-preview.vue'
import EmptyCheckInput from '../components/1-7-empty-check-input.vue'
import MultiInput from '../components/1-8-multi-input.vue'

const routes = [
  { path: '/', component: Home },

  // 第1章：カウンター実装と構文習得
  { path: '/1-0', component: Intro1 },
  { path: '/1-1', component: Counter },
  { path: '/1-2', component: CounterButtons },
  { path: '/1-3', component: CounterWithTime },
  { path: '/1-4-0', component: IfElseColor },
  { path: '/1-4-1', component: ClassBind },
  { path: '/1-4-2', component: ComputedClass },
  { path: '/1-5', component: EmptyCheck },

  // 第2章：フォーム入力と条件処理
  { path: '/1-6', component: InputPreview },
  { path: '/1-7', component: EmptyCheckInput },
  { path: '/1-8', component: MultiInput }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
