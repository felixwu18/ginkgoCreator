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
         console.log('滚动监听成功')
         this.menuActive ++ 
         this.menuActive === 3 && (this.menuActive = 0)
     }
  }       
};
</script>

<style lang="scss" scoped>
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
}
</style>
