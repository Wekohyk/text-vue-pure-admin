<template>
  <div class="m-20">
    <div>{{ $t('element.single_check') }}</div>
    <div class="mt-10 flex gap-10 items-center">
      <el-card
        class="hoverCard"
        shadow="never"
        :class="singleCheck === 'select1' ? 'selectedCard' : ''"
        @click="selectCard('select1')"
      >
        <div>
          <img src="/avatar.webp" alt="" class="w-30" />
        </div>
      </el-card>
      <el-card
        class="hoverCard"
        shadow="never"
        :class="singleCheck === 'select2' ? 'selectedCard' : ''"
        @click="selectCard('select2')"
      >
        <div>
          <img src="/avatar.webp" alt="" class="w-30" />
        </div>
      </el-card>
    </div>

    <div class="mt-30">{{ $t('element.multiple_check') }}</div>
    <div class="mt-10 flex flex-col gap-10">
      <el-card
        class="hoverCard"
        shadow="never"
        :class="multipleCheck1 === 'multipleCheck1' ? 'selectedCard' : ''"
        @click="multipleCard1('multipleCheck1')"
      >
        <div>
          <img src="/avatar.webp" alt="" class="w-30" />
        </div>
      </el-card>
      <el-card
        class="hoverCard"
        shadow="never"
        :class="multipleCheck2 === 'multipleCheck2' ? 'selectedCard' : ''"
        @click="multipleCard2('multipleCheck2')"
      >
        <div>
          <img src="/avatar.webp" alt="" class="w-30" />
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 单选
type SingleCheck = 'select1' | 'select2';

const singleCheck = ref<SingleCheck>();

const selectCard = (card: SingleCheck) => {
  if (singleCheck.value === card) {
    return (singleCheck.value = '');
  }
  singleCheck.value = card;
};

// 多选
type MultipleCheck1 = 'multipleCheck1';
type MultipleCheck2 = 'multipleCheck2';

const multipleCheck1 = ref<MultipleCheck1>();
const multipleCheck2 = ref<MultipleCheck2>();

const multipleCard1 = (card: string) => {
  if (multipleCheck1.value === card) {
    multipleCheck1.value = '';
  } else {
    multipleCheck1.value = card;
  }
};

const multipleCard2 = (card: string) => {
  if (multipleCheck2.value === card) {
    multipleCheck2.value = '';
  } else {
    multipleCheck2.value = card;
  }
};
</script>

<style scoped lang="scss">
.hoverCard {
  cursor: pointer;
  width: 500px;
}

.selectedCard {
  background-color: #eef5fe;
  border: 1px solid #6a9af1;
}
</style>
