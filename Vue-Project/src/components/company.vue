 /* eslint-disable */
<template>
  <div class="hello">
    


     <el-menu 
        
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
        > 
            <el-menu-item index="/"><img src="./images/福道.jpg" class="img2"></el-menu-item>
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/abc">人事平台</el-menu-item>
            <el-menu-item index="/bcs">薪酬管理</el-menu-item>
            <el-menu-item index="/zpzx">招聘中心</el-menu-item>
            <el-menu-item index="/grfw">个人服务</el-menu-item>
            <el-menu-item index="/wbfw">外包服务</el-menu-item>
      </el-menu>

    <img src="./images/17.jpg" style="width:100%;height:auto;">

        <div class="con-1">
              <h1 class="h1-8">
                FD生活
              </h1>
              <img src="./images/20.jpg" style="width:100%;height:auto;">
              <span class="sp-4">
                  我们珍视您的身份、学识以及职业规划。我们关心您的工作和生活。
                  
              </span>
        </div>
      <div class="con-2">
              <h1 class="h1-8">
                团队与职责
              </h1>
              <img src="./images/21.jpg" style="width:100%;height:auto;">
              <span class="sp-4">
                 位于众多国家的销售、客户服务、实施、技术及其他团队。
                  
              </span>
        </div>

      
      <h1 class="h1-4">
          公司概况
      </h1>

      
      <ul class="sp-1">
        杭州福道人力资源服务有限公司服务涵盖培训、企业管理咨询、人事及法定福利外包、员工福利、招聘及测评、薪酬财务等服务领域，公司秉承专业、诚信、追求卓越的服务理念，不求最大，但求最精的企业文化。依托资源优势、技术平台，以规范的流程、专业的团队，为浙江省内的中外企业和境外驻杭代表机构提供专业化、多元化、个性化的一站式人力资源服务。公司坐落于杭州EAC欧美中心，毗邻众多国内外知名公司，以便为客户办理各项服务，并可根据客户需要提供上门服务。公司着重于BPO项目外包，区别于传统人才派遣或人事代理服务，BPO项目外包的服务以单个岗位为外包载体的全流程服务外包。在传统人事外包服务内容的基础上，引入一系列创新性的服务；一站式服务、全程管理、绩效考核、结果导向、团队建设的理念贯穿始终。服务内容更细致、更贴近客户的需求，引入全流程外包理念，结合现场服务，客户能充分享受人力资源项目外包业务所带来的“优质、高效、便捷”的服务效应。
    
    </ul>

    <el-footer>

        
         <span class=""> 人力资源服务许可证 330108000023 
          
            增值电信业务经营许可证：浙B2-20150177 浙ICP备14020695号-2</span>

    </el-footer>

       <div class="header_wrapper">
     <aa><a href="/login">登录</a></aa>
      
    <aa>注册</aa>
    </div>


   </div>
    
</template>

<script>
import { Button, Select } from 'element-ui';

export default {
  name: 'Company',
  components:{
    aa: Button,
   
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.header_wrapper{
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
  height: 60px;
}
 
  .img2{
  width: 80px;
  height: 40px;
}

.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  margin-top: auto;
  font-size: 12px;
}
.con-1{
  box-sizing: border-box;
  float: left;
  width: 300px;
  margin-top: 50px;
  margin-left:50px;
  background-color: rgb(252, 243, 246);
}

.h1-8{
  text-align: center;
  color: red;
}
.con-2{
  box-sizing: border-box;
  float: right;
  width: 300px;
  margin-top: 50px;
  margin-left:50px;
  background-color: rgb(252, 243, 246);
}
</style>