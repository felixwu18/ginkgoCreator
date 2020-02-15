// 先将需求分解成模块：
// 初始化模块（初始化）（模块合并，事件初始化）
// 运动控制模块（说明怎么动）（速度控制，方向控制）--给出运动算法
// 运动执行模块（执行动）
// 状态模式， 策略模式，  享元模式 （优化if-else三把利剑）

function extend(a, b) {
    Object.keys(b).forEach(item => {
        a[item] = b[item]
    })
}

// 移动块
function mover(config) {
    this.config = {}
    this.idArr = config.idArr || []
    this.domArr = []
    this.nowState = [0,0]
    this.stateArr=[] // 策略数组
    this.type=config.type || "slow" // 速度量级
    if (config.mover) {
        this.movediv = document.getElementById(config.mover)
    } else {
        throw new Error('必须给出移动块')
    }
}

// 粘合，合并
mover.prototype.init = function() {
    extend(mover.__proto__, runnerControl)
}

// 绑定事件
mover.prototype.bind = function() {
    this.init()
    var self = this
    for(var i=0; i < this.idArr.length; i++) {
        (function() {
            var dom = document.getElementById(self.idArr[i])
            self.domArr.push(dom)
            dom.onclick=function() {
                var arr = ['left','right','bottom','top']
                self.arr.push(arr[i])
                self.begin(arr[i])
            }
        })(i)
    }
}

// 运动控制
var runnerControl = {
    speedControl: function() {
        //如果速度受到复杂地算法调控
        var speed=1
        if(this.type="slow") {

        }else if(this.type="normal") {
            speed=3
        }else if(this.type="quick") {
            speed=6
        }
        return {
            speed: speed
        }
    },
    wayControl: function(way, speed) {
        /*0 最初思维
        if(way ==='left') {

        }else if(way==='right') {

        }else if(way==='bottom') {

        }else{

        } */
        // 3 享元模式(提取不同的)
        if(way==="left" || way==="right"){
            var handleNum=0
            var stylename="left"
        }else {
            var handleNum = 1
            var stylename = 'top'
        }
        if(way==='bottom'||'left') {
            var nowspeed=-speed
        }
        this.nowState[handleNum]+=nowspeed
        this.movediv.style[stylename]=this.nowState[handleNum]+'px'

        /* 2 策略模式--定义一系列的算法
        var state = {
            left: function() {
                this.nowState[0]-=speed
                this.movediv.style.left=this.nowState[0]+'px'
            }.bind(this),
            right: function() {
                this.nowState[0]+=speed
                this.movediv.style.left=this.nowState[0]+'px'
            }.bind(this),
            top: function() {
                this.nowState[1]+=speed
                this.movediv.style.top=this.nowState[1]+'px'
            }.bind(this),
            bottom: function() {
                this.nowState[1]-=speed
                this.movediv.style.top=this.nowState[1]+'px'
            }.bind(this),
        } */
        //1 循环 状态模式
        for(var i=0;this.stateArr.length; i++) {
            return function() {
                state[stateArr[i]]
            }
        }
        return state[way]
    },
    begin: function(way) {
        var speed = this.speedControl().speed
        var runnerWay = this.wayControl(way, speed)
        runnerWay()
    }
}


