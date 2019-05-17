<template>
    <section>
        <div class="header">
            <div class="arrow_01">
                <div class="word"><span class="num">1.   </span>登录/注册</div>
            </div>
            <div class="arrow_02">
                <div class="word wordColor"><span class="num">2.   </span>商户信息补全</div>
            </div>
            <div class="arrow_02">
                <div class="word "><span class="num">3.   </span>投保信息</div>
            </div>
            <div class="arrow_03">
                <div class="word "><span class="num">4.   </span>完成</div>
            </div>
        </div>
        <div class="wscn-http404-container">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="180px" class="demo-ruleForm">
                <el-form-item label="请选择经营网站并授权：" prop="website">
                    <el-checkbox-group v-model="ruleForm.website">
                        <el-checkbox label="亚马逊" name="website"></el-checkbox>
                        <el-checkbox label="eBay" name="website"></el-checkbox>
                        <el-checkbox label="阿里速卖通" name="website"></el-checkbox>
                        <el-checkbox label="Wish" name="website"></el-checkbox>
                        <el-checkbox label="敦煌网" name="website"></el-checkbox>
                        <el-checkbox label="Shopee" name="website"></el-checkbox>
                        <el-checkbox label="Lazada" name="website"></el-checkbox>
                        <el-checkbox label="执御" name="website"></el-checkbox>
                        <el-checkbox label="1688" name="website"></el-checkbox>
                        <el-checkbox label="Shopify" name="website"></el-checkbox>
                        <el-checkbox label="Rakuten" name="website"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="亚马逊" prop="name" v-show="checkInput('亚马逊')">
                    <el-input v-model="ruleForm.name" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="eBay" prop="name" v-show="checkInput('eBay')">
                    <el-input v-model="ruleForm.name" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="阿里速卖通" prop="name" v-show="checkInput('阿里速卖通')">
                    <el-input v-model="ruleForm.name" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="Wish" prop="name" v-show="checkInput('Wish')">
                    <el-input v-model="ruleForm.name" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="敦煌网" prop="name" v-show="checkInput('敦煌网')">
                    <el-input v-model="ruleForm.name" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="Shopee" prop="name" v-show="checkInput('Shopee')">
                    <el-input v-model="ruleForm.name" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="Lazada" prop="name" v-show="checkInput('Lazada')">
                    <el-input v-model="ruleForm.name" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="执御" prop="name" v-show="checkInput('执御')">
                    <el-input v-model="ruleForm.name" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="1688" prop="name" v-show="checkInput('1688')">
                    <el-input v-model="ruleForm.name" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="Shopify" prop="name" v-show="checkInput('Shopify')">
                    <el-input v-model="ruleForm.name" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="Rakuten" prop="name" v-show="checkInput('Rakuten')">
                    <el-input v-model="ruleForm.name" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="营业执照">
                    <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon">营业执照</i>
                        </el-upload>
                </el-form-item>
                <el-form-item label="合作物流公司" prop="LogisticsCompany">
                    <el-input v-model="ruleForm.LogisticsCompany" placeholder="请输入合作物流公司"></el-input>
                </el-form-item>      
                <el-form-item label="">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="" >
                    <span class="warningWord">*请上传物流公司协议照片或PDF格式的协议文档</span>
                </el-form-item>  
                <el-form-item label="合作支付公司" prop="payCompany" placeholder="请输入合作支付公司">
                    <el-input v-model="ruleForm.payCompany"></el-input>
                </el-form-item>      
                <el-form-item label="" >
                    <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                </el-form-item>
                <el-form-item label="" >
                    <span class="warningWord">*请上传支付公司协议照片或PDF格式的协议文档</span>
                </el-form-item>  
                <el-form-item label="法人代表人身份证：">
                    <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon">身份证正面</i>
                        </el-upload>
                </el-form-item>
                <el-form-item label="" >
                    <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon">身份证反面</i>
                        </el-upload>
                </el-form-item>
                <el-form-item label="" >
                    <span class="warningWord">*请上传身份证正反面照片</span>
                </el-form-item>  
                <el-form-item label="法人代表家庭资产情况：" prop="lawyerMoney">
                    <el-select v-model="ruleForm.lawyerMoney" placeholder="请选择法人代表家庭资产情况">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <div class="submit-btn" @click="submitForm('ruleForm')">提交</div>
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
        imageUrl:'',
        ruleForm: {
            website: [],
            businessLicense: '',
            LogisticsCompany: '',
            payCompany: '',
            lawyerIDCard: '',
            lawyerMoney: ''
        },
        rules: {
            website: [
                { type: 'array', required: true, message: '请选择经营网站并授权', trigger: 'blur' }
            ],
            businessLicense: [
                { required: true, message: '请选择营业执照', trigger: 'blur' },
            ],
            LogisticsCompany: [
                { required: true, message: '请选择合作物流公司', trigger: 'blur' }
            ],
            payCompany: [
                { required: true, message: '请选择合作支付公司', trigger: 'blur' }
            ],
            lawyerIDCard: [
                { required: true, message: '请上传法人代表人身份证', trigger: 'blur' }
            ],
            lawyerMoney: [
                { required: true, message: '请选择法人代表家庭资产情况', trigger: 'change' }
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
            console.log(6666,this.ruleForm)
            this.submitSuccess()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      checkInput(val){
          return this.ruleForm.website.indexOf(val) != -1;
      },
      //注册成功弹窗
        submitSuccess() {
            this.$alert('', '提交成功', {
                confirmButtonText: '下一步',
                center:true,
                callback: action => {
                    this.$router.push({path:'/insuranceInfo'})
                }
            });
        },


    }
}
</script>

<style>

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

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 16px;
    color: #8c939d;
    width: 200px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 200px;
    height: 100px;
    display: block;
  }
  .el-upload-text{
    line-height: 100px;
    text-align: center;
    font-size: 14px;
    color: #8c939d;
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
.warningWord{
    color:#f62f87;
    font-size: 14px;
}

</style>
