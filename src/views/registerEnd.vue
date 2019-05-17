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
                <div class="word "><span class="num">3.   </span>投保信息</div>
            </div>
            <div class="arrow_03">
                <div class="word wordColor"><span class="num">4.   </span>完成</div>
            </div>
        </div>
        <div class="header">
            <div class="jupm-btn" style="float:left" @click="linkTo('businessInfo')">
                <img :src="book" class="icon-img" style="float:left" />
                <div class="icon-word" style="float:left">再去贷款</div>
                <img :src="arrow_right" class="arrow-right" style="float:right" />
            </div>
            <div class="jupm-btn" style="float:right" @click="linkTo('loanDetails')">
                <img :src="file" class="icon-img" style="float:left" />
                <div class="icon-word" style="float:left">我的贷款记录</div>
                <img :src="arrow_right" class="arrow-right" style="float:right" />
            </div>
        </div>
        <img :src="banner" class="banner" />
    </section>
</template>

<script>
import banner from '@/assets/register/banner.jpg'
import book from '@/assets/register/book.png'
import file from '@/assets/register/file.png'
import arrow_right from '@/assets/register/arrow_right.png'

export default {
    name: 'register',
    data() {
        return {
            banner,
            book,
            file,
            arrow_right
        }
    },
    computed: {
        
    },
    methods: {
        linkTo(val){
            this.$router.push({path:`/${val}`})
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
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
.jupm-btn{
    width: 580px;
    height: 110px;
    background: #f3f5f9;
    border-radius: 10px;
    cursor: pointer;
}
.banner{
    display: block;
    width: 1203px;
    margin: 0 auto;
    margin-top: 30px;
}
.icon-img{
    margin: 25px 20px 0 66px
}
.icon-word{
    font-size: 18px;
    color: #262b38;
    line-height: 110px;
}
.arrow-right{
    margin: 40px 25px 0px 0px;
}
</style>
