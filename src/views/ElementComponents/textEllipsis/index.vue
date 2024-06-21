<template>
  <div class="m-20">
    <!-- 调节大小按钮 -->
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">
        {{ $t('element.text_ellipsis_text') }}
        <el-link
          href="https://element-plus.org/zh-CN/component/text.html"
          target="_blank"
          style="margin: 0 4px 5px; font-size: 16px"
        >
          el-text
        </el-link>
        {{ $t('element.and') }}

        <el-link
          href="https://vue-tippy.netlify.app/basic-usage"
          target="_blank"
          style="margin: 0 4px 5px; font-size: 16px"
        >
          VueTippy
        </el-link>
        {{ $t('element.show_tooltip') }}
      </div>
    </div>

    <p class="mb-2 mt-20">
      {{ $t('element.basic_usage_text') }}
    </p>
    <el-space wrap>
      <ul class="content">
        <li>
          <ReText>
            测试文本，这是一个稍微有点长的文本，过长省略后，鼠标悬浮会有tooltip提示
          </ReText>
          <ReText :lineClamp="2">
            测试文本，这是一个稍微有点长的文本，lineClamp参数为2，即两行过长省略后，鼠标悬浮会有tooltip提示
          </ReText>
        </li>
      </ul>
    </el-space>

    <el-divider />

    <p class="mb-2">
      {{ $t('element.custom_tooltip') }}
    </p>
    <div class="mb-2">
      <el-button @click="changeTooltipContent">
        {{ $t('element.click_toggle_tooltip') }}
      </el-button>
    </div>
    <el-space wrap>
      <ul class="content">
        <li>
          <ReText :tippyProps="{ content: customContent }">
            props写法 -
            测试文本，这是一个稍微有点长的文本，过长省略后，鼠标悬浮会有tooltip提示
          </ReText>
        </li>
        <li>
          <ReText>
            <template #content>
              <div>
                <b>{{ $t('element.slot_notation') }}</b>
                <div>{{ customContent }}</div>
              </div>
            </template>
            插槽写法 -
            测试文本，这是一个稍微有点长的文本，过长省略后，鼠标悬浮会有tooltip提示
          </ReText>
        </li>
      </ul>
    </el-space>

    <el-divider />
    <p class="mb-2">
      {{ $t('element.custom_el_text') }}
    </p>
    <el-space wrap>
      <ul class="content">
        <li>
          <ReText type="primary" size="large">
            测试文本，这是一个稍微有点长的文本，过长省略后，鼠标悬浮会有tooltip提示
          </ReText>
        </li>
        <li>
          <ReText :lineClamp="4" type="info">
            测试文本，这是一个非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长的文本，lineClamp参数为4，即四行过长省略后，鼠标悬浮会有tooltip提示
          </ReText>
        </li>
      </ul>
    </el-space>

    <el-divider />
    <p class="mb-2">{{ $t('element.custom_vue_tippy') }}</p>
    <el-space wrap>
      <ul class="content">
        <li>
          <ReText
            :tippyProps="{ offset: [0, -20], theme: 'light', arrow: false }"
          >
            偏移白色无箭头 -
            测试文本，这是一个稍微有点长的文本，过长省略后，鼠标悬浮会有tooltip提示
          </ReText>
        </li>
        <li>
          <ReText :lineClamp="4" :tippyProps="{ followCursor: true }">
            鼠标跟随 -
            测试文本，这是一个非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长的文本，lineClamp参数为4，即四行过长省略后，鼠标悬浮会有tooltip提示
          </ReText>
        </li>
      </ul>
    </el-space>

    <el-divider />
    <p class="mb-2">
      {{ $t('element.component_nest') }}
      /p>
      <el-space wrap>
        <ul class="content">
          <li>
            <ReText tag="p" :lineClamp="2">
              This is a paragraph. Paragraph start
              <ReText :truncated="false">
                【 This is ReText
                <ReText tag="sup" size="small" :truncated="false">
                  superscript 】
                </ReText>
              </ReText>
              <el-text>
                【 This is El-Text
                <el-text tag="sub" size="small">subscript 】</el-text>
              </el-text>
              <el-text tag="ins">【Inserted】</el-text>
              <el-text tag="del">【Deleted】</el-text>
              <el-text tag="mark">【Marked】</el-text>
              Paragraph end.
            </ReText>
          </li>
        </ul>
      </el-space>
    </p>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import { ref } from 'vue';
import { ReText } from '@/components/ReText';
import { $t } from '@/lang/index';

defineOptions({
  name: 'PureText',
});

const customContent = ref($t('element.custom_tooltip'));

const changeTooltipContent = () => {
  customContent.value =
    $t('element.now_time') + dayjs().format('YYYY-MM-DD HH:mm:ss');
};
</script>

<style lang="scss" scoped>
.content {
  width: 400px;
  padding: 15px;
  overflow: hidden;
  resize: horizontal;
  background-color: var(--el-color-info-light-9);
  border-radius: 8px;
}
</style>
