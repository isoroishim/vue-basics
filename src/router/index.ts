// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// 第1章
import Intro1 from '../components/1-0.vue'
import Counter from '../components/1-1-counter.vue'
import CounterButtons from '../components/1-2-counter-buttons.vue'
import CounterWithTime from '../components/1-3-counter-with-time.vue'

// 条件付きスタイル（1-4 系）
import IfElseColor from '../components/1-4-0-if-else-color.vue'
import ClassBind from '../components/1-4-1-bind-class.vue'
import ComputedClass from '../components/1-4-2-computed-class.vue'

// 空チェック（1-5 系）
import EmptyCheckIf from '../components/1-5-0-empty-check.vue'
import EmptyCheckBind from '../components/1-5-1-empty-computed.vue'
import EmptyCheckComputed from '../components/1-5-2-trim-check.vue'

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

  { path: '/1-4-0', component: IfElseColor },
  { path: '/1-4-1', component: ClassBind },
  { path: '/1-4-2', component: ComputedClass },

  { path: '/1-5-0', component: EmptyCheckIf },
  { path: '/1-5-1', component: EmptyCheckBind },
  { path: '/1-5-2', component: EmptyCheckComputed },

  // 第2章
  { path: '/2-0', component: Intro2 },
  { path: '/2-1', component: InputPreview }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
