
export default {
    data() {
      return {
          canvas: null,
          ctx: null,
      }
    },
    created: {

    },
    mounted() {
        this.initChart()
    },
    methods: {
        initChart() {
            const canvas = this.$refs.canvasRef;
            this.canvas = canvas;
            console.log(canvas, 'canvas');
            this.cxt = canvas.getContext('2d');
            canvas.width = this.$refs.canvasWrap.offsetWidth;
            console.log(canvas, 'canvas');
            console.log(this.cxt, 'this.cxt');
            console.log(canvas.width, 'canvas.width');
            console.log(this.cxt.lineTo, 'this.cxt.lineTo');
            console.log(this.cxt.beginPath, 'this.cxt.beginPath');
            // canvas.width = this.$refs.canvasRef.offsetWidth;
            this.draw()
        },
        draw() {
            const { ctx } = this
            ctx.beginPath()
            ctx.strokeStyle = '#fcc'
            ctx.lineWidth = 2
            ctx.moveTo(0, 0)
            ctx.lineTo(10, 10)
            // ctx.moveTo(5, 10)
            // ctx.lineTo(5, 5)
            ctx.stroke()
            // ctx.moveTo(0,0);
            // ctx.lineTo(200,100);
            // ctx.stroke();
        },
        testMixin() {
            this.$message.success('testMixin ok!')
        }
    },
}