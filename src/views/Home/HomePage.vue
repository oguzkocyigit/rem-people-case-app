<template>
    <div class="home-page-index">
        <div class="center-div full-height is-fullwidth">
            <div class="column has-text-centered">
                <img src="../../assets/img/logo.png" alt="Rem People Logo">
                <div class="mt-50">
                    <router-link
                            class="enter-btn"
                            :to="{ name: 'login' }"
                    >
                        Enter Site
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'HomePage'
  }
</script>
<style lang="scss" src="./HomePage.scss"/>
