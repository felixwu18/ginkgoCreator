export function outJs(data) {
  this.data = data;
  console.log("this.data---外部辅助函数引用");
  console.log(this.data);
  console.log('外部js里的this===================', this);
  Object.prototype.toString.call(this.data).slice(8, -1) === "Function" && this.data() 
}
