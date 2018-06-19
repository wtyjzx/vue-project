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
    <img src="./images/19.jpg" style="width:100%;height:auto;">
    <h1 class="h1-2">
        杭州福道人力资源服务有限公司期待你的加入
        <ul class="ul-1">
          邮箱:bdawda@gmail.com
        </ul>
    </h1>

    <h2 class="h2-1"> 
      职位列表
    </h2>
       <el-table
       stripe="true"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="title"
        label="职位名称"
        width="300"
        >
      </el-table-column>
      <el-table-column
        prop="style"
        label="工作类型"
        width="300">
      </el-table-column>
       <el-table-column
        prop="where"
        label="工作地点"
        width="300">
      </el-table-column>
      <el-table-column
        prop="date"
        label="发布时间">
      </el-table-column>
    </el-table>



    

    <el-footer>
         <span class=""> 人力资源服务许可证 330108000023 
            增值电信业务经营许可证：浙B2-20150177 浙ICP备14020695号-2</span>
    </el-footer>


   </div>
    
</template>

<script>
import { Button, Select } from 'element-ui';

export default {
  name: 'Outsourcing',
  components:{
    aa: Button,
   
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      
      tabPosition:'top',
      tableData: [{
            title: '出纳',
            style: '全职',
            where: '杭州',
            date:'2018-4-13'
          }, {
            title: 'BPO项目经理',
            style: '全职',
            where: '杭州',
            date:'2018-4-13'
          }, {
            title: '会计',
            style: '全职',
            where: '杭州',
            date:'2018-4-13'
          }, {
            title: '客户经理',
            style: '全职',
            where: '杭州',
            date:'2018-4-13'
          },{
            title: '人事社保专员',
            style: '全职',
            where: '杭州',
            date:'2018-4-13'
          },{
            title: '资深UI工程师',
            style: '全职',
            where: '杭州',
            date:'2018-4-13'
          },{
            title: '视觉设计实习生',
            style: '全职',
            where: '杭州',
            date:'2018-4-13'
          },{
            title: '文案专员',
            style: '全职',
            where: '杭州',
            date:'2018-4-13'
          },{
            title: '资深Java工程师',
            style: '全职',
            where: '杭州',
            date:'2018-4-13'
          },{
            title: '客服',
            style: '全职',
            where: '杭州',
            date:'2018-4-13'
          }]
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
  
  .h1-2{
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: center;
  }
  .ul-1{
    font-size: 24px;
    color: skyblue;
  }
</style>