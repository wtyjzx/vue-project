 /* eslint-disable */
<template>
  <div class="hello">
    
    <el-container>
    
    <el-header>

      <el-row>
          <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
      </el-row>

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
    </el-header>
    <el-main>

          <el-carousel :interval="4000" type="card" height="400px">
                <el-carousel-item v-for="(img,index) in imgList" :key="index">
                  <img v-bind:src="img.url">
                </el-carousel-item>
            </el-carousel>
      
          <el-tabs :tab-position="tabPosition" style="height: 400px;">
              <el-tab-pane label="企业介绍"
                    >杭州福道人力资源服务有限公司服务涵盖培训、人事及法定福利外包、员工福利、招聘及测评、薪酬财务等领域，公司秉承专业、诚信、追求卓越的服务理念。依托资源优势、技术平台，以规范的流程、专业的团队，希望为杭州市内的中外企业和境外驻杭代表机构提供专业化、多元化、个性化的一站式人力资源服务。
                    <a href="#/company">了解更多</a></el-tab-pane>
              <el-tab-pane label="人事平台">
                    <span>杭州福道人力资源服务有限公司服务涵盖培训、人事及法定福利外包、员工福利、招聘及测评、薪酬财务等领域，公司秉承专业、诚信、追求卓越的服务理念。依托资源优势、技术平台，以规范的流程、专业的团队，希望为杭州市内的中外企业和境外驻杭代表机构提供专业化、多元化、个性化的一站式人力资源服务。
                    </span></el-tab-pane>
              <el-tab-pane label="薪酬管理"
                    >企业介绍</el-tab-pane>
          </el-tabs>

            <el-card class="box-card">
                        <div slot="header" class="clearfix">
                        <span>人事资讯</span>
                      <el-button style="float: right; padding: 3px 0" type="text"></el-button>
                      </div>
                      <div v-for="o in 4" :key="o" class="text item">
                          {{'资讯内容 ' + o }}
                      </div>
             </el-card>

                        <el-card class="box-card">
                              <div slot="header" class="clearfix">
                              <span>企业资讯</span>
                              <el-button style="float: right; padding: 3px 0" type="text"></el-button>
                             </div>
                             <div v-for="o in 4" :key="o" class="text item">
                                {{'资讯内容 ' + o }}
                             </div>
                         </el-card>
                 
                      <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <span>社保资讯</span>
                        <el-button style="float: right; padding: 3px 0" type="text"></el-button>
                      </div>
                      <div v-for="o in 4" :key="o" class="text item">
                        {{'资讯内容 ' + o }}
                      </div>
                    </el-card>

    </el-main>

    <el-footer>

        
         <span class=""> 人力资源服务许可证 330108000023 
          
            增值电信业务经营许可证：浙B2-20150177 浙ICP备14020695号-2</span>

    </el-footer>


    </el-container>

   <div class="header_wrapper">
     <aa><a href="#/login">登录</a></aa>
      
    <aa><a href="#/register">注册</a></aa>
    </div>

    



   </div>
    
</template>

<script>
import { Button, Select } from "element-ui";

export default {
  name: "Index",
  components: {
    aa: Button
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      currentDate: new Date(),
      tabPosition: "top",
      imgList:[{
        url:require('./images/16.jpg')
      },{
        url:require('./images/14.jpg')
      },{
        url:require('./images/15.jpg')
      }]
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: rgb(247, 248, 248);
}

a {
  color: #16cece;
}
.header_wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
  height: 60px;
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

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-row{
  padding: 0;
}


.foot_wrapper {
  display: flex;
  z-index: 0;
  position: absolute;
 
}

.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  margin-top: auto;
  font-size: 12px;
}
.el-header{
  margin :0;
  padding: 0;
}
.el-main{
  margin:0;
  padding:0;
}
.el-col {
  border-radius: 4px;
}

.el-tabs__item{
  width:480px;
  font-size: 25px;
}



.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }

  .el-card{
    float: left;
  }


  img{
    width:  950px;
    height: 400px;
  }

  .el-tabs__content {
    overflow: hidden;
    position: relative;
    width: 340px;
}



.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image1 {
    width: 200px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

  .el-col-8 {
    width: 250px;
}
.img2{
  width: 80px;
  height: 40px;
}
</style>

