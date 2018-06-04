var reserveData = new Vue({
	el:"#main",
	data:{
        timeActive:[],
        res: {
            extend: {
                dayTimeAllow: [
                    {
                     times: []
                    }
                ],
            },
        },
        
    },
    mounted: function(){
    	this.getData();
    },
    methods:{
    	getData: function(){
    		var res = {
                        "code": 100,
                        "msg": "处理成功",
                        "extend": {
                            "dayTimeAllow": [
                                {
                                    "day": "2018-05-18",
                                    "times": [
                                        {
                                            "time": "11:00",
                                            "allow": 1
                                        },
                                        {
                                            "time": "12:00",
                                            "allow": 0
                                        },
                                        {
                                            "time": "13:00",
                                            "allow": 1
                                        },
                                        {
                                            "time": "14:00",
                                            "allow": 0
                                        },
                                        {
                                            "time": "15:00",
                                            "allow": 1
                                        },
                                        {
                                            "time": "16:00",
                                            "allow": 1
                                        }
                                    ]
                                },
                                {
                                    "day": "2018-05-25",
                                    "times": [
                                        {
                                            "time": "11:00",
                                            "allow": 0
                                        },
                                        {
                                            "time": "11:00",
                                            "allow": 1
                                        },
                                        {
                                            "time": "11:00",
                                            "allow": 0
                                        },
                                        {
                                            "time": "11:00",
                                            "allow": 1
                                        },
                                        {
                                            "time": "11:00",
                                            "allow": 1
                                        },
                                        {
                                            "time": "11:00",
                                            "allow": 1
                                        }
                                    ]
                                }
                            ]
                        }
                    };
    		res.extend.dayTimeAllow.forEach(function(item,index){
    			if(index == 0){
                    item.selected = true;
                }else {
                    item.selected = false;
                }
    		});
    		this.res = res;
            this.timeActive = res.extend.dayTimeAllow[0].times;
    	},
    	clickDay: function(item){
    		this.res.extend.dayTimeAllow.forEach(function(item){
                item.selected = false
            })
    		item.selected=true;
    		this.timeActive=item.times;
        },
        clickTime: function(i){
        	 if(i.allow==1){
        	 	alert("不能选择")
        	 }else{
        	 	i.allow=1
        	 }
        }
        

    }	
})