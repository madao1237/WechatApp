Page({
  data:{
     id:0,
     count:1,
     message:"这是一个页面",
     array:[1,2,3,4,5],
     view:"fuck",
     staffA:{firstName:'AfirstName',lastName:'AlastName'},
     staffB:{firstName:'BfirstName',lastName:'BlastName'},
     staffC:{firstName:'CfirstName',lastName:'ClastName'},
     a:1,
     b:2,
     c:3,
  },
  add:function(e){
    this.setData({
      count:this.data.count+1
    })
  }
})