<template>
    <div class="main_index">
        <!-- 轮播 -->
        <el-carousel :interval="4000" type="card" height="200px" v-if="imgCarousel">
            <el-carousel-item v-for="(item, index) in imgCarousel" :key="index">
              <img :src="(item.src)" alt="flowers"/>
            </el-carousel-item>
        </el-carousel>
        <!-- 卡片 -->
        <el-row v-if="!!imaCard">
            <el-col class="imgcard" :span="4" v-for="(o,index) in imaCard" :key="index" :offset="(index%5!=0) ? 1 : 0">
                <el-card shadow="hover" :body-style="{ padding: '0px' }" :id="o.id">
                    <img :src="o.src" class="image">
                    <div style="padding: 14px;">
                        <span>{{o.info}}</span>
                        <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" class="button">观看视频</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                currentDate: '',
                imgCarousel:[],
                imaCard: []
            };
        },
        mounted() {
            this.currentDate = (new Date().getHours())+':'+(new Date().getMinutes())
            for(let carousel=0; carousel<15;carousel++) {
                this.imgCarousel.push({src : require('@/assets/images/swipe/'+ (carousel*1+1)+ '.jpg')})
                // console.log( this.imgCarousel[carousel])
                // console.log("轮播:"+(carousel*1+1))
            }
            for(let imgs=0;imgs<50;imgs++){
                let randomNum = parseInt(Math.random()*5)+1
                // console.log('动图：'+(imgs+1))
                try {
                    this.imaCard.push({src: require('@/assets/images/video/'+ randomNum +'.gif'),id:randomNum,info: '视频剪辑'+randomNum,getUpdataTime: '',getVideoTime: '',getZanNum: '',isZan: 'false'})
                    // console.log(this.imaCard[imgs])
                }catch(err) {
                    this.imaCard[imgs].src = require('@/assets/images/err.jpg')
                }
            }
        },
        methods: {
            
        }
    }
</script>
<style>
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

  .image {
    width: 100%;
    display: block;
  }
  .imgcard {
      height: 20rem;
  }
    .el-carousel {
        min-height: 17rem;
    }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
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
  .el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover {
    -webkit-box-shadow: 0 5px 40px 0 #fff;
    box-shadow: 0 5px 40px 0 #fff;
    }
    /* .el-card__body img{
        height:17rem
    } */
</style>
