<template>
  <div class="m-20">
    <!-- 调节大小按钮 -->
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <el-space wrap :size="40">
        <span style="font-size: 16px; font-weight: 800">
          {{ $t('element.check_button') }}
        </span>
        <el-radio-group v-model="size">
          <el-radio value="large">{{ $t('element.large_size') }}</el-radio>
          <el-radio value="default">
            {{ $t('element.default_size') }}
          </el-radio>
          <el-radio value="small">{{ $t('element.small_size') }}</el-radio>
          <el-radio value="disabled">
            {{ $t('element.disabled_state') }}
          </el-radio>
        </el-radio-group>
      </el-space>
    </div>
    <p class="mb-2 mt-20">{{ $t('element.radio_compact') }}</p>
    <el-radio-group
      v-model="radio"
      :size="dynamicSize"
      :disabled="size === 'disabled'"
    >
      <el-radio-button value="wait">
        {{ $t('element.waiting') }}
      </el-radio-button>
      <el-radio-button value="progress">
        {{ $t('element.complete') }}
      </el-radio-button>
      <el-radio-button value="complete">
        {{ $t('element.selected') }}
      </el-radio-button>
    </el-radio-group>
    <el-divider />

    <p class="mb-2">{{ $t('element.radio_border') }}</p>
    <el-radio-group
      v-model="radioBox"
      :size="dynamicSize"
      :disabled="size === 'disabled'"
    >
      <el-radio value="wait" border>{{ $t('element.waiting') }}</el-radio>
      <el-radio value="progress" border>{{ $t('element.complete') }}</el-radio>
      <el-radio value="complete" border>{{ $t('element.selected') }}</el-radio>
    </el-radio-group>
    <el-divider />

    <p class="mb-2">{{ $t('element.radio_custom') }}</p>
    <el-radio-group
      v-model="radioCustom"
      :size="dynamicSize"
      :disabled="size === 'disabled'"
    >
      <el-radio-button value="wait">
        <span class="flex">
          <IconifyIconOnline icon="ri:progress-8-fill" class="mr-1" />
          {{ $t('element.waiting') }}
        </span>
      </el-radio-button>
      <el-radio-button value="progress">
        <span class="flex">
          <IconifyIconOnline icon="ri:progress-6-line" class="mr-1" />
          {{ $t('element.complete') }}
        </span>
      </el-radio-button>
      <el-radio-button value="complete">
        <span class="flex">
          <IconifyIconOnline icon="ri:progress-8-line" class="mr-1" />
          {{ $t('element.selected') }}
        </span>
      </el-radio-button>
    </el-radio-group>
    <el-divider />

    <p class="mb-2">{{ $t('element.multiple_compact') }}</p>
    <el-checkbox-group
      v-model="checkboxGroup"
      :size="dynamicSize"
      :disabled="size === 'disabled'"
    >
      <el-checkbox-button value="apple">
        {{ $t('element.apple') }}
      </el-checkbox-button>
      <el-checkbox-button value="tomato">
        {{ $t('element.tomato') }}
      </el-checkbox-button>
      <el-checkbox-button value="banana">
        {{ $t('element.banana') }}
      </el-checkbox-button>
    </el-checkbox-group>
    <el-divider />

    <p class="mb-2">{{ $t('element.multiple_border') }}</p>
    <el-checkbox-group
      v-model="checkboxGroupBox"
      :size="dynamicSize"
      :disabled="size === 'disabled'"
    >
      <el-checkbox value="cucumber" border>
        {{ $t('element.cucumber') }}
      </el-checkbox>
      <el-checkbox value="onion" border>{{ $t('element.onion') }}</el-checkbox>
      <el-checkbox value="blueberry" border>
        {{ $t('element.blueberry') }}
      </el-checkbox>
    </el-checkbox-group>
    <el-divider />

    <p class="mb-2">{{ $t('element.multiple_different') }}</p>
    <el-checkbox-group
      v-model="checkboxGroupCustom"
      class="pure-checkbox"
      :size="dynamicSize"
      :disabled="size === 'disabled'"
    >
      <el-checkbox-button value="tomato">
        <span class="flex">
          <IconifyIconOnline icon="streamline-emojis:tomato" class="mr-1" />
          {{ $t('element.tomato_name') }}
        </span>
      </el-checkbox-button>
      <el-checkbox-button value="watermelon">
        <span class="flex">
          <IconifyIconOnline
            icon="streamline-emojis:watermelon-1"
            class="mr-1"
          />
          {{ $t('element.watermelon') }}
        </span>
      </el-checkbox-button>
      <el-checkbox-button value="strawberry">
        <span class="flex">
          <IconifyIconOnline
            icon="streamline-emojis:strawberry-1"
            class="mr-1"
          />
          {{ $t('element.strawberry') }}
        </span>
      </el-checkbox-button>
    </el-checkbox-group>
    <el-divider />

    <p>{{ $t('element.spacing_button') }}</p>
    <el-slider
      v-model="spaceSize"
      class="mb-2 !w-[300px]"
      :show-tooltip="false"
      :disabled="size === 'disabled'"
    />
    <p class="mb-2">{{ $t('element.single_choice') }}</p>
    <el-space wrap :size="spaceSize">
      <el-check-tag
        v-for="(tag, index) in checkTag"
        :key="index"
        :class="[
          'select-none',
          size === 'disabled' && 'tag-disabled',
          tag.checked && 'is-active',
        ]"
        :checked="tag.checked"
        @change="onChecked(tag, index)"
      >
        {{ tag.title }}
      </el-check-tag>
    </el-space>
    <p class="mb-2 mt-4">
      {{ $t('element.multiple_choice') }}
      {{
        getKeyList(
          checkGroupTag.filter(tag => tag.checked),
          'title',
        )
      }}
    </p>
    <el-space wrap :size="spaceSize">
      <el-check-tag
        v-for="(tag, index) in checkGroupTag"
        :key="index"
        :class="[
          'select-none',
          size === 'disabled' && 'tag-disabled',
          tag.checked && 'is-active',
        ]"
        :checked="tag.checked"
        @change="onGroupChecked(tag, index)"
      >
        {{ tag.title }}
      </el-check-tag>
    </el-space>
    <el-divider />

    <p class="mb-2">{{ $t('element.single_button') }}</p>
    <el-check-tag
      :class="[
        'select-none',
        size === 'disabled' && 'tag-disabled',
        checked && 'is-active',
      ]"
      :checked="checked"
      @change="onSingleChecked"
    >
      {{ $t('element.hah') }}
    </el-check-tag>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { message } from '@/utils/message';
