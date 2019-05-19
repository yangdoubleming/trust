<template>
    <section>
        <img :src="banner" class="banner" />
        <div class="header">
            <div class="arrow_01">
                <div class="word wordColor"><span class="num">1.   </span>登录/注册</div>
            </div>
            <div class="arrow_02">
                <div class="word "><span class="num">2.   </span>商户信息补全</div>
            </div>
            <div class="arrow_02">
                <div class="word "><span class="num">3.   </span>申请信息</div>
            </div>
            <div class="arrow_03">
                <div class="word "><span class="num">4.   </span>完成</div>
            </div>
        </div>
        <div class="wscn-http404-container">
            <el-form :model="registerForm" :rules="rules" ref="registerForm" label-width="100px" class="demo-registerForm">
                <el-form-item label="手机号" prop="telephone">
                    <el-input v-model="registerForm.telephone" @blur="checkPhone"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="registerForm.password" type="password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="confirmPassword">
                    <el-input v-model="registerForm.confirmPassword" type="password"></el-input>
                </el-form-item>
                <el-form-item label="企业名称" prop="companyName">
                    <el-input v-model="registerForm.companyName"></el-input>
                </el-form-item>
                <el-form-item label="企业类型" prop="productList">
                    <el-checkbox-group v-model="registerForm.productList">
                        <!-- <el-checkbox label="1" value="1">进口</el-checkbox> -->
                        <el-checkbox label="0" value="0">出口</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-row :gutter="20">
                    <el-col :span="16">
                    <el-form-item label="验证码"  prop="verifyCode">
                        <el-input v-model="registerForm.verifyCode"></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="8">
                    <el-button @click="getCode" :disabled="btnStatus">{{paracont}}</el-button>
                    </el-col>
                </el-row>
                <el-form-item label="">
                    <el-col :span="2">
                        <el-checkbox-group v-model="check">
                            <el-checkbox label="" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-col>
                    <span style="color:#606266">我已阅读并同意<span @click="showPdf" style="color:#409EFF;cursor:pointer;" >《豆沙包商户平台合作协议》</span></span>
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
                <el-form-item label="手机号" prop="telephone">
                    <el-input v-model="loginForm.telephone"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginForm.password" type="password"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <div class="submit-btn" style="margin:0 auto" @click="submitLoginForm('loginForm')">登录</div>
            </span>
        </el-dialog>
         <el-dialog
        title="豆沙包科技产品合作协议"
        :visible.sync="dialogVisible"
        width="30%">
        <div>


            <div style="overflow-y: scroll;height: 60vh;" >
        <h3 class="mb10">豆沙包科技产品合作协议</h3>
        <ul>
            <li><strong>豆沙包平台服务协议（以下简称“本协议”）是豆沙包科技（上海）有限公司（以下简称“我们”）与平台用户(以下简称“您”)就平台服务相关事项所订立。本协议有助于您了解我们为您提供的服务内容及您的权利和义务，请您仔细阅读，对于尤为重要的条款，我们已予以加粗，以特别提醒您加以注意。</strong>
            </li>
            <li>
                您使用平台服务、通过网络页面确认或以其他方式接受本协议，即视为您已充分理解本协议所有条款，并同意与我们订立本协议。
            </li>
            <li>
                如您在同意订立本协议之前，对本协议内容存在疑虑或异议，请您联系我们，以便我们为您进行解释和说明，使您能够充分理解，从而帮助您自主决定是否接受本协议及是否使用我们的服务。
            </li>
            <li><strong>一、相关定义</strong></li>
            <li>除非本协议另有约定，本协议下列术语定义如下：</li>
            <li>1.1 豆沙包平台</li>
            <li>指我们提供的用于查询保障服务，传递申请服务的意向，进行信息交流以及与服务有关的辅助信息服务的网络平台。</li>
            <li>1.2 购买服务</li>
            <li>指您借助平台技术支持向服务供应商购买服务的行为。</li>
            <li><strong> 二、声明与承诺</strong></li>
            <li>2.1 您需通过豆沙包账号登入平台。登录平台后发出的指令将视为您本人所为。所以特别提醒您，请妥善保管登录的认证账号，不要将其提供给任何第三方或交于任何第三方使用。</li>
            <li>
                为提高服务安全性，我们可能采取必要手段对您进行身份验证，并据此决定为您提供服务的种类、范围及进行业务操作的权限。为保障您的资金安全，我们将根据您的账户类别、身份认证措施、交易风险度等因素的不同，设定不同的安全策略。
            </li>
            <li>2.2
                您承诺不为任何非法目的或以任何非法方式使用平台服务，并承诺遵守中国相关法律、法规及互联网之使用惯例。如我们发现或经第三方举报并经核实您存在前述行为或情形，我们可能会暂停或终止全部或部分平台服务，并视需要报告监管部门，并可能依法移送司法机关。
            </li>
            <li>2.3 您理解并同意，服务合同的缔结和履行由您和服务供应商共同合意完成。我们建议您，在服务合同缔约前审慎选择服务供应商和服务，在服务合同履行过程中关注和督促服务供应商完整履行服务合同的各项义务。</li>
            <li>2.4 您理解并同意，我们因市场变化或业务调整等原因可能会变更、暂停、终止与服务供应商的合作，您可能无法通过平台接受服务供应商的服务。您可以线下与服务供应商联系接受服务。</li>
            <li>2.5 若出现因平台自身原因、系统差错、故障或其他原因引发的展示延误、错误或者您不当获利等情形的，您同意我们可以采取更正差错、扣划款项、暂停服务等适当纠正措施。</li>
            <li>2.6
                您承诺对由您发布、确认、上传、寄送或者以其他方式提供的资料、信息或文件享有合法权利，未侵犯也不会侵犯任何其他方的合法权利或权益（包括隐私权、商标权、专利权等）。在您为他人购买服务时，已经取得他人许可，且通过平台提供的他人信息已经过当事人的授权同意。
            </li>
            <li><strong>三、平台服务</strong></li>
            <li>我们提供的平台服务包括如下内容：</li>
            <li>3.1 服务购买</li>
            <li>您可以通过平台获知服务的报价，并可通过平台发出购买的申请，通过平台缴纳费用，以完成服务购买。</li>
            <li>3.2 服务类型</li>
            <li>3.2.1我们通过平台为您提供基于Echain Cross-border Ecommerce
                Protocol跨境电商基础协议的区块链技术服务，帮助您在该技术底层协议上使用区块链与跨境电商行业结合的新技术、新应用；
            </li>
            <li>3.2.2我们为您提供“区块链+“服务，提供”区块链+“行业创新服务；</li>
            <li>3.2.3我们通过平台为您提供面向企业的融资顾问服务，帮助您实现资金融通业务；</li>
            <li>3.2.4我们通过平台为您提供全方位品牌推广、信息咨询等服务；</li>
            <li>3.2.5我们通过平台为您提供全面客观的行业分析研究服务；</li>
            <li>3.2.6我们通过平台为您提供异国客户售后解决方案；</li>
            <li>3.2.7我们通过平台为您提供延长保修服务解决方案；</li>
            <li>3.2.8我们通过平台为您提供海外仓二次库存、二次销售解决方案；</li>
            <li>3.2.9我们通过平台为您提供供应链上下游优化服务，推荐更安全、更有保障的上下游企业如物流公司、清关公司等；</li>
            <li>3.2.10我们通过平台为你提供精准营销服务，强化获客能力，为您提供大数据精准营销服务；</li>
            <li>3.3 申请赔付或服务</li>
            <li>若发生事故，您可通过平台将事故情况提交，进行赔付或服务申请；</li>
            <li>3.4 其他服务</li>
            <li>您在通过平台购买服务后，可获得服务供应商提供的各类增值服务。 具体服务内容以服务供应商提供的为准。</li>
            <li><strong>四、风险提示</strong></li>
            <li>4.1 您知晓并同意，您接受平台服务时可能面临如下风险和损失：</li>
            <li>4.1.1 监管风险：有关法律、法规及相关政策、规则发生变化，导致无法实现某服务的购买，您由此可能遭受损失；</li>
            <li>4.1.2 违约风险：因服务供应商无力或无意愿按服务合同履约，您由此可能遭受损失；</li>
            <li>4.1.3 成交风险：您所购买的服务无法兑现，您由此无法获得保障及服务；</li>
            <li>4.1.4过错风险：您的决策失误、操作不当、遗忘或泄露豆沙包账户密码、密码被他人破解、您使用的计算机系统被第三方侵入、您委托他人代理交易时他人恶意或不当操作而造成的损失；</li>
            <li>4.1.5本协议约定的有限责任及不可抗力因素导致的风险；</li>
            <li>4.2
                请您知晓，平台中服务的展示为服务供应商自行提供，因此平台中的各种服务信息及资料仅供参考，各类信息查询结果应以服务供应商系统记载的数据为准。您在做出交易决策前，应全面了解相关服务情况，谨慎决策，我们不承担除法律有明确规定外的责任。您与服务供应商之间发生的纠纷，应当依据法律规定各自承担风险及责任。
            </li>
            <li><strong>五、有限责任</strong></li>
            <li>因下列状况导致您无法使用平台服务时，我们不承担除法律有明确规定外的责任。</li>
            <li>5.1 平台系统停机维护或升级；</li>
            <li>5.2 平台所依赖的电信设备出现故障；</li>
            <li>5.3 因台风、地震、海啸、洪水、雷电、停电、战争或恐怖袭击、罢工等不可抗力原因；</li>
            <li>5.4 您的电脑软件、系统、硬件和通信线路、供电线路出现故障；</li>
            <li>5.5 用户操作不当或通过非平台授权或认可的方式使用平台服务；</li>
            <li>5.6 因病毒、木马、恶意程序攻击、网络拥堵、系统不稳定、系统或设备故障、通讯故障、银行原因 、第三方服务瑕疵或政府行为等原因；</li>
            <li>5.7 其他不可归因于我们的原因。</li>
            <li><strong>六、信息收集、使用、共享与保护 </strong></li>
            <li>6.1 收集您的信息</li>
            <li>您同意我们遵循合法、正当、必要的原则，按照如下方式收集与平台服务相关的您的信息；</li>
            <li>6.1.1在您申请或使用平台服务过程中，您向我们提交的信息或新产生的信息；</li>
            <li>6.1.2为了向您提供平台服务以及后续服务维护、管理，并提供服务状态通知及查询服务，我们需要收集您留存在豆沙包的身份信息及联系方式，例如：豆沙包账号、姓名、证件号码、联系方式；</li>
            <li>
                6.1.3根据您购买服务种类或接受平台服务的不同，我们需要从我们的关联公司、服务供应商、政府机关授权单位以及其他合法留存您的信息的信息提供方处，收集与服务相关的您的信息。我们承诺不会收集与您购买服务无关的信息；
            </li>
            <li>6.1.4您在申请或使用平台服务的过程中，向我们提供其他个人信息（例如：您为您的用户购买服务）前，请您事先向相关个人进行必要的告知（如信息范围、信息用途），并获得相关个人的同意。</li>
            <li>6.2 使用您的信息</li>
            <li>为更好地向您提供服务以及保护各方的合法权益，您同意我们将您的信息用于如下用途：</li>
            <li>6.2.1上文6.1条款当中提及的使用目的；</li>
            <li>6.2.2为您提供个性化服务及改进服务质量；</li>
            <li>6.2.3为保护您的账户安全，对您的身份进行识别、验证；</li>
            <li>6.2.4对信息进行汇总、统计、分析或加工，与服务供应商共同评估适合您的服务；</li>
            <li>6.2.5比较信息的准确性并与第三方进行验证；</li>
            <li>
                6.2.6为使您知晓我们服务情况或向您推荐更优质的服务，通过电子邮件、手机短信、客户端消息等方式向您发送服务状态的通知、营销宣传或其他商业性电子信息。如您认为前述方式对您造成了打扰，请按照通知或信息当中提示的方式退订；
            </li>
            <li>6.2.7预防或阻止非法的活动；</li>
            <li>6.2.8为解决您与平台之间产生的违约纠纷或投诉处理；</li>
            <li>6.2.9根据法律法规、监管部门要求进行使用；</li>
            <li>6.2.10经您另行同意的其他用途。</li>
            <li>6.3 分享您的信息</li>
            <li>我们对您的信息承担严格保密义务，不会为满足第三方的营销目的而披露您的任何信息，仅在下列情况下才将您的信息与第三方共享；</li>
            <li>6.3.1 获得您的同意；</li>
            <li>6.3.2 向服务供应商提供您的信息，以缔结、履行服务合同之用；</li>
            <li>
                6.3.3为了提升服务效率，降低服务成本，或提高服务质量，我们可能会委托专业服务机构提供协助。因此，我们需要在必要范围内向其提供您的部分信息。我们对您的信息安全承担相应的责任，同时承诺前述机构遵守严格的保密义务及采取有效的保密措施，不会将这些信息用于未经您同意的用途；
            </li>
            <li>6.3.4根据法律法规的规定及行政/司法机关的要求。</li>
            <li><strong>七、协议变更、解除、终止和权利义务的转让</strong></li>
            <li>7.1 协议变更</li>
            <li>我们可以根据市场变化或经营的需要对本协议进行调整，本协议调整后会以公告形式通知，公告发布之日起第7个自然日后协议生效；</li>
            <li>若您不同意修改本协议，则应当立即停止使用平台服务或通过客服解除本协议；否则，视为您同意并接受修改后的协议。</li>
            <li>7.2 协议解除与终止</li>
            <li>7.2.1 您在使用平台服务的过程中，如果有下列情形发生，我们可以单方面解除本协议；</li>
            <li>7.2.1.1 您的豆沙包账户因任何原因注销的；</li>
            <li>7.2.1.2 冒用他人名义、盗用他人账户使用平台服务的；</li>
            <li>7.2.1.3 为非法目的使用平台服务的；</li>
            <li>7.2.1.4 从事任何可能侵害平台系统、资料之行为；</li>
            <li>7.2.1.5 违反任何法律法规、本协议约定的；</li>
            <li>7.2.1.6 监管机构认为平台提供的服务不再符合相关监管规定的；</li>
            <li>7.2.2
                除上述原因外，我们可以根据风险及自身业务运营情况需要终止向您提供某些服务，届时公司将会视情况公告或告知。鉴于这属于正常商业决策行为，如因此导致您无法使用平台服务或服务受到限制的，您理解我们无须对此承担责任；
            </li>
            <li>7.3 权利义务的转让</li>
            <li>我们可以基于平台服务的需要，变更或增加履约主体，如您继续使用平台服务的，视为同意变更后的主体或新增的主体作为与您履约的相对方。</li>
            <li><strong>八、争议的解决</strong></li>
            <li>
                本协议的订立、效力、解释、履行及争议的解决均适用中华人民共和国法律。在协议履行期间，凡由本协议引起的或与本协议有关的一切争议、纠纷，当事人应首先协商解决。协商不成，各方一致同意提交被告方所在地人民法院通过诉讼方式解决。
            </li>
            <li><strong>九、通知</strong></li>
            <li>
                本协议履行过程中，我们向您发出的书面通知方式包括邮寄纸质通知、豆沙包公告、电子邮件、系统信息、手机短信和传真等方式。如我们以邮寄方式向您发出书面通知的，则在我们按照您在我们留存的通讯地址交邮后的第3个自然日即视为送达。如豆沙包公告、电子邮件、系统信息、手机短信和传真等电子方式发出书面通知的，则在通知发送成功即视为送达。
            </li>
            <li><strong>十、其他</strong></li>
            <li>10.1 在本协议中，除非本协议上下文另有规定；</li>
            <li>10.1.2凡提及条款和附件仅指本协议的条款和附件；</li>
            <li>10.1.3本协议条款的标题仅为查阅方便而设置，不应构成对本协议的任何解释，不对标题之下的内容及范围作任何限定；</li>
            <li>10.2 本协议的附件及各项补充、修订或变更，为本协议不可分割的组成部分，与本协议正文具有同等法律效力；</li>
            <li>10.3 本协议各方应按法律法规及相关规定各自承担与本协议相关的税费；</li>
            <li>10.4 本协议未尽事宜，由双方协商处理，或者按国家有关法律、法规的规定执行。</li>
        </ul>
    </div>





        </div>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">知道了</el-button>
        </span>
        </el-dialog>
    </section>
