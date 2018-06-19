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

      <img src="./images/12.jpg" style="width:100%;height:auto;">


      <h1 class="h1-4">
          | 联系我们
      </h1>
      <ul class="sp-1">
        <i class="el-icon-location">地址：浙江省杭州市拱墅区</i><br>
        <i class="el-icon-message">邮编:430022</i><br>
        <i class="el-icon-phone">电话:027-85773941 027-85748141</i>
        <i class="el-icon-printer">传真:027-85720794</i>
    </ul>
      <h1 class="h1-4">
          | 业务垂询
      </h1>
      <div class="sp-1">
                    客户服务一部：027-85350435-8818<br>
客户服务二部：027-85350437-8029<br>
全国代理中心：027-85748141-8015<br>
商务代理部： 027-85350541<br>
招聘猎头部：  027-85350817<br>
市场部：   027-85350541-8066<br>
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
  name: 'PersonnelPlatform',
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

.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
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
</style>