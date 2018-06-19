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

      <div class="img-wrap">
          <img src="./images/8.jpg" class="img3" >
      </div>
  
        <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="社会保险介绍" name="1">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。<a href="">了解更多</a></div>
    </el-collapse-item>
    <el-collapse-item title="档案管理介绍" name="2">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。<a href="">了解更多</a></div>
  </el-collapse-item>
  <el-collapse-item title="证件办理介绍" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。<a href="">了解更多</a></div>
  </el-collapse-item>
  <el-collapse-item title="办理流程介绍" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。<a href="">了解更多</a></div>
  </el-collapse-item>
</el-collapse>





  <el-footer>
        
         <span class=""> 人力资源服务许可证 330108000023 
          
            增值电信业务经营许可证：浙B2-20150177 浙ICP备14020695号-2</span>

    </el-footer>



   </div>
    
</template>

<script>
import { Button, Select } from 'element-ui';

export default {
  name: 'PersonalService',
  components:{
    aa: Button,
   
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
       activeNames: ['1'],
      tabPosition:'top',
    }
  },
   methods: {
      handleChange(val) {
        console.log(val);
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
  
  .foot_wrapper{
    	background-color:#fff;
  }

.img2{
  width: 80px;
  height: 40px;
}
  .img3{
    width:1535px;
    
  }

  
</style>