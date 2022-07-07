<template>
    <div class="positionNav">
        <div class="nav-item" :class="activeClass(0)" @click="jump(0)">
            目录1
        </div>
        <div class="nav-item" :class="activeClass(1)" @click="jump(1)">
            目录2
        </div>
        <div class="nav-item" :class="activeClass(2)" @click="jump(2)">
            目录3
        </div>
        <div class="nav-item" :class="activeClass(3)" @click="jump(3)">
            目录4
        </div>
        <div class="nav-top" :class="activeClass(3)" @click="toTop">
            top
        </div>
    </div>
</template>

<script>
export default {
  name: "scrollPane",
  props: {
  },
  data() {
    return {
        menuActive: 0
    };
  },
  computed: {
      },
  mounted(){
      document.getElementsByClassName('scroll-container')[0].addEventListener('scroll', this.onScroll)
  },
  methods: {
    activeClass(index) {
        if(this.menuActive === index) {
            return 'active'
        } else {
            return ''
        }
    },
    jump(index) {
        this.menuActive = index;
        const jump = document.querySelectorAll('.jump_menu')
        /*获取滚动到的位置 */
        const jumpTotal = jump[index].offsetTop -  100
        /*获取滚动条的位置 */
        const distance = document.getElementsByClassName('scroll-container')[0].scrollTop
        
        /*平滑滚动,时长500ms, 每10ms一跳， 共50跳 */
        let step = jumpTotal / 50
        /*判断滚动方向 */
        if(jumpTotal > distance) {
            this.smoothDown(distance, jumpTotal, step)
        } else {
           const newJumpTotal = distance - jumpTotal
           step = newJumpTotal / 50
           this.smoothUp(distance, jumpTotal, step)
         }
    },
    // 向下滚动
     smoothDown(distance, jumpTotal, step) {
       if(distance < jumpTotal) {
           distance += step
           document.getElementsByClassName('scroll-container')[0].scrollTop = distance
           setTimeout(() => this.smoothDown(distance, jumpTotal, step), 5)
       } else {
           document.getElementsByClassName('scroll-container')[0].scrollTop = jumpTotal
       }
     },    
    // 向上滚动
     smoothUp(distance, jumpTotal, step) {
       if(distance > jumpTotal) {
           distance -= step
           document.getElementsByClassName('scroll-container')[0].scrollTop = distance
           setTimeout(() => this.smoothUp(distance, jumpTotal, step), 5)
       } else {
           document.getElementsByClassName('scroll-container')[0].scrollTop = jumpTotal
       }
     },
     onScroll() {
         const scrolled = document.getElementsByClassName('scroll-container')[0].scrollTop
         if(scrolled < 485){
             this.menuActive = 0
         } else if(scrolled >= 485 && scrolled < 971) {
             this.menuActive = 1
         } else if(scrolled > 971 && scrolled < 1200) {
             this.menuActive = 2
         } else if(scrolled >= 1200) {
             this.menuActive = 3
         }
     },
     toTop() {
         let scrollNow = document.getElementsByClassName('scroll-container')[0].scrollTop
         const step = scrollNow / 50
         topScroll()
         function topScroll() {
             if(scrollNow > 10) {
                 scrollNow -= step
                 document.getElementsByClassName('scroll-container')[0].scrollTop = scrollNow
                 setTimeout(topScroll, 5)
             }else {
                 document.getElementsByClassName('scroll-container')[0].scrollTop = 0
             }
         }
     }
  }       
};
</script>

<style lang="less" scoped>
// .scroll-container{
//     position: fixed;
//     top: 209px;
//     right: 20px;
//     border: solid;
// }
.positionNav {
    box-shadow: -4px 4px 8px 0 rgba(0, 70, 78, .13);
    font-size: 15px;
    .nav-item {
        height: 40px;
        width: 40px;
        line-height: 40px;
        padding: 9px;
        color: #999;
        border: solid 1px #d8ded8;
        cursor: pointer;
        display: block;
        &:hover {
            color: #fff;
            background: #15bdcf;
        }
        &.active {
            color: #15bdcf;
            background: #fff;
        }
    }
    .nav-top {
        height: 40px;
        width: 40px;
        line-height: 40px;
        padding: 9px;
        border: solid 1px #d8ded8;
        color: #fff;
        background: linear-gradient(45deg, rgba(33,201, 219,1) 0%, rgba(21, 189, 207, 1) 100%);
        cursor: pointer;
    }
}
</style>
