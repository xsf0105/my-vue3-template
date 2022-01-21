<template>
  <div class="chart-wrap">
    <div :id="id" :class="className" :style="{ height: height, width: width }" />
  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { getCurrentInstance, onMounted, reactive, onBeforeUnmount } from 'vue';

let { proxy } = getCurrentInstance();
defineProps({
  className: {
    type: String,
    default: 'chart'
  },
  id: {
    type: String,
    default: 'chart'
  },
  width: {
    type: String,
    default: '200px'
  },
  height: {
    type: String,
    default: '215px'
  }
})

const state = reactive({
	chart: null,
});

onMounted(() => {
	initChart();
});

onBeforeUnmount(() => {
  if (!state.chart) {
    return
  }
  state.chart.dispose()
  state.chart = null
})

const initChart = () => {
	state.chart = echarts.init(document.getElementById(proxy.id));	
		let dataAxis = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬（rén）', '癸（guǐ）'];
		let data = [10, 25, 10, 15, 20, 25, 10, 15, 20, 25, 10];

	state.chart.resize({
		width: 400,
		height: 215
	});

	state.chart.setOption({
			tooltip: {
				show: true,
			},
			xAxis: {
				data: dataAxis,
				// 柱子 label
				axisLabel: {
					color: '#8885a1',
					margin: state.isH5?4:12, // 距离轴线高度
					interval: 0,
					rotate: state.isH5?45:0,
					fontSize: 10,
				},
				axisTick: {
					alignWithLabel: true,
				},
				// 轴线样式
				axisLine: {
					show: true,
					lineStyle:{
					color: '#3a3464',
					width: 1,
					type: 'solid',
					},
				},
			},
			yAxis: {
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					color: '#4e4b74'
				},
				splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.15)',
            width: 1,
            type: 'dashed'
          }
        }
			},
			series: [
				{
					type: 'bar',
					showBackground: false,
					barWidth: state.isH5?12:16,
					label: {
						show: true,
						position: 'top',
						color: '#fff',
					},
					// 柱子颜色
					itemStyle: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
							{ offset: 0, color: '#60B5FF' },
							{ offset: 1, color: '#0088FF' },
						])
					},
					data: data
				}
			],
		});


}
</script>

<style scoped>
.chart-wrap {
  width: auto;
  overflow-x: auto;
  height: 215px;
  background: var(--linear-gradient-bg);
  border-radius: 12px;
}
</style>