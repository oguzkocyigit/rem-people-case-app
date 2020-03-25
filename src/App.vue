<template>
    <div id="app">
        <button
                class="back-btn"
                v-if="!isHomePage"
                @click="goBack()"
        >
          <i class="el-icon-d-arrow-left"/>
          Back
        </button>
        <vue-page-transition name="overlay-down-full">
            <router-view/>
        </vue-page-transition>
    </div>
</template>

<script>

  export default {
    name: 'App',
    computed: {
      isHomePage () {
        return this.$route.name === 'home'
      },
    },
    methods: {
      goBack () {
        window.history.back()
      },
    },
  }
</script>
