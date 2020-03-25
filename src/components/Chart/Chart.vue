<template>
    <div class="page-frame">
        <div class="wrapper">
        </div>
    </div>
</template>

<script>
    import table from '../../json/table.json'
    import Availability from '@/components/Availability'

  export default {
    name: 'Table',
    components: {
      Availability,
    },
    data () {
      return {
        tableData: table.data,
      }
    }
  }
</script>

<style scoped>

</style>