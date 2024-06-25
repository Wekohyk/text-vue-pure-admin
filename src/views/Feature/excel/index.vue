<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('feature.export_excel') }}</div>
    </div>

    <el-button type="primary" @click="exportExcel" class="mt-20">
      {{ $t('feature.export_excel') }}
    </el-button>
    <div class="h-[25rem] mt-3">
      <el-auto-resizer>
        <template #default="{ height, width }">
          <el-table-v2
            :columns="columns"
            :data="data"
            :width="width"
            :height="height"
            fixed
          />
        </template>
      </el-auto-resizer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { utils, writeFile } from 'xlsx';

defineOptions({
  name: 'Excel',
});

interface DataItem {
  readonly id: string;
  [propName: string]: string;
}

interface Columns {
  dataKey: string;
  key: string;
  title: string;
  width?: any;
  [propName: string]: string | number;
}

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }));

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-',
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
        return rowData;
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      },
    );
  });

const columns = generateColumns(10);
const data = generateData(columns, 1000);

const exportExcel = () => {
  const res: string[][] = data.map((item: DataItem) => {
    const arr: any[] = [];
    columns.forEach((column: Columns) => {
      arr.push(item[column.dataKey]);
    });
    return arr;
  });
  const titleList: string[] = [];
  columns.forEach((column: Columns) => {
    titleList.push(column.title);
  });
  res.unshift(titleList);
  const workSheet = utils.aoa_to_sheet(res);
  const workBook = utils.book_new();
  utils.book_append_sheet(workBook, workSheet, '数据报表');
  writeFile(workBook, 'tableV2.xlsx');
};
</script>
