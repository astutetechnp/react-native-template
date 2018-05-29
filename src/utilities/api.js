var API_URL = "http://stage.respectinc.net:1337";
//var API_URL = "https://api.respectinc.net";


var api = {
	async login(email,password){
		var url = API_URL+'/auth/signin';

		return fetch(url, {
  		method: 'POST',
  			body: JSON.stringify({
    			email: email,
    			password: password,
  			})
		}).then((res) => res.json())
		  .then((resJson) => {
		  	//alert("Result :"+JSON.stringify(resJson))
		  	return resJson
		  }).catch((error) => {
		  	console.error(error);
		  }); 
	},

	async getPasswordResetToken(email){
		var url = API_URL+'/auth/sendResetEmail';

		return fetch(url, {
  		method: 'PUT',
  			body: JSON.stringify({
    			myEmail: email
  			})
		}).then((res) => res.json())
		  .then((resJson) => {
		  	//alert("Result :"+JSON.stringify(resJson))
		  	return resJson
		  }).catch((error) => {
		  	console.error(error);
		  }); 


	},

	async resetPassword(token,password){
		var url = API_URL+'/auth/resetPassword/'+token;

		return fetch(url, {
  		method: 'POST',
  			body: JSON.stringify({
    			password: password
  			})
		}).then((res) => res.json())
		  .then((resJson) => {
		  	//alert("Result :"+JSON.stringify(resJson))
		  	return resJson
		  }).catch((error) => {
		  	console.error(error);
		  }); 

	},


	//Get paginated page 
	async getPaginatedMerchant(userId,token){
		var url = API_URL+'/page/'+userId+'/getUnrespectedPages/1';

		return fetch(url, {  
  				method: 'GET',
  				headers: {
    				'Authorization': 'JWT '+token 				
    			}
  				
		}).then((res) => res.json())
		  .then((resJson) => {
		  	//alert("Result :"+JSON.stringify(resJson.objects))
		  	return resJson.objects;
		  }).catch((error) => {
		  	console.error(error);
		  });

	},


	//Get paginated feed 
	async getPaginatedFeed(userId,token,limit){
		var url = API_URL+'/feed/'+userId+'/allFeed/'+limit;

		return fetch(url, {  
  				method: 'GET',
  				headers: {
    				'Authorization': 'JWT '+token 				
    			}
  				
		}).then((res) => res.json())
		  .then((resJson) => {
		  	//alert("Result :"+JSON.stringify(resJson))
		  	return resJson.objects;
		  }).catch((error) => {
		  	console.error(error);
		  });

	},
	
	async getUserFeed(userId,token,limit){
		var url = API_URL+'/feed/getFeedByCreatorId/'+userId+'/'+limit;
		console.log(url);
		return fetch(url, {  
  				method: 'GET',
  				headers: {
    				'Authorization': 'JWT '+token 				
    			}
  				
		}).then((res) => res.json())
		  .then((resJson) => {
		  	//alert("Result :"+JSON.stringify(resJson.objects))
		  	return resJson.objects;
		  }).catch((error) => {
		  	console.error(error);
		  });
	},

	//Like feed
	async likeFeed(feedId,userId,token){
		var url = API_URL+'/feed/'+feedId+'/like/'+userId;
		//console.log(comment);
		return fetch(url, {
  			method: 'PUT',
  			headers: {
    				'Authorization': 'JWT '+token 				
    			}
			}).then((res) => res.json())
		  	.then((resJson) => {
		  		//console.log('Response JSON '+resJson);
		  		//alert("Result :"+JSON.stringify(resJson))
		  		return resJson;
		  	}).catch((error) => {
		  		//console.log('Error posting comment to feed');
		  		console.error(error);
		});
	},


	//Post comment on feed
	async postComment(feedId,commenterId,comment,token){
		var url = API_URL+'/feed/'+feedId+'/comment/'+commenterId;
		//console.log(comment);
		return fetch(url, {
  			method: 'POST',
  			headers: {
    				'Authorization': 'JWT '+token 				
    			},
  				body: JSON.stringify({
    				comments: comment
  				})
			}).then((res) => res.json())
		  	.then((resJson) => {
		  		//console.log('Response JSON '+resJson);
		  		//alert("Result :"+JSON.stringify(resJson))
		  		return resJson.object
		  	}).catch((error) => {
		  		//console.log('Error posting comment to feed');
		  		console.error(error);
		});
	},


	async getUserData(userId,token){
		var url = API_URL+'/user/'+userId;
		
		return fetch(url, {  
  				method: 'GET',
  				headers: {
    				'Authorization': 'JWT '+token 				
    			}
  				
		}).then((res) => res.json())
		  .then((resJson) => {
		  	//alert("Result :"+JSON.stringify(resJson))
		  	return resJson.object;
		  }).catch((error) => {
		  	console.error(error);
		  });
	},

	/*---------------- nPay -----------------------*/
	async startTxn(token,userId, amount, description, txnType, mobileNo, action){

		var url = 'https://api.respectinc.net/Txn/startTxn';

		return fetch(url, {  
  				method: 'POST',
  				headers: {
    				'Authorization': 'JWT '+token 				
    			},
  				body: JSON.stringify({
    				userId: userId,
    				amount: amount,
    				description: description,
    				txnType: txnType,
    				mobileNo: mobileNo,
    				action: action
  				})
  				
		}).then((res) => res.json())
		  .then((resJson) => {
		  	//alert("Result :"+JSON.stringify(resJson))
		  	return resJson;
		  }).catch((error) => {
		  	console.error(error);
		  });

	},

	async nPayForIOS(token, merchantTxnId, processId, amount, description){
		//alert('Loading');
		var url = 'https://api.respectinc.net/Txn/nPayForIOS?merchantTxnId='+merchantTxnId+'&processId='+processId+'&amount='+amount+'&description='+description;//API_URL+'/topUpServiceList';
		//alert(url);
		return fetch(url, {  
  				method: 'GET',
  				headers: {
    				'Authorization': 'JWT '+token 				
    			}			
		}).then((res) => res.text())
		  .then((resHTML) => {
		  	//alert(resHTML);
		  	return resHTML;
		  }).catch((error) => {
		  	//alert(error);
		  	console.error(error);
		  });

	},


	/*------------------ TOP UP ------------------*/
	async getTopUpServiceList(token){
		//alert('Loading');
		var url = 'https://api.respectinc.net/topUpServiceList';//API_URL+'/topUpServiceList';

		return fetch(url, {  
  				method: 'GET',
  				headers: {
    				'Authorization': 'JWT '+token 				
    			}
  				
		}).then((res) => res.json())
		  .then((resJson) => {
		  	//alert("Result :"+JSON.stringify(resJson))
		  	return resJson.objects;
		  }).catch((error) => {
		  	//alert(error);
		  	console.error(error);
		  });

	},

	/*------------- Chat ----------------*/
	async addChatMessage(token,id,text){
		var url = API_URL+'/chat';
		
		return fetch(url, {
  			method: 'POST',
  			headers: {
    				'Authorization': 'JWT '+token 				
    			},
  				body: JSON.stringify({
    				user: id,
    				text: text
  				})
			}).then((res) => res.json())
		  	.then((resJson) => {
		  		return resJson
		  	}).catch((error) => {
		  		console.error(error);
		});
	},

	async getAllMessage(token){

		var url = API_URL+'/chat';

		return fetch(url, {  
  				method: 'GET',
  				headers: {
    				'Authorization': 'JWT '+token 				
    			}
  				
		}).then((res) => res.json())
		  .then((resJson) => {
		  	//alert("Result :"+JSON.stringify(resJson))
		  	return resJson;
		  }).catch((error) => {
		  	//alert(error);
		  	console.error(error);
		  });
	}



};

module.exports = api;