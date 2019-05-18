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
                <div class="word "><span class="num">3.   </span>申请信息</div>
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
                        <el-checkbox label="Shopee" name="companyPlatformList">Shopee</el-checkbox>
                        <el-checkbox label="Lazada" name="companyPlatformList">Lazada</el-checkbox>
                        <el-checkbox label="1688" name="companyPlatformList">1688</el-checkbox>
                        <el-checkbox label="Kilimall" name="companyPlatformList">Kilimall</el-checkbox>
                        <el-checkbox label="Linio" name="companyPlatformList">Linio </el-checkbox>
                        <el-checkbox label="Newegg" name="companyPlatformList">Newegg</el-checkbox>
                        <el-checkbox label="Etsy" name="companyPlatformList">Etsy</el-checkbox>
                        <el-checkbox label="Cdiscount" name="companyPlatformList">Cdiscount</el-checkbox>
                        <el-checkbox label="UMKA" name="companyPlatformList">UMKA</el-checkbox>
                        <el-checkbox label="Mercodolibrie" name="companyPlatformList">Mercodolibrie</el-checkbox>
                        <el-checkbox label="Jumia" name="companyPlatformList">Jumia</el-checkbox>
                        <el-checkbox label="VOVA" name="companyPlatformList">VOVA</el-checkbox>
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
                <el-form-item label="1688" v-show="checkInput('1688')">
                    <el-input v-model="website.onesix" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="Shopify" v-show="checkInput('Shopify')">
                    <el-input v-model="website.shopify" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="Rakuten" v-show="checkInput('Rakuten')">
                    <el-input v-model="website.rakuten" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="Kilimall" v-show="checkInput('Kilimall')">
                    <el-input v-model="website.Kilimall" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="Linio" v-show="checkInput('Linio')">
                    <el-input v-model="website.Linio" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="Newegg" v-show="checkInput('Newegg')">
                    <el-input v-model="website.Newegg" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="Etsy" v-show="checkInput('Etsy')">
                    <el-input v-model="website.Etsy" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="Cdiscount" v-show="checkInput('Cdiscount')">
                    <el-input v-model="website.Cdiscount" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="UMKA" v-show="checkInput('UMKA')">
                    <el-input v-model="website.UMKA" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="Mercodolibrie" v-show="checkInput('Mercodolibrie')">
                    <el-input v-model="website.Mercodolibrie" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="Jumia" v-show="checkInput('Jumia')">
                    <el-input v-model="website.Jumia" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="VOVA" v-show="checkInput('VOVA')">
                    <el-input v-model="website.VOVA" placeholder="请输入店铺网址"></el-input>
                </el-form-item>
                <el-form-item label="营业执照" prop="tradingCertificate">
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
                <el-form-item label="合作物流公司" prop="logisticsCompany">
                    <el-col :span="8" >
                        <el-radio v-model="coCompany" label="1" @change="changeCoCompany">友和道通</el-radio>
                        <el-radio v-model="coCompany" label="2" @change="changeCoCompany">其他</el-radio>
                    </el-col>
                    <el-col :span="16">
                        <el-input v-model="ruleForm.logisticsCompany" :value="ruleForm.logisticsCompany" placeholder="请输入合作物流公司"></el-input>
                    </el-col>
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
                    <el-radio @change="changeCo" v-model="ruleForm.paymentCompany" label="Paypal" >Paypal</el-radio>
                    <el-radio @change="changeCo" v-model="ruleForm.paymentCompany" label="Airwallex" >Airwallex</el-radio>
                    <el-radio @change="changeCo" v-model="ruleForm.paymentCompany" label="Payoneer" >Payoneer</el-radio>
                    <el-radio @change="changeCo" v-model="ruleForm.paymentCompany" label="PingPong" >PingPong</el-radio>
                    <el-radio @change="changeCo" v-model="ruleForm.paymentCompany" label="OnerWay万唯" >OnerWay万唯</el-radio>
                    <el-radio @change="changeCo" v-model="ruleForm.paymentCompany" label="WorldFirst" >WorldFirst</el-radio>
                    <el-radio @change="changeCo" v-model="ruleForm.paymentCompany" label="连连支付" >连连支付</el-radio>
                    <el-radio @change="changeCo" v-model="ruleForm.paymentCompany" label="iPayLinks" >iPayLinks</el-radio>
                    <el-radio @change="changeCo" v-model="ruleForm.paymentCompany" label="worldpay" >worldpay</el-radio>
                    <el-radio @change="changeCo" v-model="ruleForm.paymentCompany" label="网易支付" >网易支付</el-radio>
                    <el-radio @change="changeCo" v-model="ruleForm.paymentCompany" label="钱宝" >钱宝</el-radio>
                    <el-radio @change="changeCo" v-model="ruleForm.paymentCompany" label="鼎付" >鼎付</el-radio>
                    <el-radio @change="changeCo" v-model="ruleForm.paymentCompany" label="富汇通" >富汇通</el-radio>
                    <el-radio @change="changeCo" v-model="ruleForm.paymentCompany" label="Payssion" >Payssion</el-radio>
                    <el-radio @change="changeCo" v-model="ruleForm.paymentCompany" label="OnerWay万唯" >OnerWay万唯</el-radio>
                    <el-radio @change="changeCo" v-model="ruleForm.paymentCompany" label="易联支付" >易联支付</el-radio>
                    <el-radio @change="changeCo" v-model="ruleForm.paymentCompany" label="联动优势" >联动优势</el-radio>
                    <el-radio @change="changeCo" v-model="ruleForm.paymentCompany" label="易汇金" >易汇金</el-radio>
                    <el-radio @change="changeCo" v-model="ruleForm.paymentCompany" label="富友支付" >富友支付</el-radio>
                    <el-radio @change="changeCo" v-model="ruleForm.paymentCompany" label="通联支付" >通联支付</el-radio>
                    <el-radio @change="changeCo" v-model="ruleForm.paymentCompany" label="其他" >其他</el-radio>
                </el-form-item>    
                <el-form-item label="" >
                    <el-input v-if='showPayCom' v-model="ruleForm.paymentCompany" :value="ruleForm.paymentCompany" placeholder="合作支付公司"></el-input>
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
                <el-form-item label="法人代表人身份证：" prop="legalPersonIdFront">
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
                <el-form-item label="法人姓名：" prop="legalPersonName">
                    <el-input v-model="ruleForm.legalPersonName"></el-input>
                </el-form-item> 
                <el-form-item label="法人代表家庭资产情况：" prop="legalPersonsAssets">
                    <el-select v-model="ruleForm.legalPersonsAssets" placeholder="请选择法人代表家庭资产情况">
                        <el-option label="500万以内" value="1"></el-option>
                        <el-option label="500-1000万" value="2"></el-option>
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
import { BASE_URL, IMG_URL } from '../utils/config'
import file from '@/assets/register/default.png'
import { upload, addCiCompanyAndPlatform, getCiCompanyAndPlatformByUser  } from '@/api/register'
var token =  JSON.parse(localStorage.getItem('user')).token
export default {
  name: 'register',
  data() {
    return {
        showPayCom:false,
        file,
        baseUrl:`${BASE_URL}/ci/upload`,
        myHeaders: {token: token},
        imageUrl:'',
        imageUrlHzwl:'',
        imageUrlHzzf:'',
        imageUrlIdFront:'',
        imageUrlIdBack:'',
        coCompany:'1',
        payCompany:'1',
        ruleForm: {
            companyPlatformList: [],
            tradingCertificate: '',
            logisticsCompany: '友和道通',
            logisticsAgreement:'', //物流公司图片
            paymentCompany: 'Paypal',
            paymentAgreement:'', //合作支付公司图片
            legalPersonIdFront: '', // 身份证正面
            legalPersonIdBack: '', // 身份证反面
            legalPersonName:'',
            legalPersonsAssets: ''
        },
        rules: {
            companyPlatformList: [
                { type: 'array', required: true, message: '请至少选择一个经营网站并授权', trigger: 'blur' }
            ],
            tradingCertificate: [
                { required: true, message: '请选择营业执照', trigger: 'blur' },
            ],
            logisticsCompany: [
                { required: true, message: '请选择合作物流公司', trigger: 'blur' }
            ],
            paymentCompany: [
                { required: true, message: '请选择合作支付公司', trigger: 'blur' }
            ],
            legalPersonsAssets: [
                { required: true, message: '请选择法人代表家庭资产情况', trigger: 'change' }
            ],
            legalPersonIdFront:[
                { required: true, message: '请选择营业执照', trigger: 'blur' },
            ],
        },
        website:{ymx:'',eBay:'',alsmt:'',wish:'',dhw:'',shopee:'',lazada:'',zy:'',onesix:'',shopify:'',rakuten:'',kilimall:'',linio:'',newegg:'',etsy:'',cdiscount:'',umka:'',mercodolibrie:'',jumia:'',vova:''},
    }
  },
  computed: {
  },
  created(){
      this.fetchData()
  },
  methods: {
      //登录获取填写信息
      fetchData(){
            getCiCompanyAndPlatformByUser().then(result=>{
                if(result.data.ciCompany){
                    this.ruleForm.logisticsCompany = result.data.ciCompany.logisticsCompany
                    if(result.data.ciCompany.logisticsCompany=='友和道通'){
                        this.coCompany = '1'
                    }else{
                        this.coCompany = '2'
                    }
                    this.ruleForm.paymentCompany = result.data.ciCompany.paymentCompany
                    var payco = result.data.ciCompany.paymentCompany
                    if(payco=='Paypal'||payco=='Airwallex'||payco=='Payoneer'||payco=='PingPong'||payco=='OnerWay万唯'||payco=='连连支付'||payco=='iPayLinks'||payco=='网易支付'||payco=='钱宝'||payco=='鼎付'||payco=='富汇通'||payco=='易联支付'||payco=='联动优势'||payco=='易汇金'||payco=='富友支付'||payco=='通联支付'){
                        this.showPayCom = false
                    }else{
                        this.showPayCom = true
                    }
                    this.ruleForm.legalPersonsAssets = result.data.ciCompany.legalPersonsAssets
                    this.ruleForm.legalPersonName = result.data.ciCompany.legalPersonName
                    this.ruleForm.id = result.data.ciCompany.id
                    if(result.data.ciCompany.legalPersonsAssets==1){
                        this.ruleForm.legalPersonsAssets='500万以内'
                    }else if(result.data.ciCompany.legalPersonsAssets==2){
                        this.ruleForm.legalPersonsAssets='500-100万'
                    }else if(result.data.ciCompany.legalPersonsAssets==3){
                        this.ruleForm.legalPersonsAssets='1000-2000万'
                    }else if(result.data.ciCompany.legalPersonsAssets==4){
                        this.ruleForm.legalPersonsAssets='2000万以上'
                    }
                    
                    this.imageUrl = this.changImgUrl(result.data.ciCompany.tradingCertificate)
                    this.ruleForm.tradingCertificate = result.data.ciCompany.tradingCertificate
                    this.imageUrlHzwl = this.changImgUrl(result.data.ciCompany.logisticsAgreement)
                    this.ruleForm.logisticsAgreement = result.data.ciCompany.logisticsAgreement
                    this.imageUrlHzzf = this.changImgUrl(result.data.ciCompany.paymentAgreement)
                    this.ruleForm.paymentAgreement = result.data.ciCompany.paymentAgreement
                    this.imageUrlIdFront = this.changImgUrl(result.data.ciCompany.legalPersonIdFront)
                    this.ruleForm.legalPersonIdFront = result.data.ciCompany.legalPersonIdFront
                    this.imageUrlIdBack = this.changImgUrl(result.data.ciCompany.legalPersonIdBack)
                    this.ruleForm.legalPersonIdBack = result.data.ciCompany.legalPersonIdBack
                }
                if(result.data.companyPlatformList && result.data.companyPlatformList.length>0){
                    this.setData(result.data.companyPlatformList)
                }else{
                    this.ruleForm.companyPlatformList = []
                }
            }).catch(err=>{
                // this.$message.error(err.msg)
            })
      },
      changImgUrl(url){
          if(url.substring(this.imageUrlHzwl.length-4)=='.pdf'||url.substring(url.length-4)=='docx'||url.substring(url.length-4)=='xlsx'){
            return this.file
        }else{
            return IMG_URL+'/'+url
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            
            this.ruleForm.companyPlatformList = this.changeData(this.ruleForm.companyPlatformList)
            // if(!this.testInput(this.ruleForm.companyPlatformList)){
            //     return false
            // }
            if(this.ruleForm.legalPersonsAssets=='500万以内'){
                this.ruleForm.legalPersonsAssets=1
            }else if(this.ruleForm.legalPersonsAssets=='500-100万'){
                this.ruleForm.legalPersonsAssets=2
            }else if(this.ruleForm.legalPersonsAssets=='1000-2000万'){
                this.ruleForm.legalPersonsAssets=3
            }else if(this.ruleForm.legalPersonsAssets=='2000万以上'){
                this.ruleForm.legalPersonsAssets=4
            }
            if(!this.ruleForm.tradingCertificate){
                this.$message.warning('请上传营业执照')
                return
            }
            if(!this.ruleForm.logisticsAgreement){
                this.$message.warning('请上传物流公司协议照片或PDF格式的协议文档')
                return
            }
            if(!this.ruleForm.paymentAgreement){
                this.$message.warning('请上传支付公司协议照片或PDF格式的协议文档')
                return
            }
            if(!this.ruleForm.legalPersonIdFront){
                this.$message.warning('请上传身份证正反面照片')
                return
            }
            if(!this.ruleForm.legalPersonIdBack){
                this.$message.warning('请上传身份证正反面照片')
                return
            }
            addCiCompanyAndPlatform(this.ruleForm).then(result=>{
                this.$message.success('提交成功')
                this.$router.push({path:'/insuranceInfo'})
                this.setif()
            }).catch(err=>{
                this.$message.error(err.msg)
                this.setif()
            })
            
          } else {
            this.setif()
            return false;
          }
        });
      },
      testInput(tcompanyPlatformList){
          tcompanyPlatformList.forEach(item=>{
              if(!item.paltformWebsite){
                  this.$message.warning(`请输入店铺网址`)
                  return false
              }
          })
      },
      setif(){
          if(this.ruleForm.legalPersonsAssets==1){
                this.ruleForm.legalPersonsAssets='500万以内'
            }else if(this.ruleForm.legalPersonsAssets==2){
                this.ruleForm.legalPersonsAssets='500-100万'
            }else if(this.ruleForm.legalPersonsAssets==3){
                this.ruleForm.legalPersonsAssets='1000-2000万'
            }else if(this.ruleForm.legalPersonsAssets==4){
                this.ruleForm.legalPersonsAssets='2000万以上'
            }
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
            }else if(item=='Kilimall'){
                newArr.push({ paltformName:'Kilimall',paltformWebsite:this.website.kilimall })
            }else if(item=='Linio'){
                newArr.push({ paltformName:'Linio',paltformWebsite:this.website.linio })
            }else if(item=='Newegg'){
                newArr.push({ paltformName:'Newegg',paltformWebsite:this.website.newegg })
            }else if(item=='Etsy'){
                newArr.push({ paltformName:'Etsy',paltformWebsite:this.website.etsy })
            }else if(item=='Cdiscount'){
                newArr.push({ paltformName:'Cdiscount',paltformWebsite:this.website.cdiscount })
            }else if(item=='UMKA'){
                newArr.push({ paltformName:'UMKA',paltformWebsite:this.website.umka })
            }else if(item=='Mercodolibrie'){
                newArr.push({ paltformName:'Mercodolibrie',paltformWebsite:this.website.mercodolibrie })
            }else if(item=='Jumia'){
                newArr.push({ paltformName:'Jumia',paltformWebsite:this.website.jumia })
            }else if(item=='VOVA'){
                newArr.push({ paltformName:'VOVA',paltformWebsite:this.website.vova })
            }
            
        })
        return newArr
    },
    setData(arr){
        var newArr = []
        arr.forEach(item=>{
            newArr.push(item.paltformName)
            if(item.paltformName=='亚马逊'){
                this.website.ymx = item.paltformWebsite
            }else if(item.paltformName=='eBay'){
                this.website.eBay = item.paltformWebsite
            }else if(item.paltformName=='阿里速卖通'){
                this.website.alsmt = item.paltformWebsite
            }else if(item.paltformName=='Wish'){
                this.website.wish = item.paltformWebsite
            }else if(item.paltformName=='敦煌网'){
                this.website.dhw = item.paltformWebsite
            }else if(item.paltformName=='Shopee'){
                this.website.shopee = item.paltformWebsite
            }else if(item.paltformName=='Lazada'){
                this.website.lazada = item.paltformWebsite
            }else if(item.paltformName=='执御'){
                this.website.zy = item.paltformWebsite
            }else if(item.paltformName=='1688'){
                this.website.onesix = item.paltformWebsite
            }else if(item.paltformName=='Shopify'){
                this.website.shopify = item.paltformWebsite
            }else if(item.paltformName=='Kilimall'){
                this.website.kilimall = item.paltformWebsite
            }else if(item.paltformName=='Linio'){
                this.website.linio = item.paltformWebsite
            }else if(item.paltformName=='Newegg'){
                this.website.newegg = item.paltformWebsite
            }else if(item.paltformName=='Etsy'){
                this.website.etsy = item.paltformWebsite
            }else if(item.paltformName=='Cdiscount'){
                this.website.cdiscount = item.paltformWebsite
            }else if(item.paltformName=='UMKA'){
                this.website.umka = item.paltformWebsite
            }else if(item.paltformName=='Mercodolibrie'){
                this.website.mercodolibrie = item.paltformWebsite
            }else if(item.paltformName=='Jumia'){
                this.website.jumia = item.paltformWebsite
            }else if(item.paltformName=='VOVA'){
                this.website.vova = item.paltformWebsite
            }
        })
        this.ruleForm.companyPlatformList = newArr
    },
    // 营业执照
    handleYyzz(res, file){
        this.imageUrl = IMG_URL+'/'+res.data;
        if(this.imageUrl.substring(this.imageUrl.length-4)=='.pdf'||this.imageUrl.substring(this.imageUrl.length-4)=='docx'||this.imageUrl.substring(this.imageUrl.length-4)=='xlsx'){
            this.imageUrl = this.file
        }
        this.ruleForm.tradingCertificate = res.data;
        console.log(res.data)
    },
    beforeHandleYyzz(file){

    },
    //合作物流
    handleHzwl(res, file){
        console.log(99999,res)
        this.imageUrlHzwl = IMG_URL+'/'+res.data;
        if(this.imageUrlHzwl.substring(this.imageUrlHzwl.length-4)=='.pdf'||this.imageUrlHzwl.substring(this.imageUrlHzwl.length-4)=='docx'||this.imageUrlHzwl.substring(this.imageUrlHzwl.length-4)=='xlsx'){
            this.imageUrlHzwl = this.file
        }
        console.log(this.imageUrlHzwl)
        this.ruleForm.logisticsAgreement = res.data;
    },
    beforeHandleHzwl(file){
        
    },

    //合作物流
    handleHzzf(res, file){
        this.imageUrlHzzf = IMG_URL+'/'+res.data;
        if(this.imageUrlHzzf.substring(this.imageUrlHzzf.length-4)=='.pdf'||this.imageUrlHzzf.substring(this.imageUrlHzzf.length-4)=='docx'||this.imageUrlHzzf.substring(this.imageUrlHzzf.length-4)=='xlsx'){
            this.imageUrlHzzf = this.file
        }
        this.ruleForm.paymentAgreement = res.data;
    },
    beforeHandleHzzf(file){
       

    },
    //身份证正面
    handleIdFront(res, file){
        this.imageUrlIdFront = IMG_URL+'/'+res.data;
        if(this.imageUrlIdFront.substring(this.imageUrlIdFront.length-4)=='.pdf'||this.imageUrlIdFront.substring(this.imageUrlIdFront.length-4)=='docx'||this.imageUrlIdFront.substring(this.imageUrlIdFront.length-4)=='xlsx'){
            this.imageUrlIdFront = this.file
        }
        this.ruleForm.legalPersonIdFront = res.data;
    },
    beforeHandleIdFront(file){
        

    },

    //身份证反面
    handleIdBack(res, file){
        this.imageUrlIdBack = IMG_URL+'/'+res.data;
        if(this.imageUrlIdBack.substring(this.imageUrlIdBack.length-4)=='.pdf'||this.imageUrlIdBack.substring(this.imageUrlIdBack.length-4)=='docx'||this.imageUrlIdBack.substring(this.imageUrlIdBack.length-4)=='xlsx'){
            this.imageUrlIdBack = this.file
        }
        this.ruleForm.legalPersonIdBack = res.data;
    },
    beforeHandleIdBack(file){
        

    },
    changeCoCompany(val){
        if(val==1){
            this.ruleForm.logisticsCompany='友和道通'
        }else{
            this.ruleForm.logisticsCompany=''
        }
    },
    changeCo(val){
        if(val=='其他'){
            this.showPayCom = true
        }else{
            this.showPayCom = false
        }
    },
    changePayCompany(val){
        if(val==1){
            this.ruleForm.paymentCompany='友和道通'
        }else{
            this.ruleForm.paymentCompany=''
        }
    }

}
}
</script>

<style>

.wscn-http404-container{
  width: 60%;
  max-width: 700px;
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
