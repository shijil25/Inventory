import { UserDTO } from './../dto/index';
import { injectable } from 'inversify';
import { User } from '../../data/entities/index';
import { IEntityDataMapper } from '../interfaces/index';

@injectable()
export class UserDataMapper implements IEntityDataMapper<UserDTO, User> {
    mapToDomain(entity: User): UserDTO {
        let userDto = new UserDTO(entity.UserId, entity.LastName, entity.FirstName, entity.UserType, entity.Email, entity.UserName, entity.Password);
        return userDto;
    }
    mapToEntity(domain: UserDTO): User {
        let user = new User();
        if (domain.UserId > 0) {
            user.UserId = domain.UserId;
        }
        user.Email = domain.Email;
        user.FirstName = domain.FirstName;
        user.LastName = domain.LastName;
        user.Password = domain.Password;
        user.UserName = domain.UserName;
        user.UserType = domain.UserType;
        return user;
    }
}