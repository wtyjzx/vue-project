 /* eslint-disable */
<template>
  <div class="hello">
    


    <div class="header_wrapper">
    <aa size="mini" type='primary'  ><a href="/renshi.vue">登录</a></aa>
    <eleBtn>注册</eleBtn>
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
  name: 'Social',
  components:{
    aa: Button,
   
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      
      tabPosition:'top',
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
</style>


<style>
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

  
</style>