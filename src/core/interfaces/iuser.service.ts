import { Response, ResponseData, UserDTO } from './../dto/index';

export interface IUserService {
    findAll : ()=> Promise<ResponseData<UserDTO[]>>;

    findById : (id : number)=> Promise<ResponseData<UserDTO>>;

    create : (userDto : UserDTO)=> Promise<ResponseData<UserDTO>>;

    update : (id: number, userDto : UserDTO)=> Promise<ResponseData<UserDTO>>;

    delete : (id : number)=> Promise<Response>;
}