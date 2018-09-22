import { Injectable } from '@angular/core';
import { MongoService } from 'wacom';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class UserService {
	public users;
	public avatarUrl = "/api/user/default.png";
	public data = {};
	public is = {};
	update(){
		this.mongo.updateAll('user', this, {
			fields: 'name birth skills data'
		});
	}
	changeIs(user){
		this.mongo.updateAll('user', user, {
			fields: 'is _id',
			name: 'super'
		});
		console.log(user.is);
	}
	constructor(private mongo: MongoService, 
		private http: HttpClient) {
		this.users = mongo.get('user',{
			replace:{
				data:mongo.beObj,
				is:mongo.beObj,
				created: mongo.getCreated
			},
			groups: 'email',
			sort: mongo.sortAscBoolean({
				field: 'birth',
				next: mongo.sortAscString({
					field:'email',
					next: mongo.sortAscId()
				})
			})
		}, (arr, obj, name, resp)=>{
			console.log(obj);
			console.log(arr);

		});
		http.get('/api/user/me').subscribe(resp => {
			for (var key in resp) {
				this[key] = resp[key];
			}
		});
	}
}