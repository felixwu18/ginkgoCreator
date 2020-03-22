onmessage=pingpong;

function pingpong(event){
  console.log(event)
  if(event.data == 'ping'){
    postMessage({'name':'孙悟空','sex':'男'});
  }
}
