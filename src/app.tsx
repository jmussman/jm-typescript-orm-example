// app/app.jsx
// Copyright © 2017 Joel A. Mussman. All rights reserved.
// This file is part of the TypeScript ORM Example.
//
// The TypeScript ORM Example is free software: you can redistribute it and/or modify it under
// the terms of the GNU Lesser General Public License as published by the Free Software
// Foundation, version 3.
//
// The TypeScript ORM Example is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
// PURPOSE.  See the GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License along with the TypeScript
// ORM Example.  If not, see <http://www.gnu.org/licenses/>.
//
// This is the application entry point.
//

import User from './data/User'

// Turn JSON into an object, and the object into an entity.

let userJSON: string = '{ "_id": "507f1f77bcf86cd799439011", "firstName": "John", "lastName": "Henry", "password": null }'

console.log('\n userJSON:', userJSON)

let userData: any = JSON.parse(userJSON)
let userEntity: User = new User(userData)

console.log('\n userEntity:', userEntity)

// Turn an entity into JSON.

userEntity.password = "rEK1ecacw.7.c"
let newUserData: string = JSON.stringify(userEntity)

console.log('\n newUserData:', newUserData)