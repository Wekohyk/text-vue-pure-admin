<template>
  <h2 class="row-title">{{ $t('components.default_show') }}</h2>
  <div class="row">
    <Weko-Button>{{ $t('components.default_btn') }}</Weko-Button>
    <Weko-Button type="primary">{{ $t('components.primary_btn') }}</Weko-Button>
    <Weko-Button type="info">{{ $t('components.message_btn') }}</Weko-Button>
    <Weko-Button type="success">{{ $t('components.success_btn') }}</Weko-Button>
    <Weko-Button type="warning">{{ $t('components.warning_btn') }}</Weko-Button>
    <Weko-Button type="danger">{{ $t('components.danger_btn') }}</Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('components.simplicity_btn') }}</h2>
  <div class="row">
    <Weko-Button plain>{{ $t('components.default_btn') }}</Weko-Button>
    <Weko-Button type="primary" plain>
      {{ $t('components.primary_btn') }}
    </Weko-Button>
    <Weko-Button type="info" plain>
      {{ $t('components.message_btn') }}
    </Weko-Button>
    <Weko-Button type="success" plain>
      {{ $t('components.success_btn') }}
    </Weko-Button>
    <Weko-Button type="warning" plain>
      {{ $t('components.warning_btn') }}
    </Weko-Button>
    <Weko-Button type="danger" plain>
      {{ $t('components.danger_btn') }}
    </Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('components.radius_btn') }}</h2>
  <div class="row">
    <Weko-Button round>{{ $t('components.default_btn') }}</Weko-Button>
    <Weko-Button type="primary" round>
      {{ $t('components.primary_btn') }}
    </Weko-Button>
    <Weko-Button type="info" round>
      {{ $t('components.message_btn') }}
    </Weko-Button>
    <Weko-Button type="success" plain round>
      {{ $t('components.success_btn') }}
    </Weko-Button>
    <Weko-Button type="warning" plain round>
      {{ $t('components.warning_btn') }}
    </Weko-Button>
    <Weko-Button type="danger" plain round>
      {{ $t('components.danger_btn') }}
    </Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('components.disabled') }}</h2>
  <div class="row">
    <Weko-Button disabled>{{ $t('components.default_btn') }}</Weko-Button>
    <Weko-Button type="primary" disabled>
      {{ $t('components.primary_btn') }}
    </Weko-Button>
    <Weko-Button type="info" disabled>
      {{ $t('components.message_btn') }}
    </Weko-Button>
    <Weko-Button type="success" disabled>
      {{ $t('components.success_btn') }}
    </Weko-Button>
    <Weko-Button type="warning" disabled>
      {{ $t('components.warning_btn') }}
    </Weko-Button>
    <Weko-Button type="danger" disabled>
      {{ $t('components.danger_btn') }}
    </Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('components.await') }}</h2>
  <div class="row">
    <Weko-Button loading>{{ $t('components.default_btn') }}</Weko-Button>
    <Weko-Button type="primary" loading>
      {{ $t('components.primary_btn') }}
    </Weko-Button>
    <Weko-Button type="info" loading>
      {{ $t('components.message_btn') }}
    </Weko-Button>
    <Weko-Button type="success" loading round>
      {{ $t('components.success_btn') }}
    </Weko-Button>
    <Weko-Button type="warning" loading round>
      {{ $t('components.warning_btn') }}
    </Weko-Button>
    <Weko-Button type="danger" loading round>
      {{ $t('components.danger_btn') }}
    </Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('components.icon_btn') }}</h2>
  <div class="row">
    <Weko-Button icon="file">{{ $t('components.default_btn') }}</Weko-Button>
    <Weko-Button type="primary" icon="gear">
      {{ $t('components.primary_btn') }}
    </Weko-Button>
    <Weko-Button type="info" icon="folder" plain>
      {{ $t('components.message_btn') }}
    </Weko-Button>
    <Weko-Button type="success" icon="bug" plain>
      {{ $t('components.success_btn') }}
    </Weko-Button>
    <Weko-Button type="warning" icon="code" round>
      {{ $t('components.warning_btn') }}
    </Weko-Button>
    <Weko-Button type="danger" icon="cube" round>
      {{ $t('components.danger_btn') }}
    </Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('components.different_size_btn') }}</h2>
  <div class="row">
    <Weko-Button icon="file" size="small">
      {{ $t('components.default_btn') }}
    </Weko-Button>
    <Weko-Button type="primary" icon="gear" size="small">
      {{ $t('components.primary_btn') }}
    </Weko-Button>
    <Weko-Button type="info" icon="folder" plain>
      {{ $t('components.message_btn') }}
    </Weko-Button>
    <Weko-Button type="success" icon="bug" plain>
      {{ $t('components.success_btn') }}
    </Weko-Button>
    <Weko-Button type="warning" icon="code" plain size="large">
      {{ $t('components.warning_btn') }}
    </Weko-Button>
    <Weko-Button type="danger" icon="cube" plain size="large">
      {{ $t('components.danger_btn') }}
    </Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('components.rounded_btn') }}</h2>
  <div class="row">
    <Weko-Button type="danger" circle>验</Weko-Button>
    <Weko-Button type="primary" icon="gear" circle></Weko-Button>
    <Weko-Button type="info" icon="folder" circle plain></Weko-Button>
    <Weko-Button type="success" icon="bug" circle plain></Weko-Button>
    <Weko-Button type="warning" icon="code" circle disabled></Weko-Button>
    <Weko-Button type="danger" icon="cube" circle disabled></Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('components.btn_event') }}</h2>
  <div class="row">
    <Weko-Button type="primary" @click="clickHandler" ref="btnRef">
      {{ $t('components.primary_btn') }}
    </Weko-Button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const btnRef = ref(null);
const clickHandler = () => {
  window.alert('button click');
};
</script>
<style scoped lang="scss"></style>
