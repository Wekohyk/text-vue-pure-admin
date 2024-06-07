<template>
  <h2 class="row-title">{{ $t('components.dialog_example') }}</h2>
  <div class="row">
    <Weko-Button type="primary" @click="visible = true">
      {{ $t('components.first_dialog') }}
    </Weko-Button>
    <Weko-Button type="success" @click="visible2 = true">
      {{ $t('components.second_dialog') }}
    </Weko-Button>
    <Weko-Button type="info" @click="visible3 = true">
      {{ $t('components.third_dialog') }}
    </Weko-Button>
  </div>
  <Weko-Dialog v-model:visible="visible" @close="visible = false">
    {{ $t('components.dialog_text') }}
  </Weko-Dialog>
  <Weko-Dialog
    v-model:visible="visible2"
    @close="visible2 = false"
    :title="$t('components.dialog_basic_name')"
    top="30vh"
    width="90%"
  >
    {{ $t('components.dialog_text') }}
  </Weko-Dialog>
  <Weko-Dialog v-model:visible="visible3" @close="visible3 = false">
    {{ $t('components.dialog_text') }}
    <template #footer>
      <Weko-Button type="danger" @click="visible3 = false">
        {{ $t('components.off') }}
      </Weko-Button>
      <Weko-Button type="warning" @click="visible3 = false">
        {{ $t('components.sure') }}
      </Weko-Button>
    </template>
  </Weko-Dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const visible = ref(false);
const visible2 = ref(false);
const visible3 = ref(false);
</script>
<style scoped lang="scss"></style>
