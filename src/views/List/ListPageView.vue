<template>
    <div class="list_page__index">
        <div class="page-title">
            <div class="wrapper">
                <h1>Competitor Comparative Product Availability</h1>
            </div>
        </div>
        <div class="wrapper mt-50">
            <div class="page-frame">
                <div class="columns">
                    <div class="column has-text-right">
                        <router-link
                                class="page-link mr-10"
                                :to="{ name: 'list.chart' }"
                        >
                            <i class="el-icon-s-data"/>
                            Chart
                        </router-link>

                        <router-link
                                class="page-link"
                                :to="{ name: 'list.table' }"
                        >
                            <i class="el-icon-s-grid"/>
                            Table
                        </router-link>
                    </div>
                </div>
                <vue-page-transition name="fade-in-up">
                    <router-view/>
                </vue-page-transition>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'ListPageView'
  }
</script>

<style lang="scss" src="./ListPage.scss"/>
