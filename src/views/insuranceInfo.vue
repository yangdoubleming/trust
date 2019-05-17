<template>
    <section>
        <div class="header">
            <div class="arrow_01">
                <div class="word "><span class="num">1.   </span>登录/注册</div>
            </div>
            <div class="arrow_02">
                <div class="word "><span class="num">2.   </span>商户信息补全</div>
            </div>
            <div class="arrow_02">
                <div class="word wordColor"><span class="num">3.   </span>投保信息</div>
            </div>
            <div class="arrow_03">
                <div class="word "><span class="num">4.   </span>完成</div>
            </div>
        </div>
        <div class="wscn-http404-container">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
                <el-form-item label="贷款金额（元）" prop="loanAmount">
                    <el-input v-model="ruleForm.loanAmount"></el-input>
                </el-form-item>
                <el-form-item label="贷款利率" prop="loanRate">
                    <span>6%</span>
                </el-form-item>
                 <el-form-item label="贷款期限" prop="LoanTimeLimit">
                    <el-select v-model="ruleForm.LoanTimeLimit" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="保险金额（元）" prop="insuredAmount">
                    <el-input v-model="ruleForm.insuredAmount"></el-input>
                </el-form-item>
                <el-form-item label="保险费率" prop="insuranceRates">
                    <span>6%</span>
                </el-form-item>
                <el-form-item label="手续费" prop="poundage">
                    <span>6%</span>
                </el-form-item>
                <el-form-item label="累计费率" prop="cumulativeRate">
                    <span>6%</span>
                </el-form-item>
                <el-form-item label="手机号" prop="phone">
                    <el-input v-model="ruleForm.phone"></el-input>
                </el-form-item>
                <el-row :gutter="20">
                    <el-col :span="16">
                    <el-form-item label="验证码" prop="phoneCode">
                        <el-input v-model="ruleForm.phoneCode"></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="8">
                    <el-button>获取验证码</el-button>
                    </el-col>
                </el-row>
                <el-form-item label="投保人声明" prop="name">
                    <el-input
                        type="textarea"
                        :rows="5"
                        placeholder="请输入内容"
                        v-model="ruleForm.declaration">
                    </el-input>
                </el-form-item>
                <el-form-item label="" prop="type">
                    <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="本人已确认" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="" prop="type">
                    <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="我已阅读并同意《银行贷款协议》《保险条款》《保单电子版》《豆沙包服务协议》" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item>
                    <div class="submit-btn" @click="submitForm('ruleForm')">提交申请</div>
                </el-form-item>
            </el-form>
        </div>
    </section>
</template>

<script>

export default {
  name: 'register',
  data() {
    return {
        
        ruleForm: {
            loanAmount: '',
            loanRate: '',
            LoanTimeLimit: '',
            insuredAmount: '',
            insuranceRates: '',
            poundage: '',
            cumulativeRate: '',
            phone: '',
            phoneCode:'',
            declaration:'保险人已将中小企业贷款保证保险所使用的条款（包括责任免除及退保内容）和特别约定向本人做了明确说明，本人已充分理解；上述所填内容均属实，同意以此保单作为订立保险合同的依据。'
        },
        rules: {
            name: [
                { required: true, message: '请输入活动名称', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            region: [
                { required: true, message: '请选择活动区域', trigger: 'change' }
            ],
            date1: [
                { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            ],
            date2: [
                { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
            ],
            type: [
                { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
            ],
            resource: [
                { required: true, message: '请选择活动资源', trigger: 'change' }
            ],
            desc: [
                { required: true, message: '请填写活动形式', trigger: 'blur' }
            ]
        }
    }
  },
  computed: {
    
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.wscn-http404-container{
  width: 60%;
  max-width: 500px;
  margin: 30px auto;
}
.header{
    width: 1322px;
    height: 114px;
    margin: 0px auto;
    margin-bottom: 60px;
}
.header div{
    float:left;
}
.header .arrow_01{
    width: 307px;
    height: 114px;
    font-size: 22px;
    line-height: 104px;
    background-image: url(./../assets/register/arrow_01.png)
}
.header .arrow_02{
    width: 353px;
    height: 114px;
    font-size: 22px;
    line-height: 114px;
    background-image: url(./../assets/register/arrow_02.png)
}
.header .arrow_03{
    width: 308px;
    height: 114px;
    font-size: 22px;
    line-height: 114px;
    background-image: url(./../assets/register/arrow_03.png)
}
.word{
    margin-left: 70px;
    letter-spacing:3px;
}
.wordColor{
    color: #f62f87;
}
.num{
    font-size: 28px;
}
.submit-btn{
    width: 130px;
    height: 40px;
    background-image: url(./../assets/register/btn-bg.png);
    font-size: 16px;
    color:white;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
}
</style>