</template>

<script>
  import { isUsernameRegister, getVerifyCode, register, login  } from '@/api/register'
  import banner from '@/assets/register/banner_01.png'
export default {
  data() {
    return {
        dialogVisible:false,
        banner,
        registerForm: {
            telephone: '',
            password: '',
            confirmPassword: '',
            companyName: '',
            productList: ['0'],
            verifyCode: ''
        },
        loginForm:{
            telephone: '',
            password: '',
        },
        rules: {
            telephone: [
                { required: true, message: '请输入手机号', trigger: 'blur' },
                { pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 6, max:20,message: '密码在6-20位', trigger: 'blur' }
            ],
            confirmPassword: [
                { required: true, message: '请确认密码', trigger: 'blur' },
                { min: 6, max:20,message: '密码在6-20位', trigger: 'blur' }
            ],
            companyName: [
                { required: true, message: '请输入企业名称', trigger: 'blur' },
                { max:50,message: '不能超过50个字', trigger: 'blur' }
            ],
            productList: [
                { type: 'array', required: true, message: '请选择企业类型', trigger: 'blur' }
            ],
            verifyCode: [
                { required: true, message: '请输入验证码', trigger: 'blur' }
            ]
        },
        check:false,
        loginDialogVisible:false,
        paracont:'获取验证码',
        btnStatus:false,
        getCodeStatus:false
    }
  },
  computed: {
    
  },
  methods: {
    // 手机号是否注册
    checkPhone(){
        isUsernameRegister({telephone:this.registerForm.telephone}).then(result=>{
        }).catch(err=>{
            this.$message.error(err.msg)
            return false
        })
    },
    //注册
    submitRegisterForm(formName) {
    this.$refs[formName].validate((valid) => {
        if (valid) {
            if(this.registerForm.password!=this.registerForm.confirmPassword){
                this.$message.warning('密码和确认密码不相同')
                return false;
            }
            if(!this.getCodeStatus){
                this.$message.warning('请先获取验证码！')
                return false;
            }
            if(this.check){
                register(this.registerForm).then(result=>{
                    this.registerSuccess()
                }).catch(err=>{
                    this.$message.error(err.msg)
                })
            }else{
                this.$message.warning('请先阅读并同意《豆沙包商户平台合作协议》')
            }
            
        } else {
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
                login({password:this.registerForm.password,telephone:this.registerForm.telephone}).then(result=>{
                    localStorage.setItem('user', JSON.stringify(result))
                    this.$router.push({path:'/businessInfo'})
                }).catch(err=>{
                    this.$message.error(err.msg)
                })
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
        this.getCodeStatus = true;
        var second = null, timePromise = undefined;
        if (second === null) {
            second = 60;
            if (!this.registerForm.telephone) {
                this.$message({message:'手机号不能为空',type:'error'})
                second = null;
                return false;
            } else {
                getVerifyCode({telephone:this.registerForm.telephone}).then(result => {
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
    // 登录
        submitLoginForm(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    login(this.loginForm).then(result=>{
                        localStorage.setItem('user', JSON.stringify(result))
                        this.$router.push({path:'/registerEnd'})
                    }).catch(err=>{
                        this.$message.error(err.msg)
                    })
                } else {
                    return false;
                }
            })
        },
    showPdf(){
        this.dialogVisible=true
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
    margin-top: 40px;
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
.banner{
    display: block;
    width: 100%;
    margin: 0 auto;
}
</style>
