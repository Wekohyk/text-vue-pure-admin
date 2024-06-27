<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('feature.draggable') }}</div>
    </div>

    <div class="flex items-center justify-around mt-20 gap-40">
      <div class="">
        <div class="text-center font-500">{{ $t('feature.grid_drop') }}</div>
        <draggable
          v-model="gridLists"
          class="grid-container"
          item-key="grid"
          animation="300"
          chosenClass="chosen"
          forceFallback="true"
        >
          <template #item="{ element }">
            <div :class="'item' + ' ' + 'item-' + element.num">
              {{ element.num }}
            </div>
          </template>
        </draggable>
      </div>

      <div class="">
        <div class="text-center font-500">{{ $t('feature.drag_single') }}</div>
        <!-- 单列拖拽 -->
        <draggable
          v-model="lists"
          item-key="name"
          chosen-class="chosen"
          force-fallback="true"
          animation="300"
          @change="change"
        >
          <template #item="{ element, index }">
            <div class="item-single">{{ element.name }} {{ index }}</div>
          </template>
        </draggable>
      </div>

      <div class="">
        <div class="text-center font-500">{{ $t('feature.drag_element') }}</div>
        <!-- 拖拽实现元素位置交换 ---- 使用 sortablejs 实现 -->
        <div class="cut-container">
          <div v-for="(item, index) in cutLists" :key="index" class="item-cut">
            <p>{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import draggable from 'vuedraggable';
import Sortable from 'sortablejs';

const gridLists = ref<Array<object>>([
  { grid: 'cn', num: 1 },
  { grid: 'cn', num: 2 },
  { grid: 'cn', num: 3 },
  { grid: 'cn', num: 4 },
  { grid: 'cn', num: 5 },
  { grid: 'cn', num: 6 },
  { grid: 'cn', num: 7 },
  { grid: 'cn', num: 8 },
  { grid: 'cn', num: 9 },
]);

const lists = ref<Array<object>>([
  { people: 'cn', id: 1, name: 'www.itxst.com' },
  { people: 'cn', id: 2, name: 'www.baidu.com' },
  { people: 'cn', id: 3, name: 'www.taobao.com' },
  { people: 'cn', id: 4, name: 'www.google.com' },
]);

const cutLists = ref([
  { people: 'cn', id: 1, name: 'cut1' },
  { people: 'cn', id: 2, name: 'cut2' },
  { people: 'cn', id: 3, name: 'cut3' },
  { people: 'cn', id: 4, name: 'cut4' },
]);

onMounted(() => {
  new Sortable(document.querySelector('.cut-container'), {
    swap: true,
    forceFallback: true,
    chosenClass: 'chosen',
    swapClass: 'highlight',
    animation: 300,
  });
});

const change = (evt: any): void => {
  console.log('evt: ', evt);
};
</script>

<style scoped lang="scss">
.grid-container {
  display: grid;
  grid-template-rows: 33.3% 33.3% 33.3%;
  grid-template-columns: 33.3% 33.3% 33.3%;
  width: 400px;
  height: 400px;
}

.item-single {
  height: 77px;
  font-size: 1.5em;
  line-height: 85px;
  text-align: center;
  cursor: move;
  border: 1px solid #e5e4e9;
}

.item-cut {
  height: 77px;
  font-size: 1.5em;
  line-height: 77px;
  text-align: center;
  cursor: move;
  border: 1px solid #e5e4e9;
}

.item {
  font-size: 2em;
  line-height: 100px;
  text-align: center;
  cursor: move;
  border: 1px solid #e5e4e9;

  @media screen and (width <= 750px) {
    line-height: 90px;
  }
}

.item-1 {
  background-color: #ef342a;
}

.item-2 {
  background-color: #f68f26;
}

.item-3 {
  background-color: #4ba946;
}

.item-4 {
  background-color: #0376c2;
}

.item-5 {
  background-color: #c077af;
}

.item-6 {
  background-color: #f8d29d;
}

.item-7 {
  background-color: #b5a87f;
}

.item-8 {
  background-color: #d0e4a9;
}

.item-9 {
  background-color: #4dc7ec;
}

.chosen {
  border: solid 2px #3089dc !important;
}
</style>
