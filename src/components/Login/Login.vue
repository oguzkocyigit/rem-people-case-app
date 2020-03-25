<template>
    <div class="login_index">
        <div class="wrapper">
            <div class="logo">
                <img src="../../assets/img/logo.png" alt="">
            </div>
            <div class="columns mt-100">
                <div class="column">
                    <h1 class="welcome-msg">Welcome to <u>rem</u>inStore BI tool. </h1>
                </div>
            </div>
            <form @submit.prevent="loginSubmit">
                <div class="columns vertical-align mt-100">
                    <div class="column is-narrow">
                        <el-input
                                type="email"
                                class="w-350"
                                v-model="eMail"
                                placeholder="Please enter your e-mail"
                        />
                    </div>
                    <div class="column is-narrow">
                        <div class="columns">
                            <div class="column">
                                <el-input
                                        type="password"
                                        class="w-350"
                                        v-model="password"
                                        placeholder="Please enter your password"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <button class="login-btn" type="submit">
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'Login',
    data () {
      return {
        eMail: '',
        password: '',
      }
    },
    computed: {
      ...mapState([
        'loginMeIn',
        'loginMeError',
        'loginMeSuccess'
      ])
    },
    methods: {
      ...mapActions([
        'login'
      ]),
      loginSubmit () {
        this.login({
          email: 'eve.holt@reqres.in',
          password: 'cityslicka'
        }).then(() => {
          this.$router.push({ name: 'list.chart' })
        })
      }
    }
  }
</script>

<style lang="scss" src="./Login.scss"/>
