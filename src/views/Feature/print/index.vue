<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('feature.puzzle_verify') }}</div>
    </div>

    <el-row class="mt-20" :gutter="24">
      <el-col
        v-motion
        :xs="24"
        :sm="24"
        :md="24"
        :lg="24"
        :xl="24"
        :initial="{
          opacity: 0,
          y: 100,
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 200,
          },
        }"
      >
        <p class="font-medium text-lg text-center">Table</p>
        <el-table
          border
          :data="tableData"
          :row-class-name="tableRowClassName"
          class="el-table w-full mt-[10px]"
        >
          <el-table-column prop="date" label="Date" />
          <el-table-column prop="name" label="Name" />
          <el-table-column prop="age" label="age" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </el-col>

      <el-col
        v-motion
        :xs="11"
        :sm="11"
        :md="11"
        :lg="11"
        :xl="11"
        :initial="{
          opacity: 0,
          y: 100,
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 200,
          },
        }"
      ></el-col>

      <el-col
        v-motion
        :xs="11"
        :sm="11"
        :md="11"
        :lg="11"
        :xl="11"
        :initial="{
          opacity: 0,
          y: 100,
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 200,
          },
        }"
      ></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Print',
});

interface User {
  date: string;
  name: string;
  age: number;
  address: string;
}

const tableRowClassName = ({ rowIndex }: { row: User; rowIndex: number }) => {
  if (rowIndex === 1) {
    return 'warning-row';
  } else if (rowIndex === 3) {
    return 'success-row';
  }
  return '';
};

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    age: 18,
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    age: 18,
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    age: 18,
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    age: 18,
    address: 'No. 189, Grove St, Los Angeles',
  },
];
</script>

<style lang="scss" scoped>
:deep(.el-table__row.warning-row) {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}

:deep(.el-table__row.success-row) {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
