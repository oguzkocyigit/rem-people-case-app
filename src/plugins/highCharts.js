import Vue from 'vue'
import VueHighCharts from 'vue-highcharts'
import HighCharts from 'highcharts'
import loadDrillDown from 'highcharts/modules/drilldown'

loadDrillDown(HighCharts);
Vue.use(VueHighCharts, { HighCharts });