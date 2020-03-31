import { User } from './../entities/user.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

/**
 * Iuser repository
 */
export interface IUserRepository {
    findAll : ()=> Promise<User[]>;

    findById : (id : number)=> Promise<User>;

    create : (user : User)=> Promise<User>;

    update : (id: number, user: User)=> Promise<UpdateResult>;

    delete : (id : number)=> Promise<DeleteResult>;
}