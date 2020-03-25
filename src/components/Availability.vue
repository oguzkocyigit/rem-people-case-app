<template>
    <div class="availability-index has-text-centered">
        <i :class="`el-icon-${iconType}`"/>
    </div>
</template>

<script>
  export default {
    name: 'Availability',
    props: {
      status: { required: true }
    },
    computed: {
      iconType () {
        return this.status ? 'success' : 'remove'
      },
    }
  }
</script>

<style lang="scss" src="./Availability.scss"/>
