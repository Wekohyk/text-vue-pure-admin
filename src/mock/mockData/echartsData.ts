import { $t } from '@/lang/index';

export default {
  echartsData: () => {
    return {
      code: 200,
      data: {
        option1: {
          title: {
            text: $t('echarts.access_number'),
            left: 'center',
          },
          tooltip: {},
          xAxis: {
            data: [
              $t('week0'),
              $t('week1'),
              $t('week2'),
              $t('week3'),
              $t('week4'),
              $t('week5'),
              $t('week6'),
            ],
          },
          yAxis: {},
          series: [
            {
              name: $t('echarts.every_day'),
              type: 'bar',
              data: [35, 120, 136, 210, 110, 210, 90],
              itemStyle: {
                color: '#91cc75',
              },
              barWidth: '30%',
            },
          ],
        },
        option2: {
          title: {
            text: $t('echarts.access_number'),
            left: 'center',
          },
          tooltip: {},
          xAxis: {
            data: [
              $t('week0'),
              $t('week1'),
              $t('week2'),
              $t('week3'),
              $t('week4'),
              $t('week5'),
              $t('week6'),
            ],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              name: $t('echarts.today'),
              type: 'line',
              data: [35, 120, 136, 210, 110, 210, 90],
              itemStyle: {
                color: '#91cc75',
              },
            },
            {
              name: $t('echarts.yesterday'),
              type: 'line',
              data: [20, 146, 387, 111, 98, 278, 130],
            },
          ],
        },
        option3: {
          title: {
            text: $t('echarts.access_number'),
            left: 'center',
          },
          series: [
            {
              type: 'pie',
              data: [
                { value: 35, name: $t('week0') },
                { value: 120, name: $t('week1') },
                { value: 136, name: $t('week2') },
                { value: 210, name: $t('week3') },
                { value: 110, name: $t('week4') },
                { value: 210, name: $t('week5') },
                { value: 90, name: $t('week6') },
              ],
              roseType: 'area',
            },
          ],
        },
        option4: {
          title: {
            text: $t('echarts.access_number'),
            left: 'center',
          },
          tooltip: {},
          xAxis: {
            data: [
              $t('week0'),
              $t('week1'),
              $t('week2'),
              $t('week3'),
              $t('week4'),
              $t('week5'),
              $t('week6'),
            ],
          },
          yAxis: {},
          series: [
            {
              name: $t('echarts.every_day'),
              type: 'scatter',
              data: [35, 120, 136, 210, 110, 210, 90],
              itemStyle: {
                color: '#91cc75',
              },
            },
          ],
        },
      },
    };
  },
};
