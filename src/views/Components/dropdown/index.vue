<template>
  <h2 class="row-title">{{ $t('components.basic_usage') }}</h2>
  <div class="row">
    <Weko-Dropdown
      placement="bottom"
      trigger="click"
      :menu-options="options"
      @visible-change="visibleChangeHandler"
      @select="selectHandler"
      hideAfterClick
    >
      <Weko-Button type="primary">
        {{ $t('components.click_open_dropdown') }}
      </Weko-Button>
    </Weko-Dropdown>
  </div>

  <h2 class="row-title">{{ $t('components.click_open_close') }}</h2>
  <div class="row">
    <Weko-Dropdown
      placement="bottom"
      trigger="click"
      manual
      :menu-options="options"
      @visible-change="visibleChangeHandler"
      @select="selectHandler"
      ref="dropdownRef"
    >
      <Weko-Button type="primary">
        {{ $t('components.click_open_menu') }}
      </Weko-Button>
    </Weko-Dropdown>
  </div>
  <div class="row">
    <Weko-Button @click="openClick">{{ $t('components.open') }}</Weko-Button>
    <Weko-Button @click="closeClick">{{ $t('components.off') }}</Weko-Button>
  </div>

  <h2 class="row-title">{{ $t('components.supports_VNode') }}</h2>
  <div class="row">
    <Weko-Dropdown
      placement="bottom"
      trigger="click"
      :menu-options="options2"
      @visible-change="visibleChangeHandler"
      @select="selectHandler"
    >
      <Weko-Button type="primary">
        {{ $t('components.click_open_dropdown') }}
      </Weko-Button>
    </Weko-Dropdown>
  </div>
</template>
<script setup lang="ts">
import { ref, h } from 'vue';

interface Option {
  key: number;
  label: string | ReturnType<typeof h>;
  divided?: boolean;
  disabled?: boolean;
}

const options = [
  { key: 1, label: 'item1' },
  { key: 2, label: 'item2', divided: true },
  { key: 3, label: 'item3', disabled: true },
  { key: 4, label: 'item4' },
];
const options2 = [
  { key: 1, label: h('div', { class: 'bar', innerHTML: 'hello' }) },
  { key: 2, label: 'item2', divided: true },
  { key: 3, label: 'item3', disabled: true },
  { key: 4, label: 'item4' },
];
const dropdownRef = ref<{ show: () => void; hidden: () => void }>();

// 下拉列表显示改变时对应的回调函数
const visibleChangeHandler = (status: boolean) => {
  console.log('visibleChangeHandle', status);
};
// 选择具体下拉项目时对应的回调函数
const selectHandler = (item: Option) => {
  console.log('selectHandler', item);
};

const openClick = () => {
  dropdownRef.value?.show();
};
const closeClick = () => {
  dropdownRef.value?.hidden();
};
</script>
<style scoped lang="scss"></style>
