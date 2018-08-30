<template>
  <div class="PageBox">
    <div class="PageBoxBg">
      <div class="PageTip">
        <img src="../assets/img/lucky_title.png" alt="幸运大转盘">
      </div>
      <div class="PageBody">
        <!--<img src="../assets/img/draw_wheel.png" alt="大转盘" >-->
        <span class="PageBodyBtn" @click="rotate_handle()"  :style="{transform:rotate_angle_pointer,transition:rotate_transition_pointer}">
            <img src="../assets/img/draw_btn.png" alt="按钮" >
          </span>
        <div class="PageBodyMain" :style="{transform:rotate_angle,transition:rotate_transition}">
          <div v-for="(item,index) in prize_list" :key="index"  class="PageBodyTxt" >
            <span class="PageBodyTxtIcon">
              <img :src="item.icon" alt="">
            </span>
            <span class="PageBodyTxtName">
              <span>{{item.name}}</span>
            </span>
            <span class="PageBodyTxtCount">
              <span>{{item.count}}</span>
            </span>
          </div>
        </div>

      </div>
      <div class="PageFooter">
        <img src="../assets/img/luck_bg.png" alt="底部">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "page",
    data(){
      return{
        prize_list: [
          {
            icon: require("../assets/img/bean_500.png"), // 奖品图片
            count: 10, // 奖品数量
            name: "易趣豆", // 奖品名称
            isPrize: 1 // 该奖项是否为奖品
          },
          {
            icon: require("../assets/img/bean_five.png"),
            count: 5,
            name: "豆",
            isPrize: 1
          },
          {
            icon: require("../assets/img/bean_one.png"),
            count: 10,
            name: "易趣豆",
            isPrize: 1
          },
          {
            icon: require("../assets/img/point_five.png"),
            count: 5,
            name: "积分",
            isPrize: 1
          },
          {
            icon: require("../assets/img/point_ten.png"),
            count: 10,
            name: "积分",
            isPrize: 1
          },
          {
            icon: require("../assets/img/bean_500.png"),
            count: 10,
            name: "易趣豆",
            isPrize: 1
          },
          {
            icon: require("../assets/img/give_up.png"),
            count: 0,
            name: "未中奖",
            isPrize: 0
          },
          {
            icon: require("../assets/img/bean_500.png"),
            count: 10,
            name: "易趣豆",
            isPrize: 1
          }
        ],
        hasPrize: false, //是否中奖
        start_rotating_degree: 0, //初始旋转角度
        rotate_angle: 0, //将要旋转的角度
        start_rotating_degree_pointer: 0, //指针初始旋转角度
        rotate_angle_pointer: 0, //指针将要旋转的度数
        rotate_transition: "transform 6s ease-in-out", //初始化选中的过度属性控制
        rotate_transition_pointer: "transform 12s ease-in-out", //初始化指针过度属性控制
        click_flag: true, //是否可以旋转抽奖
        i:0
      }
    },
    methods:{
      rotate_handle() {
        this.rotating();
      },
      rotating() {
        if (!this.click_flag) return;
        var type = 0; // 默认为 0  转盘转动 1 箭头和转盘都转动(暂且遗留)
        var during_time = 5; // 默认为1s
        this.i =  Math.floor(Math.random() * 7);
        var random = this.i ;
        var result_index =  random; // 最终要旋转到哪一块，对应prize_list的下标
        console.log(result_index,'inin')
        // var result_angle = [337.5, 292.5, 247.5, 202.5, 157.5, 112.5, 67.5, 22.5]; //最终会旋转到下标的位置所需要的度数
        var result_angle = [337.5, 292.5, 247.5, 202.5, 157.5, 112.5, 67.5, 22.5]; //最终会旋转到下标的位置所需要的度数
        var rand_circle = 6; // 附加多转几圈，2-3
        this.click_flag = false; // 旋转结束前，不允许再次触发
        if (type == 0) {
          // 转动盘子
          var rotate_angle =
            this.start_rotating_degree +
            rand_circle * 360 +
            result_angle[result_index] -
            this.start_rotating_degree % 360;
          this.start_rotating_degree = rotate_angle;
          this.rotate_angle = "rotate(" + rotate_angle + "deg)";
          console.log(result_angle[result_index],'zz')

          // // //转动指针
          // this.rotate_angle_pointer = "rotate("+this.start_rotating_degree_pointer + 360*rand_circle+"deg)";
          // this.start_rotating_degree_pointer =360*rand_circle;
          var that = this;
          // 旋转结束后，允许再次触发
          setTimeout(function() {
            that.click_flag = true;
            that.game_over(this.i);
          }, during_time * 1000 + 1500); // 延时，保证转盘转完
        } else {
          //
        }
      },
      game_over() {
        // this.toast_control = true;
        alert(this.prize_list[this.i].name+this.prize_list[this.i].count);
        console.log(this.i,'asd');
        this.i= 0;
      },
    }
  }
