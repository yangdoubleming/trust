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
                    <span>{{ruleForm.loanRate}}%</span>
                </el-form-item>
                 <el-form-item label="贷款期限" prop="loanTerm">
                    <el-select v-model="ruleForm.loanTerm" placeholder="请选择贷款期限">
                    <el-option label="1个月" value="1"></el-option>
                    <el-option label="2个月" value="2"></el-option>
                    <el-option label="3个月" value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="保险金额（元）" prop="insuranceMoney">
                    <el-input v-model="ruleForm.insuranceMoney"></el-input>
                </el-form-item>
                <el-form-item label="保险费率" prop="insuranceRate">
                    <span>{{ruleForm.insuranceRate}}%</span>
                </el-form-item>
                <el-form-item label="手续费率" prop="handlingRate">
                    <span>x.xx%</span>
                </el-form-item>
                <el-form-item label="累计费率" prop="totalFeeRate">
                    <span>x.xx%</span>
                </el-form-item>
                <el-form-item label="手机号" prop="contactPhone">
                    <el-input v-model="ruleForm.contactPhone"></el-input>
                </el-form-item>
                <el-row :gutter="20">
                    <el-col :span="16">
                    <el-form-item label="验证码" prop="verifyCode">
                        <el-input v-model="ruleForm.verifyCode"></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="8">
                    <el-button @click="getCode" :disabled="btnStatus">{{paracont}}</el-button>
                    </el-col>
                </el-row>
                <el-form-item label="投保人声明">
                    <el-input
                        type="textarea"
                        :rows="5"
                        placeholder="请输入内容"
                        v-model="declaration">
                    </el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-checkbox-group v-model="selfSure">
                    <el-checkbox label="本人已确认"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="" prop="type">
                    <el-col :span="2">
                        <el-checkbox-group v-model="readAgree">
                            <el-checkbox label=""></el-checkbox>
                        </el-checkbox-group>
                    </el-col>
                    <span style="color:#606266">我已阅读并同意<label style="color:#409EFF;cursor:pointer;"><span>《银行贷款协议》</span><span>《保险条款》</span><span>《保单电子版》</span><span>《豆沙包服务协议》</span></label></span>
                </el-form-item>
                <el-form-item>
                    <div class="submit-btn" @click="submitForm('ruleForm')">提交申请</div>
                </el-form-item>
            </el-form>
        </div>
    </section>
</template>

<script>
import { editCiCompanyLoan, getVerifyCode  } from '@/api/register'
export default {
  name: 'register',
  data() {
    return {
        btnStatus:false,
        paracont:'获取验证码',
        ruleForm: {
            loanAmount: '',
            loanRate: '6',
            loanTerm: '',
            insuranceMoney: '',
            insuranceRate: '3',
            handlingRate: '1',
            totalFeeRate: '1',
            contactPhone: '',
            verifyCode:'',
        },
        declaration:'保险人已将中小企业贷款保证保险所使用的条款（包括责任免除及退保内容）和特别约定向本人做了明确说明，本人已充分理解；上述所填内容均属实，同意以此保单作为订立保险合同的依据。',
        rules: {
            loanAmount: [
                { required: true, message: '请输入贷款金额', trigger: 'blur' },
            ],
            loanTerm: [
                { required: true, message: '请选择贷款期限', trigger: 'change' }
            ],
            insuranceMoney: [
                {required: true, message: '请输入保险金额', trigger: 'change' }
            ],
            contactPhone: [
                { required: true, message: '请输入手机号', trigger: 'change' }
            ],
            verifyCode: [
                { required: true, message: '请输入验证码', trigger: 'change' }
            ]
        },
        selfSure:false,
        readAgree:false,
    }
  },
  computed: {
    
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
                editCiCompanyLoan(this.ruleForm).then(result=>{
                    this.$router.push({path:'/registerEnd'})
                }).catch(err=>{
                    this.$message.error(err.msg);
                })
            } else {
                return false;
            }
        });
    },
    //提交成功弹窗
    submitSuccess() {
        this.$alert('您已申请成功，2-3个工作日即可放款具体进入可在贷款详情中查看！', '恭喜提交成功', {
            confirmButtonText: '知道了',
            center:true,
            callback: action => {
                this.$router.push({path:'/registerEnd'})
            }
        });
    },
    //获取验证码
    getCode () {
        var second = null, timePromise = undefined;
        if (second === null) {
            second = 60;
            if (!this.ruleForm.contactPhone) {
                this.$message({message:'手机号不能为空',type:'error'})
                second = null;
                return false;
            } else {
                getVerifyCode({telephone:this.ruleForm.contactPhone}).then(result => {
                    const _this = this;
                    this.btnStatus = true;
                    timePromise = setInterval(function () {
                        if (second <= 0) {
                            clearInterval(timePromise);
                            timePromise = undefined;
                            second = null;
                            _this.paracont = "重发验证码";
                            _this.btnStatus = false;
                        } else {
                            _this.paracont = second + "s";
                            second--;
                        }
                    }, 1000);
                }).catch(err => {
                    this.$message({message:err.msg,type:'error'})
                    second = null;
                })
            }
        } else {
            return false;
        }
    },
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
