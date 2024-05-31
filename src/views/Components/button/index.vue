<template>
  <h2 class="row-title">{{ $t('components.defaultShow') }}</h2>
  <div class="row">
    <Weko-Button>{{ $t('components.defaultBtn') }}</Weko-Button>
    <Weko-Button type="primary">{{ $t('components.primaryBtn') }}</Weko-Button>
    <Weko-Button type="info">{{ $t('components.messageBtn') }}</Weko-Button>
    <Weko-Button type="success">{{ $t('components.successBtn') }}</Weko-Button>
    <Weko-Button type="warning">{{ $t('components.warningBtn') }}</Weko-Button>
    <Weko-Button type="danger">{{ $t('components.dangerBtn') }}</Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('components.simplicityBtn') }}</h2>
  <div class="row">
    <Weko-Button plain>{{ $t('components.defaultBtn') }}</Weko-Button>
    <Weko-Button type="primary" plain>
      {{ $t('components.primaryBtn') }}
    </Weko-Button>
    <Weko-Button type="info" plain>
      {{ $t('components.messageBtn') }}
    </Weko-Button>
    <Weko-Button type="success" plain>
      {{ $t('components.successBtn') }}
    </Weko-Button>
    <Weko-Button type="warning" plain>
      {{ $t('components.warningBtn') }}
    </Weko-Button>
    <Weko-Button type="danger" plain>
      {{ $t('components.dangerBtn') }}
    </Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('components.radiusBtn') }}</h2>
  <div class="row">
    <Weko-Button round>{{ $t('components.defaultBtn') }}</Weko-Button>
    <Weko-Button type="primary" round>
      {{ $t('components.primaryBtn') }}
    </Weko-Button>
    <Weko-Button type="info" round>
      {{ $t('components.messageBtn') }}
    </Weko-Button>
    <Weko-Button type="success" plain round>
      {{ $t('components.successBtn') }}
    </Weko-Button>
    <Weko-Button type="warning" plain round>
      {{ $t('components.warningBtn') }}
    </Weko-Button>
    <Weko-Button type="danger" plain round>
      {{ $t('components.dangerBtn') }}
    </Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('components.disabled') }}</h2>
  <div class="row">
    <Weko-Button disabled>{{ $t('components.defaultBtn') }}</Weko-Button>
    <Weko-Button type="primary" disabled>
      {{ $t('components.primaryBtn') }}
    </Weko-Button>
    <Weko-Button type="info" disabled>
      {{ $t('components.messageBtn') }}
    </Weko-Button>
    <Weko-Button type="success" disabled>
      {{ $t('components.successBtn') }}
    </Weko-Button>
    <Weko-Button type="warning" disabled>
      {{ $t('components.warningBtn') }}
    </Weko-Button>
    <Weko-Button type="danger" disabled>
      {{ $t('components.dangerBtn') }}
    </Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('components.await') }}</h2>
  <div class="row">
    <Weko-Button loading>{{ $t('components.defaultBtn') }}</Weko-Button>
    <Weko-Button type="primary" loading>
      {{ $t('components.primaryBtn') }}
    </Weko-Button>
    <Weko-Button type="info" loading>
      {{ $t('components.messageBtn') }}
    </Weko-Button>
    <Weko-Button type="success" loading round>
      {{ $t('components.successBtn') }}
    </Weko-Button>
    <Weko-Button type="warning" loading round>
      {{ $t('components.warningBtn') }}
    </Weko-Button>
    <Weko-Button type="danger" loading round>
      {{ $t('components.dangerBtn') }}
    </Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('components.iconBtn') }}</h2>
  <div class="row">
    <Weko-Button icon="file">{{ $t('components.defaultBtn') }}</Weko-Button>
    <Weko-Button type="primary" icon="gear">
      {{ $t('components.primaryBtn') }}
    </Weko-Button>
    <Weko-Button type="info" icon="folder" plain>
      {{ $t('components.messageBtn') }}
    </Weko-Button>
    <Weko-Button type="success" icon="bug" plain>
      {{ $t('components.successBtn') }}
    </Weko-Button>
    <Weko-Button type="warning" icon="code" round>
      {{ $t('components.warningBtn') }}
    </Weko-Button>
    <Weko-Button type="danger" icon="cube" round>
      {{ $t('components.dangerBtn') }}
    </Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('components.differentSizeBtn') }}</h2>
  <div class="row">
    <Weko-Button icon="file" size="small">
      {{ $t('components.defaultBtn') }}
    </Weko-Button>
    <Weko-Button type="primary" icon="gear" size="small">
      {{ $t('components.primaryBtn') }}
    </Weko-Button>
    <Weko-Button type="info" icon="folder" plain>
      {{ $t('components.messageBtn') }}
    </Weko-Button>
    <Weko-Button type="success" icon="bug" plain>
      {{ $t('components.successBtn') }}
    </Weko-Button>
    <Weko-Button type="warning" icon="code" plain size="large">
      {{ $t('components.warningBtn') }}
    </Weko-Button>
    <Weko-Button type="danger" icon="cube" plain size="large">
      {{ $t('components.dangerBtn') }}
    </Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('components.roundedBtn') }}</h2>
  <div class="row">
    <Weko-Button type="danger" circle>验</Weko-Button>
    <Weko-Button type="primary" icon="gear" circle></Weko-Button>
    <Weko-Button type="info" icon="folder" circle plain></Weko-Button>
    <Weko-Button type="success" icon="bug" circle plain></Weko-Button>
    <Weko-Button type="warning" icon="code" circle disabled></Weko-Button>
    <Weko-Button type="danger" icon="cube" circle disabled></Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('components.btnEvent') }}</h2>
  <div class="row">
    <Weko-Button type="primary" @click="clickHandler" ref="btnRef">
      {{ $t('components.primaryBtn') }}
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
