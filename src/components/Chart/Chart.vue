<template>
    <div class="chart__index">
        <highCharts :options="options"></highCharts>
    </div>
</template>

<script>
  import drillDownColumnChart from '../../json/drilldown-column-chart.json'
  import { Chart } from 'highcharts-vue'
  import { ChartDataTransformer } from '@/transformers/ChartDataTransformer'

  export default {
    name: 'Chart',
    components: {
      highCharts: Chart
    },
    data () {
      return {
        options: {
          chart: {
            type: 'column'
          },
          title: {
            text: ''
          },
          accessibility: {
            announceNewData: {
              enabled: true
            }
          },
          xAxis: {
            type: ''
          },
          yAxis: {
            title: {
              text: ''
            }
          },
          legend: {
            enabled: false
          },
          plotOptions: {
            series: {
              borderWidth: 1,
              dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
              }
            }
          },
          colors: ['#2f7ed8', '#0d233a', '#910000', '#1aadce', '#492970', '#f28f43'],
          tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
          },
          series: [
            {
              name: 'Products',
              colorByPoint: true,
              data: ChartDataTransformer.fetchCollection(drillDownColumnChart.data)
            }
          ],
          drilldown: {
            series: drillDownColumnChart.data
          }
        },
      }
    },
  }
</script>

<style lang="scss" src="./Chart.scss"/>
