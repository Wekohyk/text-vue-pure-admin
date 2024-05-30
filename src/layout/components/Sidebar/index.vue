<template>
  <div class="left-sidebar relative">
    <SidebarLogo
      logo="/logo.webp"
      :collapse="appStore().collapse"
      class="b-b-1 b-b-solid b-b-#e4e7ed b-r-1 b-r-solid b-r-#e4e7ed"
    ></SidebarLogo>

    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu router class="el-menu-vertical-demo">
        <div v-for="item in routerList" :key="item.path">
          <!-- Use el-sub-menu if the page has children -->
          <el-sub-menu
            v-if="item.children && item.children.length > 0"
            :title="item.meta.name"
            :index="item.path"
            :class="!store.showSidebar ? 'flex justify-center absolute' : ''"
            :id="!store.showSidebar ? 'one' : ''"
          >
            <template #title>
              <font-awesome-icon
                v-if="store.showSidebar"
                :style="{
                  color: item.path === $route.path ? '#409EFF' : '#000000',
                }"
                :icon="item.meta.fontIcon as string"
              />
              <span
                v-if="store.showSidebar"
                class="pl-10"
                :style="{
                  color: item.path === $route.path ? '#409EFF' : '#000000',
                }"
              >
                {{ item.meta.title }}
              </span>

              <!-- popover -->
              <el-popover
                v-if="!store.showSidebar"
                placement="right"
                :width="100"
                trigger="hover"
              >
                <template #reference>
                  <font-awesome-icon
                    :style="{
                      color: item.path === $route.path ? '#409EFF' : '#000000',
                    }"
                    :icon="item.meta.fontIcon as string"
                  />
                </template>
                <el-menu-item
                  v-for="itemChildren in item.children"
                  :key="itemChildren.path"
                  :index="itemChildren.path"
                  class="bg-#f5f7fa b-b-1 b-b-solid b-b-#ffffff"
                  :style="{
                    color:
                      itemChildren.path === $route.path ? '#409EFF' : '#000000',
                  }"
                >
                  {{ itemChildren.meta?.title }}
                </el-menu-item>
              </el-popover>
            </template>

            <!-- Loop through the children of the page -->
            <div v-if="store.showSidebar">
              <el-menu-item
                v-for="itemChildren in item.children"
                :key="itemChildren.path"
                :index="itemChildren.path"
                class="bg-#f5f7fa"
                :style="{
                  color:
                    itemChildren.path === $route.path ? '#409EFF' : '#000000',
                }"
              >
                {{ itemChildren.meta?.title }}
              </el-menu-item>
            </div>
          </el-sub-menu>
          <!-- else hidden -->
          <el-menu-item v-else :key="item.path" :index="item.path">
            <font-awesome-icon
              :style="{
                color: item.path === $route.path ? '#409EFF' : '#000000',
              }"
              :icon="item.meta.fontIcon as string"
            />
            <span
              v-if="store.showSidebar"
              class="pl-10"
              :style="{
                color: item.path === $route.path ? '#409EFF' : '#000000',
              }"
            >
              {{ item.meta.title }}
            </span>
          </el-menu-item>
        </div>
      </el-menu>
    </el-scrollbar>

    <!-- footer button -->
    <div
      class="absolute bottom-0 text-center w-100% bg-#fff h-40 flex justify-center"
    >
      <div
        v-if="!store.showSidebar"
        @click="store.toggleShowSidebar"
        class="hover:cursor-pointer"
      >
        <el-icon size="25" color="#999"><Expand /></el-icon>
      </div>
      <div v-else @click="store.toggleShowSidebar" class="hover:cursor-pointer">
        <el-icon size="25" color="#999"><Fold /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarLogo from './SidebarLogo.vue';
import { appStore } from '@/stores/index';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from '@/router';
import { Expand, Fold } from '@element-plus/icons-vue';
import { settingStore } from '@/stores/index';

const routerList = router.getRoutes().filter(item => item.meta.isShow === true);

const store = settingStore();
</script>

<style scoped lang="scss">
// add scrollbar effect
.el-menu {
  height: calc(100vh - 50px);
  overflow-y: scroll;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 400px;
}
.scrollbar-wrapper {
  overflow-x: hidden !important;
}

::v-deep #one .el-icon {
  display: none;
}
</style>
