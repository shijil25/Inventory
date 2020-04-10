import { inject, injectable } from 'inversify';
import { ResponseData, Response, UserDTO } from './../dto/index';
import { IUserRepository } from './../../data/interfaces/index';
import { User } from '../../data/entities/index';
import { IEntityDataMapper, IUserService } from '../interfaces/index';
import TYPES from '../../infrastructure/ioc/types';

@injectable()
export class UserService implements IUserService {

    private _userRepository: IUserRepository;
    private _userDataMapper: IEntityDataMapper<UserDTO, User>;

    constructor(@inject(TYPES.IUserRepository) userRepository: IUserRepository,
        @inject(TYPES.IUserDataMapper) userDataMapper: IEntityDataMapper<UserDTO, User>) {
        this._userRepository = userRepository;
        this._userDataMapper = userDataMapper;
    }

    async findAll(): Promise<ResponseData<UserDTO[]>> {
        let users = await this._userRepository.findAll();
        let userDtos = users ? users.map(user => this._userDataMapper.mapToDomain(user)) : null;
        let response = new ResponseData<UserDTO[]>();
        response.Data = userDtos;
        response.ErrorMessage = userDtos ? null : 'No Users Found';
        response.IsSuccess = !!userDtos;
        return response;
    }

    async findById(id: number): Promise<ResponseData<UserDTO>> {
        let user = await this._userRepository.findById(id);
        let userDto = this._userDataMapper.mapToDomain(user);
        let response = new ResponseData<UserDTO>();
        response.Data = userDto;
        response.ErrorMessage = userDto ? null : 'No User Found';
        response.IsSuccess = !!userDto;
        return response;
    }

    async create(userDto: UserDTO): Promise<ResponseData<UserDTO>> {
        let userEntity = this._userDataMapper.mapToEntity(userDto);
        let user = await this._userRepository.createUser(userEntity);
        let newUser = this._userDataMapper.mapToDomain(user);
        let response = new ResponseData<UserDTO>();
        response.Data = newUser;
        response.ErrorMessage = newUser ? null : 'Something went wrong';
        response.IsSuccess = !!newUser;
        return response;
    }

    async update(id: number, userDto: UserDTO): Promise<ResponseData<UserDTO>> {
        let response = new ResponseData<UserDTO>();
        let userEntity = this._userDataMapper.mapToEntity(userDto);
        let result = await this._userRepository.update(id, userEntity);
        if (result) {
            let user = await this._userRepository.findById(id);
            let newUser = this._userDataMapper.mapToDomain(user);
            response.Data = newUser;
            response.IsSuccess = true;
        } else {
            response.ErrorMessage = 'Something went wrong';
            response.IsSuccess = false;
        }
        return response;
    }

    async delete(id: number): Promise<Response> {
        let result = await this._userRepository.delete(id);
        let response = new Response();
        if (result) {
            response.IsSuccess = true;
        } else {
            response.ErrorMessage = 'Something went wrong';
            response.IsSuccess = false;
        }
        return response;
    }

}