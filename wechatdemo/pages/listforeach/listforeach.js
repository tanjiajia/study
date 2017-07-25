var app = getApp();
Page({
  data: {
		
		oneList:[{
   	 		id:1,
   	 		name:'应季鲜果',
   	 		count:1
   	 },{
   	 		id:2,
   	 		name:'精致糕点',
   	 		count:6
   	 },{
   	 		id:3,
   	 		name:'全球美食烘培原料',
   	 		count:12
   	 },{
   	 		id:4,
   	 		name:'无辣不欢生猛海鲜',
   	 		count:5
   	 }],
   	 
   	 twoList:[{
   	 		id:1,
   	 		name:'应季鲜果',
   	 		count:1,
   	 		twodata:[{
   	 			'id':11,
   	 			'name':'鸡脆骨'
   	 		},{
   	 			'id':12,
   	 			'name':'鸡爪'
   	 		}]
   	 },{
   	 		id:2,
   	 		name:'精致糕点',
   	 		count:6,
   	 		twodata:[{
   	 			'id':13,
   	 			'name':'羔羊排骨一条'
   	 		},{
   	 			'id':14,
   	 			'name':'微辣'
   	 		}]
   	 },{
   	 		id:3,
   	 		name:'全球美食烘培原料',
   	 		count:12,
   	 		twodata:[{
   	 			'id':15,
   	 			'name':'秋刀鱼'
   	 		},{
   	 			'id':16,
   	 			'name':'锡箔纸金针菇'
   	 		}]
   	 }],
   	 
   	 notkeylist:[{
   	 			'id':13,
   	 			'name':'羔羊排骨一条'
   	 	},{
   	 			'id':14,
   	 			'name':'微辣'
   	 }],
   	 
   	 usekeylist:[{
   	 			'id':15,
   	 			'name':'秋刀鱼'
   	 	},{
   	 			'id':16,
   	 			'name':'锡箔纸金针菇'
   	 	}],
       objectArray: [
         { id: 5, unique: 'unique_5' },
         { id: 4, unique: 'unique_4' },
         { id: 3, unique: 'unique_3' },
         { id: 2, unique: 'unique_2' },
         { id: 1, unique: 'unique_1' },
         { id: 0, unique: 'unique_0' },
       ],
       numberArray: [1, 2, 3, 4]
		
  },
  onLoad: function () {
   
   
   
  },
  switch: function (e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function (e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function (e) {
    this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  },
  
  notkey_addnewdata:function (){
  	
  	//要增加的数组
  	var newarray = [{
  			id:6,
  			name:'向前增加数据--'+new Date().getTime() ,
  			count:89
  	}];
  	
	
    // this.data.notkeylist = newarray.concat(this.data.notkeylist);
    this.data.notkeylist = this.data.notkeylist.concat(newarray);
	

  	this.setData({
  		'notkeylist':	this.data.notkeylist
  	});
  	
  },
  userkey_id:100,
  usekey_addnewdata:function (){
		
		var self = this;
		
  	self.userkey_id++;
  	//要增加的数组
  	var newarray = [{
  			id:self.userkey_id,
  			name:'向前增加数据--'+new Date().getTime() ,
  			count:89
  	}];
  	
	
		// this.data.usekeylist = newarray.concat(this.data.usekeylist);
    this.data.usekeylist = this.data.usekeylist.concat(newarray);
    
	

  	this.setData({
  		'usekeylist':	this.data.usekeylist
  	});
  	
  }
})