import { getKeyList } from '@pureadmin/utils';
import { $t } from '@/lang/index';

defineOptions({
  name: 'CheckButton',
});

const spaceSize = ref(20);
const size = ref('default');
const dynamicSize = ref();
const checked = ref(true);

const radio = ref('wait');
const radioBox = ref('complete');
const radioCustom = ref('progress');

const checkboxGroup = ref(['apple', 'tomato']);
const checkboxGroupBox = ref(['cucumber', 'onion', 'blueberry']);
const checkboxGroupCustom = ref(['tomato', 'watermelon', 'strawberry']);

/** 单选（可控制间距的按钮样式） */
const checkTag = ref([
  {
    title: $t('element.waiting'),
    checked: false,
  },
  {
    title: $t('element.under_way'),
    checked: true,
  },
  {
    title: $t('element.complete'),
    checked: false,
  },
]);
interface Tag {
  title: string;
  checked: boolean;
}
const curTagMap = ref<Record<number, { title: string; checked: boolean }>>({});
const onChecked = (tag: Tag, index: number) => {
  if (size.value === 'disabled') return;
  curTagMap.value[index] = Object.assign({
    ...tag,
    checked: !tag.checked,
  });
  checkTag.value.map(item => (item.checked = false));
  checkTag.value[index].checked = curTagMap.value[index].checked;
  const { title, checked } = curTagMap.value[index];
  message(
    checked
      ? `${$t('element.selected')}${title}`
      : `${$t('element.uncheck')}${title}`,
    {
      type: 'success',
    },
  );
};

/** 多选（可控制间距的按钮样式） */
const checkGroupTag = ref([
  {
    title: $t('element.apple'),
    checked: true,
  },
  {
    title: $t('element.tomato'),
    checked: true,
  },
  {
    title: $t('element.banana'),
    checked: false,
  },
]);
const curTagGroupMap = ref<Record<number, { title: string; checked: boolean }>>(
  {},
);
const onGroupChecked = (tag: Tag, index: number) => {
  if (size.value === 'disabled') return;
  curTagGroupMap.value[index] = Object.assign({
    ...tag,
    checked: !tag.checked,
  });
  checkGroupTag.value[index].checked = curTagGroupMap.value[index].checked;
};
const onSingleChecked = () => {
  if (size.value === 'disabled') return;
  checked.value = !checked.value;
};

watch(size, val =>
  val === 'disabled'
    ? (dynamicSize.value = 'default')
    : (dynamicSize.value = size.value),
);
</script>

<style lang="scss" scoped>
:deep(.el-divider--horizontal) {
  margin: 17px 0;
}

:deep(.pure-checkbox) {
  .el-checkbox-button {
    /* 选中时的自定义样式 */
    &.is-checked {
      .el-checkbox-button__inner {
        color: var(--el-color-primary);
        background-color: var(--el-color-primary-light-8);
        border-color: transparent;
        border-left-color: #fff;
      }
    }

    /* 禁用时的自定义样式 */
    &.is-disabled {
      .el-checkbox-button__inner {
        color: var(--el-disabled-text-color);
        background-color: var(
          --el-button-disabled-bg-color,
          var(--el-fill-color-blank)
        );
        border-color: var(
          --el-button-disabled-border-color,
          var(--el-border-color-light)
        );
      }
    }
  }
}

/** 可控制间距的按钮禁用样式 */
.tag-disabled {
  color: var(--el-disabled-text-color);
  cursor: not-allowed;
  background-color: var(--el-color-info-light-9);

  &:hover {
    background-color: var(--el-color-info-light-9);
  }

  &.is-active {
    background-color: var(--el-color-primary-light-9);
  }
}
</style>
