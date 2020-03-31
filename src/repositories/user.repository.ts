import { getManager } from "typeorm";
import { injectable } from "inversify";
import { User } from './../entities/user.entity';
import { IUserRepository } from './iuser.repository';

/**
 * User Repository
 */
@injectable()
export class UserRepository implements IUserRepository {
    /**
     * Finds all
     * @returns Promise<User[]>  
     */
    findAll() {
        return getManager().getRepository(User).find();
    }

    /**
     * Finds by id
     * @param id 
     * @returns Promise<User> 
     */
    findById(id : number) {
        return getManager().getRepository(User).findOne(id);
    }

    /**
     * Creates user repository
     * @param user 
     * @returns Promise<User> 
     */
    create(user : User) {
        return getManager().getRepository(User).save(user);
    }

    /**
     * Updates user repository
     * @param id 
     * @param user 
     * @returns Promise<UpdateResult> 
     */
    update(id : number, user : User) {
       return getManager().getRepository(User).update(id, user);
    }

    /**
     * Deletes user repository
     * @param id 
     * @returns Promise<DeleteResult> 
     */
    delete(id : number) {
        return getManager().getRepository(User).delete(id);
    }
}