<template>
    <section>
        <div class="header">
            <div class="arrow_01">
                <div class="word wordColor"><span class="num">1.   </span>登录/注册</div>
            </div>
            <div class="arrow_02">
                <div class="word "><span class="num">2.   </span>商户信息补全</div>
            </div>
            <div class="arrow_02">
                <div class="word "><span class="num">3.   </span>投保信息</div>
            </div>
            <div class="arrow_03">
                <div class="word "><span class="num">4.   </span>完成</div>
            </div>
        </div>
        <div class="wscn-http404-container">
            <el-form :model="registerForm" :rules="rules" ref="registerForm" label-width="100px" class="demo-registerForm">
                <el-form-item label="手机号" prop="phone">
                    <el-input v-model="registerForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="registerForm.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="password2">
                    <el-input v-model="registerForm.password2"></el-input>
                </el-form-item>
                <el-form-item label="企业名称" prop="company">
                    <el-input v-model="registerForm.company"></el-input>
                </el-form-item>
                <el-form-item label="企业类型" prop="companyType">
                    <el-checkbox-group v-model="registerForm.companyType">
                        <el-checkbox label="进口" value="companyType"></el-checkbox>
                        <el-checkbox label="出口" value="companyType"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-row :gutter="20">
                    <el-col :span="16">
                    <el-form-item label="验证码"  prop="phoneCode">
                        <el-input v-model="registerForm.phoneCode"></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="8">
                    <el-button >{{paracont}}</el-button>
                    </el-col>
                </el-row>
                <el-form-item label="">
                    <el-checkbox-group v-model="check">
                        <el-checkbox label="我已阅读并同意《豆沙包商户平台合作协议》" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item>
                    <div class="submit-btn" @click="submitRegisterForm('registerForm')">注册</div>
                </el-form-item>
                <el-form-item>
                    <span style="color:#606266">已有账号，直接  <el-button type="text" @click="showLoginDia">登录</el-button></span>
                </el-form-item>
            </el-form>
        </div>
        <el-dialog
            title="登录"
            :visible.sync="loginDialogVisible"
            width="30%"
            center
            :before-close="handleClose">
            <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="demo-registerForm">
                <el-form-item label="手机号" prop="phone">
                    <el-input v-model="loginForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginForm.password"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <div class="submit-btn" style="margin:0 auto" @click="submitLoginForm('loginForm')">登录</div>
            </span>
        </el-dialog>
    </section>
</template>

<script>

export default {
  name: 'register',
  data() {
    return {
        registerForm: {
            phone: '',
            password: '',
            password2: '',
            company: '',
            companyType: [],
            phoneCode: ''
        },
        loginForm:{
            phone: '',
            password: '',
        },
        rules: {
            phone: [
                { required: true, message: '请输入手机号', trigger: 'blur' }
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' }
            ],
            password2: [
                { required: true, message: '请确认密码', trigger: 'blur' }
            ],
            company: [
                { required: true, message: '请输入企业名称', trigger: 'blur' }
            ],
            companyType: [
                { type: 'array', required: true, message: '请选择企业类型', trigger: 'blur' }
            ],
            phoneCode: [
                { required: true, message: '请输入验证码', trigger: 'blur' }
            ]
        },
        check:false,
        loginDialogVisible:false,
        paracont:'获取验证码'
    }
  },
  computed: {
    
  },
  methods: {
    //注册
    submitRegisterForm(formName) {
    this.$refs[formName].validate((valid) => {
        if (valid) {
            if(this.check){
                this.registerSuccess()
            }else{
                this.$message.warning('请先阅读并同意《豆沙包商户平台合作协议》')
            }
            
        } else {
        console.log('error submit!!');
        return false;
        }
    });
    },
    //注册成功弹窗
    registerSuccess() {
        this.$alert('', '注册成功', {
            confirmButtonText: '下一步',
            center:true,
            callback: action => {
                this.$router.push({path:'/businessInfo'})
            }
        });
    },
    //显示登录弹窗
    showLoginDia(){
    this.loginDialogVisible = true;
    },
    //关闭登录
    handleClose() {
    this.loginDialogVisible = false;
    },
    //获取验证码
    getCode () {
        var second = null, timePromise = undefined;
        if (second === null) {
            second = 60;
            if (!this.registerForm.phone) {
                this.$message({message:'手机号不能为空',type:'error'})
                second = null;
                return false;
            } else {
                getVerfyCode(this.user.username, this.setPasswordForm.photoCode).then(result => {
                    const _this = this;
                    timePromise = setInterval(function () {
                        if (second <= 0) {
                            clearInterval(timePromise);
                            timePromise = undefined;
                            second = null;
                            _this.paracont = "重发验证码";
                            _this.iconDis = false;
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
</style>
