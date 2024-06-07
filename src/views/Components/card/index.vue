<template>
  <div class="row-title">{{ $t('components.first_group') }}</div>
  <div class="row">
    <!-- 第一张卡片 -->
    <Weko-Card
      imgSrc="/components/card1.webp"
      :summary="$t('components.card_text3')"
    ></Weko-Card>
    <!-- 第二张卡片 -->
    <Weko-Card
      imgSrc="/components/card2.webp"
      :summary="$t('components.card_text4')"
    >
      <!-- 插槽内部的内容样式由用户自己决定 -->
      <template #footer>
        <div class="footer">
          <div class="level">{{ $t('components.card_text1') }}</div>
          <div class="price">{{ $t('components.card_money') + '20' }}</div>
        </div>
      </template>
    </Weko-Card>
  </div>
  <div class="row-title">{{ $t('components.second_group') }}</div>
  <div class="row">
    <!-- 第三张卡片 -->
    <Weko-Card imgSrc="/components/card3.webp" :width="368" :imgHeight="90">
      <div>{{ $t('components.card_text2') }}</div>
      <!-- 插槽内部的内容样式由用户自己决定 -->
      <template #footer>
        <div class="footer-custom">
          <div class="level">{{ $t('components.card_footer1') }}</div>
          <div>⚡️</div>
          <div class="level">{{ $t('components.card_footer2') }}</div>
        </div>
      </template>
    </Weko-Card>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level {
  color: #9199a1;
  margin-bottom: 8px;
}

.price {
  color: #f01414;
}

.footer-custom {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 0 8px;
}
</style>
