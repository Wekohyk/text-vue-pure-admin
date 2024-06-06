<template>
  <div class="flex justify-left items-center gap-10 flex-wrap mt-30 m-10">
    <!-- info消息类型 -->
    <Weko-Button type="info" @click="message($t('element.info'))">
      Info
    </Weko-Button>

    <!-- success消息类型 -->
    <Weko-Button
      type="success"
      @click="message($t('element.success'), { type: 'success' })"
    >
      Success
    </Weko-Button>

    <!-- warning消息类型 -->
    <Weko-Button
      type="warning"
      @click="message($t('element.warning'), { type: 'warning' })"
    >
      Warning
    </Weko-Button>

    <!-- error消息类型 -->
    <Weko-Button
      type="danger"
      @click="message($t('element.error'), { type: 'error' })"
    >
      Error
    </Weko-Button>

    <!-- 可以关闭的消息通知 -->
    <Weko-Button @click="message($t('element.turn_off'), { showClose: true })">
      {{ $t('element.turn_off') }}
    </Weko-Button>

    <!-- 分组消息合并 -->
    <Weko-Button
      @click="
        message($t('element.message_merging'), {
          type: 'success',
          grouping: true,
        })
      "
    >
      {{ $t('element.message_merging') }}
    </Weko-Button>

    <!-- 自定义图标 -->
    <Weko-Button @click="message($t('element.customize_icon'), { icon: View })">
      {{ $t('element.customize_icon') }}
    </Weko-Button>

    <!-- 自定义延时关闭并设置关闭后的其他操作 -->
    <Weko-Button
      @click="
        message($t('element.second_close'), {
          duration: 2000,
          onClose: () => message($t('element.been_close')),
        })
      "
    >
      {{ $t('element.customize_off') }}
    </Weko-Button>

    <!-- 自定义消息内容 -->
    <Weko-Button
      @click="
        message(
          h('p', null, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color: green' }, 'VNode'),
          ]),
          { type: 'success' },
        )
      "
    >
      {{ $t('element.customize_message') }}
    </Weko-Button>

    <!-- HTML片段作为正文内容 -->
    <Weko-Button
      @click="
        message('<strong>This is <i>HTML</i> string</strong>', {
          dangerouslyUseHTMLString: true,
        })
      "
    >
      {{ $t('element.content_html') }}
    </Weko-Button>
  </div>
</template>
<script setup lang="ts">
import { message } from '@/components/ElementComponents/ElementMessage/index.ts';
import { View } from '@element-plus/icons-vue';
import { h } from 'vue';
</script>
<style scoped lang="scss"></style>
