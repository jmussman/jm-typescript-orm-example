// data/User.ts
// Copyright © 2017 Smallrock Internet Services, Inc. All rights reserved.
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
// This class implements the User entity.
//

import Entity from './Entity'

class User extends Entity {

    private __id: string
    private _firstName: string
    private _lastName: string
    private _password: string

    public constructor(source: any) {

        super(source)
    }

    public get _id(): string {

        return this.__id
    }

    public set _id(value: string) {

        this.__id = value
    }

    public get firstName(): string {

        return this._firstName
    }

    public set firstName(value: string) {

        this._firstName = value
    }

    public get lastName(): string {

        return this._lastName
    }

    public set lastName(value: string) {

        this._lastName = value
    }

    public get password(): string {

        return this._password
    }

    public set password(value: string) {

        this._password = value
    }
}

export default User