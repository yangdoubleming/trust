<template>
  <section>
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
          <span>基本信息</span>
          <el-button style="float: right; padding: 3px 0" type="text"><router-link to="/loanRecords">返回</router-link></el-button>
      </div>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="8"><div class=""><span class="bg-purple">订单号：</span></div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">产品购买份数：</span></div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">商品价值明细：</span></div></el-col>
      </el-row>
      </el-card>
  </section>
</template>

<script>
    
    import { getCusInsureDetails } from '@/api/register'

    export default {
        data() {
            return {
                loading: true,
                details:{},
            }
        },
        computed: {
            
        },
        created() {
          this.fetchData();
        },
        methods: {
            fetchData(){
              getCusInsureDetails(this.$route.query).then(response => {
                  
              }).catch(err=>{
                  
              })
          },
          dateFormat(date){
              if (!date) {
                return "";
            }
          }
        }
    }      
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .row-bg {
    margin: 30px 0;
  }

  .box-card {
    /* width: 480px; */
  }
  .bg-purple{
    color:#909399;
  }
</style>