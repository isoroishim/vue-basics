// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// --- 第1章 1-0〜1-5：カウンター基本構文 ---
import Intro1 from '../components/chapter1/1-0.vue'
import Counter from '../components/chapter1/1-1-counter.vue'
import CounterButtons from '../components/chapter1/1-2-counter-buttons.vue'
import CounterWithTime from '../components/chapter1/1-3-counter-with-time.vue'
import IfElseColor from '../components/chapter1/1-4-if-else-color.vue'
import EmptyCheck from '../components/chapter1/1-5-empty-check.vue'

// --- 第1章 1-6〜1-8：フォーム入力と条件処理 ---
import InputPreview from '../components/chapter1/1-6-input-preview.vue'
import EmptyCheckInput from '../components/chapter1/1-7-empty-check-input.vue'
import MultiInput from '../components/chapter1/1-8-multi-input.vue'

// --- 第1章 1-9〜1-11：条件分岐とスタイル制御 ---
import ClassBind from '../components/chapter1/1-9-class-bind.vue'
import MultipleCondition from '../components/chapter1/1-10-multiple-condition.vue'
import ConditionalStyle from '../components/chapter1/1-11-conditional-style.vue'

// --- 第1章 1-12〜1-13：まとめとクリーンコード ---
import Review from '../components/chapter1/1-12-review.vue'
import CleanCode from '../components/chapter1/1-13-clean-code.vue'

// --- 第2章 2-0〜2-3：フォーム基礎スタート ---
import Intro2 from '../components/chapter2/2-0.vue'
import ModelForm from '../components/chapter2/2-1-model-form.vue'
import ModelMultiple from '../components/chapter2/2-2-model-multiple.vue'
import ModelCheckbox from '../components/chapter2/2-3-model-checkbox.vue'

// --- 第2章 2-4〜2-6：条件分岐と動的表示 ---
import Conditional from '../components/chapter2/2-4-conditional.vue'
import ConditionalClass from '../components/chapter2/2-5-conditional-class.vue'
import ConditionalList from '../components/chapter2/2-6-conditional-list.vue'

// --- 第2章 2-7〜2-9：バリデーション ---
import ValidationBasic from '../components/chapter2/2-7-validation-basic.vue'
import ValidationRule from '../components/chapter2/2-8-validation-rule.vue'
import ValidationSubmit from '../components/chapter2/2-9-validation-submit.vue'

// --- 第2章 2-10：まとめ課題 ---
import SummaryForm from '../components/chapter2/2-10-summary-form.vue'

// --- 第3章 3-0〜3-3：Vue Router基礎 ---
import Intro3 from '../components/chapter3/3-0.vue'
import RouterBasic from '../components/chapter3/3-1-router-basic.vue'
import RouterParams from '../components/chapter3/3-2-router-params.vue'
import RouterNested from '../components/chapter3/3-3-router-nested.vue'
import Profile from '../components/chapter3/3-3-profile.vue'
import Posts from '../components/chapter3/3-3-posts.vue'

// --- 第3章 3-4〜3-7：ダイアログと簡易ストア ---
import DialogBasic from '../components/chapter3/3-4-dialog-basic.vue'
import DialogForm from '../components/chapter3/3-5-dialog-form.vue'
import StoreSimple from '../components/chapter3/3-6-store-simple.vue'
import StoreGlobal from '../components/chapter3/3-7-store-global.vue'

// --- 第3章 3-8〜3-10：レイアウト実装 ---
import LayoutHeader from '../components/chapter3/3-8-layout-header.vue'
import LayoutSidebar from '../components/chapter3/3-9-layout-sidebar.vue'
import LayoutMain from '../components/chapter3/3-10-layout-main.vue'

// --- 第3章 3-11：まとめアプリ ---
import SummarySPA from '../components/chapter3/3-11-summary-spa.vue'

// --- (3-1ページ遷移用) ページサンプル ---
import Page1 from '../components/chapter3/3-1-Page1.vue'
import Page2 from '../components/chapter3/3-1-Page2.vue'

