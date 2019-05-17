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
                <el-form-item label="请选择经营网站并授权：" prop="companyPlatformList">
                    <el-checkbox-group v-model="ruleForm.companyPlatformList">
                        <el-checkbox label="亚马逊" name="companyPlatformList">亚马逊</el-checkbox>
                        <el-checkbox label="eBay" name="companyPlatformList">eBay</el-checkbox>
                        <el-checkbox label="阿里速卖通" name="companyPlatformList">阿里速卖通</el-checkbox>
                        <el-checkbox label="Wish" name="companyPlatformList">Wish</el-checkbox>
                        <el-checkbox label="敦煌网" name="companyPlatformList">敦煌网</el-checkbox>
                        <el-checkbox label="Shopee" name="companyPlatformList">Shopee</el-checkbox>
                        <el-checkbox label="Lazada" name="companyPlatformList">Lazada</el-checkbox>
                        <el-checkbox label="执御" name="companyPlatformList">执御</el-checkbox>
                        <el-checkbox label="1688" name="companyPlatformList">1688</el-checkbox>
                        <el-checkbox label="Shopify" name="companyPlatformList">Shopify</el-checkbox>
                        <el-checkbox label="Rakuten" name="companyPlatformList">Rakuten</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="亚马逊" v-show="checkInput('亚马逊')">
                    <el-input v-model="website.ymx" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="eBay" v-show="checkInput('eBay')">
                    <el-input v-model="website.eBay" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="阿里速卖通" v-show="checkInput('阿里速卖通')">
                    <el-input v-model="website.alsmt" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="Wish" v-show="checkInput('Wish')">
                    <el-input v-model="website.wish" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="敦煌网" v-show="checkInput('敦煌网')">
                    <el-input v-model="website.dhw" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="Shopee" v-show="checkInput('Shopee')">
                    <el-input v-model="website.shopee" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="Lazada" v-show="checkInput('Lazada')">
                    <el-input v-model="website.lazada" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="执御" v-show="checkInput('执御')">
                    <el-input v-model="website.zy" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="1688" v-show="checkInput('1688')">
                    <el-input v-model="website.onesix" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="Shopify" v-show="checkInput('Shopify')">
                    <el-input v-model="website.shopify" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="Rakuten" v-show="checkInput('Rakuten')">
                    <el-input v-model="website.rakuten" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="营业执照">
                    <el-upload
                            class="avatar-uploader"
                            :action="baseUrl"
                            :show-file-list="false"
                            :on-success="handleYyzz"
                            :headers="myHeaders"
                            :before-upload="beforeHandleYyzz">
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
                        :action="baseUrl"
                        :headers="myHeaders"
                        :show-file-list="false"
                        :on-success="handleHzwl"
                        :before-upload="beforeHandleHzwl">
                        <img v-if="imageUrlHzwl" :src="imageUrlHzwl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="" >
                    <span class="warningWord">*请上传物流公司协议照片或PDF格式的协议文档</span>
                </el-form-item>  
                <el-form-item label="合作支付公司" prop="paymentCompany" placeholder="请输入合作支付公司">
                    <el-input v-model="ruleForm.paymentCompany"></el-input>
                </el-form-item>      
                <el-form-item label="" >
                    <el-upload
                            class="avatar-uploader"
                            :show-file-list="false"
                            :action="baseUrl"
                            :headers="myHeaders"
                            :on-success="handleHzzf"
                            :before-upload="beforeHandleHzzf">
                            <img v-if="imageUrlHzzf" :src="imageUrlHzzf" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                </el-form-item>
                <el-form-item label="" >
                    <span class="warningWord">*请上传支付公司协议照片或PDF格式的协议文档</span>
                </el-form-item>  
                <el-form-item label="法人代表人身份证：">
                    <el-upload
                            class="avatar-uploader"
                            :action="baseUrl"
                            :headers="myHeaders"
                            :show-file-list="false"
                            :on-success="handleIdFront"
                            :before-upload="beforeHandleIdFront">
                            <img v-if="imageUrlIdFront" :src="imageUrlIdFront" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon">身份证正面</i>
                        </el-upload>
                </el-form-item>
                <el-form-item label="" >
                    <el-upload
                            class="avatar-uploader"
                            :action="baseUrl"
                            :headers="myHeaders"
                            :show-file-list="false"
                            :on-success="handleIdBack"
                            :before-upload="beforeHandleIdBack">
                            <img v-if="imageUrlIdBack" :src="imageUrlIdBack" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon">身份证反面</i>
                        </el-upload>
                </el-form-item>
                <el-form-item label="" >
                    <span class="warningWord">*请上传身份证正反面照片</span>
                </el-form-item>  
                <el-form-item label="法人代表家庭资产情况：" prop="legalPersonsAssets">
                    <el-select v-model="ruleForm.legalPersonsAssets" placeholder="请选择法人代表家庭资产情况">
                        <el-option label="500万以内" value="1"></el-option>
                        <el-option label="500-100万" value="2"></el-option>
                        <el-option label="1000-2000万" value="3"></el-option>
                        <el-option label="2000万以上" value="4"></el-option>
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
import { BASE_URL } from '../utils/config'
import { upload  } from '@/api/register'
var token =  JSON.parse(localStorage.getItem('user')).token
export default {
  name: 'register',
  data() {
    return {
        baseUrl:`${BASE_URL}/ci/upload`,
        myHeaders: {token: token},
        imageUrl:'',
        ruleForm: {
            companyPlatformList: [],
            tradingCertificate: '',
            LogisticsCompany: '',
            logisticsAgreement:'', //物流公司图片
            paymentCompany: '',
            paymentAgreement:'', //合作支付公司图片
            legalPersonIdFront: '', // 身份证正面
            legalPersonIdBack: '', // 身份证反面
            legalPersonsAssets: ''
        },
        rules: {
            // companyPlatformList: [
            //     { type: 'array', required: true, message: '请选择经营网站并授权', trigger: 'blur' }
            // ],
            // tradingCertificate: [
            //     { required: true, message: '请选择营业执照', trigger: 'blur' },
            // ],
            // LogisticsCompany: [
            //     { required: true, message: '请选择合作物流公司', trigger: 'blur' }
            // ],
            // paymentCompany: [
            //     { required: true, message: '请选择合作支付公司', trigger: 'blur' }
            // ],
            // lawyerIDCard: [
            //     { required: true, message: '请上传法人代表人身份证', trigger: 'blur' }
            // ],
            // legalPersonsAssets: [
            //     { required: true, message: '请选择法人代表家庭资产情况', trigger: 'change' }
            // ]
        },
        website:{ymx:'',eBay:'',alsmt:'',wish:'',dhw:'',shopee:'',lazada:'',zy:'',onesix:'',shopify:'',rakuten:''},
    }
  },
  computed: {
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.ruleForm.companyPlatformList = this.changeData(this.ruleForm.companyPlatformList)
            console.log(this.ruleForm)
            // this.submitSuccess()
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
          return this.ruleForm.companyPlatformList.indexOf(val) != -1;
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

    changeData(val){
        var newArr = []
        val.forEach((item,index)=>{
            if(item=='亚马逊'){
                newArr.push({ paltformName:'亚马逊',paltformWebsite:this.website.ymx })
            }else if(item=='eBay'){
                newArr.push({ paltformName:'eBay',paltformWebsite:this.website.eBay })
            }else if(item=='阿里速卖通'){
                newArr.push({ paltformName:'阿里速卖通',paltformWebsite:this.website.alsmt })
            }else if(item=='Wish'){
                newArr.push({ paltformName:'Wish',paltformWebsite:this.website.wish })
            }else if(item=='敦煌网'){
                newArr.push({ paltformName:'敦煌网',paltformWebsite:this.website.dhw })
            }else if(item=='Shopee'){
                newArr.push({ paltformName:'Shopee',paltformWebsite:this.website.shopee })
            }else if(item=='Lazada'){
                newArr.push({ paltformName:'Lazada',paltformWebsite:this.website.lazada })
            }else if(item=='执御'){
                newArr.push({ paltformName:'执御',paltformWebsite:this.website.zy })
            }else if(item=='1688'){
                newArr.push({ paltformName:'1688',paltformWebsite:this.website.onesix })
            }else if(item=='Shopify'){
                newArr.push({ paltformName:'Shopify',paltformWebsite:this.website.shopify })
            }else if(item=='Rakuten'){
                newArr.push({ paltformName:'Rakuten',paltformWebsite:this.website.rakuten })
            }
        })
        return newArr
    },
    // 营业执照
    handleYyzz(res, file){
        this.imageUrl = URL.createObjectURL(file.raw);
        this.tradingCertificate = res.data;
    },
    beforeHandleYyzz(file){
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
          return
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
          return
        }

    },
    //合作物流
    handleHzwl(res, file){
        this.imageUrlHzwl = URL.createObjectURL(file.raw);
        this.logisticsAgreement = res.data;
    },
    beforeHandleHzwl(file){
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
          return
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
          return
        }

    },

    //合作物流
    handleHzzf(res, file){
        this.imageUrlHzzf = URL.createObjectURL(file.raw);
        this.paymentAgreement = res.data;
    },
    beforeHandleHzzf(file){
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
          return
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
          return
        }

    },
    //身份证正面
    handleIdFront(res, file){
        this.imageUrlIdFront = URL.createObjectURL(file.raw);
        this.legalPersonIdFront = res.data;
    },
    beforeHandleIdFront(file){
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
          return
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
          return
        }

    },

    //身份证反面
    handleIdBack(res, file){
        this.imageUrlIdBack = URL.createObjectURL(file.raw);
        this.legalPersonIdBack = res.data;
    },
    beforeHandleIdBack(file){
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
          return
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
          return
        }

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
