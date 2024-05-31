<template>
  <div class="absolute top-0 left-0 w-100% h-100% duration-250 -z-1">
    <img
      src="/404.webp"
      class="background absolute top-0 left-0 w-full h-full object-cover backface-hidden"
    />
  </div>

  <div class="common-layout">
    <el-container>
      <el-header class="lh-60">
        <el-row class="h-full">
          <el-col :span="12">
            <div
              class="grid-content ep-bg-purple flex justify-left items-center ml-40 h-full"
            >
              <Avatar
                avatar="/logo.webp"
                name="404forme"
                height="30px"
                width="30px"
              ></Avatar>
            </div>
          </el-col>
          <el-col :span="12">
            <div
              class="grid-content ep-bg-purple-light items-center flex justify-right gap-10 h-full"
            >
              <div @click="toLogin('login')">
                <Weko-Button>
                  {{ $t('login.login') }}
                </Weko-Button>
              </div>

              <div @click="toLogin('signIn')">
                <Weko-Button type="success">
                  {{ $t('login.signIn') }}
                </Weko-Button>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main class="boxContainer">
        <div class="tittle flex flex-col justify-center items-start">
          <span>{{ $t('goHome') }}</span>
          <span>{{ $t('youDrunk') }}</span>
        </div>
        <Weko-Button type="success" class="button" @click="toHome">
          {{ $t('backHome') }}
        </Weko-Button>
      </el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import Avatar from '@/components/Avatar/index.vue';
import router from '@/router';
import { userStore } from '@/stores/index';

const store = userStore();

type Jump = 'login' | 'signIn';

const toLogin = (jump: Jump) => {
  if (jump === 'login') {
    store.SET_CURRENTPAGE(0);
    return router.push('/login');
  }
  store.SET_CURRENTPAGE(3);
  return router.push('/login');
};

const toHome = () => {
  return router.push('/');
};
</script>
<style scoped lang="scss">
.background {
  transition:
    filter 0.3s,
    transform 0.3s;
  animation: fade-blur-in 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.45s;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  font-size: 16px;
  font-family: Bold Italic;
  font-style: italic;
  color: #92e3a9;
}

.boxContainer {
  height: calc(100vh - 60px);
  overflow: hidden;
  .tittle {
    font-size: 96px;
    color: #ffffff;
    font-weight: 900;
  }
}

.button {
  border-radius: 9999px;

  background: linear-gradient(270deg, #92e3a9 0%, #92e3a9 100%);
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  height: 44px;
  line-height: normal;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 6px;
    top: 4px;
    right: 6px;
    bottom: 4px;
    border-radius: 9999px;
  }
  animation: pulse-alt 1.4s ease-in-out infinite forwards;
}

$min: 0.95;
$max: 1.05;

@keyframes pulse-alt {
  from {
    transform: scale($min);
  }
  50% {
    transform: scale($max);
  }
  to {
    transform: scale($min);
  }
}
</style>
