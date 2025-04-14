// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// 第1章
import Intro1 from '../components/1-0.vue'
import Counter from '../components/1-1-counter.vue'
import CounterButtons from '../components/1-2-counter-buttons.vue'
import CounterWithTime from '../components/1-3-counter-with-time.vue'
import ConditionalStyle from '../components/1-4-conditional-style.vue'
import EmptyCheck from '../components/1-5-empty-check.vue'

// 第2章
import Intro2 from '../components/2-0.vue'
import InputPreview from '../components/2-1-model-form.vue'

const routes = [
  { path: '/', component: Home },
  // 第1章
  { path: '/1-0', component: Intro1 },
  { path: '/1-1', component: Counter },
  { path: '/1-2', component: CounterButtons },
  { path: '/1-3', component: CounterWithTime },
  { path: '/1-4', component: ConditionalStyle },
  { path: '/1-5', component: EmptyCheck },
  // 第2章
  { path: '/2-0', component: Intro2 },
  { path: '/2-1', component: InputPreview }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