// --- 第4章 4-0〜4-3：Pinia 基礎 ---
import Intro4 from '../components/chapter4/4-0.vue'
import PiniaSetup from '../components/chapter4/4-1-pinia-setup.vue'
import PiniaReadWrite from '../components/chapter4/4-2-pinia-read-write.vue'
import PiniaActions from '../components/chapter4/4-3-pinia-actions.vue'

// --- 第4章 4-4〜4-6：API通信基礎 ---
import ApiFetch from '../components/chapter4/4-4-api-fetch.vue'
import ApiAxios from '../components/chapter4/4-5-api-axios.vue'
import ApiWithPinia from '../components/chapter4/4-6-api-with-pinia.vue'

// --- 第4章 4-7〜4-9：エラーハンドリングと構成整理 ---
import ErrorHandling from '../components/chapter4/4-7-error-handling.vue'
import StoreSplit from '../components/chapter4/4-8-store-split.vue'
import ApiServiceLayer from '../components/chapter4/4-9-api-service-layer.vue'

// --- 第4章 4-10：まとめ課題 ---
import SummaryCRUD from '../components/chapter4/4-10-summary-crud.vue'
// --- 第4章 4-11：番外編 ---
import TaskManager from '../components/chapter4/4-11-task-manager.vue'

const routes = [
  { path: '/', component: Home },

  // --- 第1章 ---
  { path: '/1-0', component: Intro1 },
  { path: '/1-1', component: Counter },
  { path: '/1-2', component: CounterButtons },
  { path: '/1-3', component: CounterWithTime },
  { path: '/1-4', component: IfElseColor },
  { path: '/1-5', component: EmptyCheck },
  { path: '/1-6', component: InputPreview },
  { path: '/1-7', component: EmptyCheckInput },
  { path: '/1-8', component: MultiInput },
  { path: '/1-9', component: ClassBind },
  { path: '/1-10', component: MultipleCondition },
  { path: '/1-11', component: ConditionalStyle },
  { path: '/1-12', component: Review },
  { path: '/1-13', component: CleanCode },

  // --- 第2章 ---
  { path: '/2-0', component: Intro2 },
  { path: '/2-1', component: ModelForm },
  { path: '/2-2', component: ModelMultiple },
  { path: '/2-3', component: ModelCheckbox },
  { path: '/2-4', component: Conditional },
  { path: '/2-5', component: ConditionalClass },
  { path: '/2-6', component: ConditionalList },
  { path: '/2-7', component: ValidationBasic },
  { path: '/2-8', component: ValidationRule },
  { path: '/2-9', component: ValidationSubmit },
  { path: '/2-10', component: SummaryForm },

  // --- 第3章 ---
  { path: '/3-0', component: Intro3 },
  {
    path: '/3-1',
    component: RouterBasic,
    children: [
      { path: 'page1', component: Page1 },
      { path: 'page2', component: Page2 }
    ]
  },
  { path: '/3-2', component: RouterParams },
  { path: '/3-2/:id', component: RouterParams },
  {
    path: '/3-3',
    component: RouterNested,
    children: [
      { path: 'profile', component: Profile },
      { path: 'posts', component: Posts }
    ]
  },
  { path: '/3-4', component: DialogBasic },
  { path: '/3-5', component: DialogForm },
  { path: '/3-6', component: StoreSimple },
  { path: '/3-7', component: StoreGlobal },
  { path: '/3-8', component: LayoutHeader },
  { path: '/3-9', component: LayoutSidebar },
  { path: '/3-10', component: LayoutMain },
  { path: '/3-11', component: SummarySPA },

  // --- 第4章 ---
  { path: '/4-0', component: Intro4 },
  { path: '/4-1', component: PiniaSetup },
  { path: '/4-2', component: PiniaReadWrite },
  { path: '/4-3', component: PiniaActions },
  { path: '/4-4', component: ApiFetch },
  { path: '/4-5', component: ApiAxios },
  { path: '/4-6', component: ApiWithPinia },
  { path: '/4-7', component: ErrorHandling },
  { path: '/4-8', component: StoreSplit },
  { path: '/4-9', component: ApiServiceLayer },
  { path: '/4-10', component: SummaryCRUD },
  { path: '/4-11', component: TaskManager }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
