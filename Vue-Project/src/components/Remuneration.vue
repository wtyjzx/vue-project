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


      <img src="./images/10.jpg" class="img10" >

  <h1 class="h1-1">薪酬管理主要业务</h1>
    <ul class="module-2-point-wrap">
            <li class="point-item">
                <i class="el-icon-tickets" ></i>
                <p class="point-title">薪酬发放</p>
                <i class="el-icon-minus"></i>
                <p class="point-describe">员工工资及时精准发放</p>
                <p class="point-describe">员工工资及时精准发放</p>
            </li>
            <li class="point-item">
                <i class="el-icon-edit"></i>
                <p class="point-title">财务代理</p>
                <i class="el-icon-minus"></i>
                <p class="point-describe">薪酬顾问<br>跟踪服务实时提醒</p>
            </li>
            <li class="point-item">
                <i class="el-icon-document" ></i>
                <p class="point-title">税务代理</p>
                <i class="el-icon-minus"></i>
                <p class="point-describe">全方位服务
                    <br>薪资、社保、个税同步缴纳</p>
            </li>
            <li class="point-item">
                <i class="el-icon-goods" ></i>
                <p class="point-title">工资卡办理</p>
                <i class="el-icon-minus"></i>
                <p class="point-describe">免费办卡<br>员工足不出户办卡领工资</p>
            </li>
            <li class="point-item">
                <i class="el-icon-loading" alt="薪资服务贵不贵"></i>
                <p class="point-title">财务咨询</p>
                <i class="el-icon-minus"></i>
                <p class="point-describe">准确制作
                    <br>工资单每月按时发放</p>
            </li>
        </ul>

        <h1 class="h1-5">
              | 联系我们
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
  name: 'Remuneration',
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
          label: '薪酬发放'
        }, {
          value: '选项2',
          label: '财务代理'
        }, {
          value: '选项3',
          label: '税务代理'
        }, {
          value: '选项4',
          label: '工资卡办理'
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
.img2{
  width: 80px;
  height: 40px;
}
.img10{
        width:1535px;
  }
  .h1-1{
    margin-top:20px;
    margin-bottom:20px;
    margin-left:600px;
  }

  .module-2-point-wrap{
    margin-bottom:40px;
    margin-left:280px;
  }
</style>