</script>

<style scoped>
  .PageBox{
    width: 100%;
    height: 100%;
    background: #fccf85;
  }
  .PageBox .PageBoxBg{
    width: 100%;
    height: 100%;
    background: url("../assets/img/color_pillar.png") no-repeat ;
  }
  .PageBox .PageBoxBg .PageTip{
    width: 100%;
    position: relative;
    top:25px;
  }
  .PageBox .PageBoxBg .PageTip img{
    width: 100%;
  }
  .PageBox .PageBoxBg .PageBody{
    width: 80%;
    margin: 20px auto 0;
    position: relative;

    background-size: 100%;
  }
  .PageBox .PageBoxBg .PageBody img{
    width: 100%;
  }
  .PageBox .PageBoxBg .PageBody .PageBodyMain {
    height: 18.4375rem;
    background: url("../assets/img/draw_wheel.png") no-repeat center top;
    width: 100%;
    margin: 20px auto 0;
    position: relative;
    background-size: 100%;
  }
  .PageBox .PageBoxBg .PageBody .PageBodyBtn {
    position: absolute;
    display: block;
    width: 5.3125rem;
    height: 5.3125rem;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 999;
  }
  .PageBox .PageBoxBg .PageBody .PageBodyBtn img{
    width: 100%;
    transform-origin: center 50%;
  }
  .PageBox .PageBoxBg .PageBody .PageBodyTxt {
    width: 5.875rem;
    height: 9rem;
    position: absolute;
    top:0;
    left: 0;
  }
  .PageBox .PageBoxBg .PageBody .PageBodyTxt:nth-child(1) {
    top: 0;
    left: 8.3125rem;
    transform: rotate(20deg);
  }

  .PageBox .PageBoxBg .PageBody .PageBodyTxt:nth-child(2) {
    top: 2.8rem;
    left: 10.8rem;
    transform: rotate(67deg);
  }
  .PageBox .PageBoxBg .PageBody .PageBodyTxt:nth-child(3) {
    top: 6.4rem;
    left: 10.6rem;
    transform: rotate(-250deg);
  }
  .PageBox .PageBoxBg .PageBody .PageBodyTxt:nth-child(4) {
    top: 9rem;
    left: 8.2125rem;
    transform: rotate(-210deg);
  }
  .PageBox .PageBoxBg .PageBody .PageBodyTxt:nth-child(5) {
    top: 9.2125rem;
    left: 4.4rem;
    transform: rotate(-160deg);
  }
  .PageBox .PageBoxBg .PageBody .PageBodyTxt:nth-child(6) {
    top: 6.3875rem;
    left: 1.9rem;
    transform: rotate(-111deg);
  }
  .PageBox .PageBoxBg .PageBody .PageBodyTxt:nth-child(7) {
    top: 2.8rem;
    left: 1.8125rem;
    transform: rotate(-69deg);
  }
  .PageBox .PageBoxBg .PageBody .PageBodyTxt:nth-child(8) {
    top: 0;
    left: 4.5rem;
    transform: rotate(-20deg);
  }
  .PageBox .PageBoxBg .PageBody .PageBodyTxt span{
    display: block;
  }
  .PageBox .PageBoxBg .PageBody .PageBodyTxt .PageBodyTxtIcon img{
    width: 4.0625rem;
    height: 2.5rem;
    margin-top: 1.5625rem;
  }
  .PageBox .PageBoxBg .PageFooter{
    width: 100%;
  }
  .PageBox .PageBoxBg .PageFooter img{
    width: 100%;
  }
</style>
