<template>
    <div class="table__index">
        <el-table
                class="rem-table"
                :data="tableData.rows"
                border
        >
            <el-table-column
                    width="200"
                    prop="salesPointNumber"
                    :label="tableData.headers[0]"
            />
            <el-table-column
                    width="150"
                    prop="city"
                    :label="tableData.headers[1]"
            />
            <el-table-column
                    prop="salesPointName"
                    :label="tableData.headers[2]"
            />
            <el-table-column
                    width="300"
                    prop="researchGroupName"
                    :label="tableData.headers[3]"
            />
            <el-table-column
                    width="300"
                    prop="productName"
                    :label="tableData.headers[4]"
            />
            <el-table-column
                    width="120"
                    prop="availability"
                    :label="tableData.headers[5]"
            >
                <template slot-scope="scope">
                    <Availability :status="scope.row.availability"/>
                </template>
            </el-table-column>
        </el-table>
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
<style lang="scss" src="./Table.scss"/>
