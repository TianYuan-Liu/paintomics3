/*
* (C) Copyright 2016 SLU Global Bioinformatics Centre, SLU
* (http://sgbc.slu.se) and the B3Africa Project (http://www.b3africa.org/).
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
*     Rafael Hernandez de Diego <rafahdediego@gmail.com>
*     Erik Bongcam-Rudloff
*     and others.
*
* THIS FILE CONTAINS THE FOLLOWING MODULE DECLARATION
*
*/
(function(){
	var app = angular.module('admin.directives.admin-directives', []);

	app.directive("userRow", function() {
		return {
			controller: "UserController",
			controllerAs: "controller",
			templateUrl: 'static/app/admin/templates/user-row.tpl.html'
		};
	});

	app.directive("filesRow", function() {
		return {
			controller: "FilesController",
			controllerAs: "controller",
			templateUrl: 'static/app/admin/templates/file-row.tpl.html'
		};
	});

	app.directive("databaseRow", function() {
		return {
			controller: "DatabasesController",
			controllerAs: "controller",
			templateUrl: 'static/app/admin/templates/database-row.tpl.html'
		};
	});
})();
