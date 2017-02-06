/*
* (C) Copyright 2014 The Genomics of Gene Expression Lab, CIPF
* (http://bioinfo.cipf.es/aconesawp) and others.
*
* All rights reserved. This program and the accompanying materials
* are made available under the terms of the GNU Lesser General Public License
* (LGPL) version 3 which accompanies this distribution, and is available at
* http://www.gnu.org/licenses/lgpl.html
*
* This library is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
* Lesser General Public License for more details.
*
* Contributors:
*     Rafael Hernandez de Diego
*     rhernandez@cipf.es
*     Ana Conesa Cegarra
*     aconesa@cipf.es
*
* THIS FILE CONTAINS THE FOLLOWING MODULE DECLARATION
* - users.users.user-list
*
*/
(function(){
	var app = angular.module('users.users.user-list', []);

	app.factory("UserList", ['$rootScope', function($rootScope) {
		var users = [];
		var filters = [];
		var old = new Date(0);
		return {
			getUsers: function() {
				return users;
			},
			setUsers: function(_users) {
				users = this.adaptUsersInformation(_users);
				old = new Date();
				return this;
			},
			updateUsers: function(newUsers, soft) {
				var found, nElems = users.length;
				for(var i in newUsers){
					found= false;
					for(var j=0; j < nElems; j++){
						if(newUsers[i].name === users[j].name){
							found= true;
							if(soft === true){
								users[j].last_version = newUsers[i].version;
								users[j].secondary_website = newUsers[i].website;
							}else{
								users[j] = this.adaptUserInformation(newUsers[i]);
							}
							break;
						}
					}
					if(!found){
						if(soft === true){
							newUsers[i].last_version = newUsers[i].version;
							newUsers[i].secondary_website = newUsers[i].website;
							delete newUsers[i].version;
							delete newUsers[i].website;
						}
						users.push(this.adaptUserInformation(newUsers[i]));
					}
				}
				return this;
			},
			getUser: function(user_id) {
				for(var i in users){
					if(users[i].id === user_id){
						return users[i];
					}
				}
				return null;
			},
			addUser: function(user) {
				users.push(this.adaptUserInformation(user));
				return this;
			},
			deleteUser: function(user_id) {
				for(var i in users){
					if(users[i].id === user_id){
						users.splice(i,1);
						return users;
					}
				}
				return null;
			},
			adaptUsersInformation: function(users) {
				for(var i in users){
					this.adaptUserInformation(users[i]);
				}
				return users;
			},
			adaptUserInformation: function(user){
				if(user.website !== undefined && user.website.indexOf("<HOST_NAME>") !== -1){
					user.website = user.website.replace("<HOST_NAME>", window.location.protocol + "//" + window.location.hostname);
				}
				return user;
			},
			getFilters: function() {
				return filters;
			},
			setFilters: function(_filters) {
				filters = _filters;
				return this;
			},
			removeFilter: function(_filter){
				var pos = filters.indexOf(_filter);
				if(pos !== -1){
					filters.splice(pos,1);
				}
				return this;
			},
			getOld: function(){
				return (new Date() - old)/120000;
			}
		};
	}]);
})();
