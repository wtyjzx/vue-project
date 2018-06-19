 /* eslint-disable */
<template>
  <div class="hello">
    


    <div class="header_wrapper">
      <aa>登录</aa>
    <aa>注册</aa>
    </div>



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

    <img src="./images/11.jpg" class="img-11" style="width:100%;height:auto;">
      <h1 class="h1-4">
          业务流程外包
      </h1>

    <ul class="sp-1">
        业务流程外包解决方案依托强大的IT基础、丰富的流程管理经验和高效互动的近岸®模式，使交易成本大幅减少，非核心功能的生产力大大提高，这也正是公司将它们外包出去的原因所在。
    
    </ul>
    <h1 class="h1-4">
          企业福利外包
      </h1>

    <ul class="sp-1">
        制定科学合理的员工福利计划，提供多种体检套餐，高性价比的补充商业医疗保险，更有包括节日慰问礼品、福利卡、培训、旅游、员工关爱等多个方面的福利套餐和产品。帮助HR关爱员工及其家属，打造和谐的员工关系。
    
    </ul>
    <h1 class="h1-5">
      联系我们
    </h1>
      <div class="input-sele"> 

       <el-select v-model="value" placeholder="请选择">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
       </el-select>
        
      </div>
      <div class="input-4">
            企业名称
            <el-input v-model="input1" placeholder="请输入内容"></el-input>

      </div>
        <div class="input-5">
            邮箱
            <el-input v-model="input2" placeholder="请输入内容"></el-input>

      </div>
       <div class="input-6">
            联系电话
            <el-input v-model="input3" placeholder="请输入内容"></el-input>

      </div>
      <div class="btn">
          <el-button type="primary" plain>提交</el-button>

      </div>
     

      <el-footer>
         <span class=""> 人力资源服务许可证 330108000023 
            增值电信业务经营许可证：浙B2-20150177 浙ICP备14020695号-2</span>
    </el-footer>

   </div>
    
</template>

<script>
import { Button, Select } from 'element-ui';

export default {
  name: 'RecruitingCentre',
  components:{
    aa: Button,
   
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      
      tabPosition:'top',
        input: '',
      options: [{
          value: '选项1',
          label: '投资相关'
        }, {
          value: '选项2',
          label: '合作伙伴'
        }, {
          value: '选项3',
          label: '业务外包'
        }, {
          value: '选项4',
          label: '福利外包'
        }],
        value: ''
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
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .foot_wrapper{
    	background-color:#fff;

  }
.img2{
  width: 80px;
  height: 40px;
}
  .h1-4{
    
    text-align: center;
    color: royalblue;
    margin-top: 40px;
    margin-bottom: 40px;
  }
.sp-1{
  font-family: 'Lato', Arial, sans-serif;
    color: #2e2e2e;
    font-size: 19px;
    line-height: 24px;
    letter-spacing: 0px;
    font-weight: 300;
    box-sizing: border-box;
  text-align: center;
  margin: 0 auto;
  width: 500px;
}
.h1-5{
  text-align: center;
    color: skyblue;
    margin-top: 40px;
    margin-bottom: 40px;


}
.input-sele{
  text-align: center;
  color: seagreen;



}
.input-4{
  text-align: center;
  width: 280px;
  margin-left:645px;
  color: silver;
}
.input-5{
  text-align: center;
  width: 280px;
  margin-left: 645px;
  color: silver;
}
.input-6{
  text-align: center;
  width: 280px;
  margin-left: 645px;
  color: silver;
}
.btn{
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>