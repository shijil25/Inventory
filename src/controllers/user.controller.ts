import * as express from 'express';
import { interfaces, controller, httpGet, request, response, httpPost, httpPut, httpDelete } from 'inversify-express-utils';
import { inject } from 'inversify';
import TYPES from '../ioc/types';
import { User } from './../entities/user.entity';
import { IUserRepository } from './../repositories/iuser.repository';

/**
 * User Controller
 */
@controller('/users')
export class UserController implements interfaces.Controller {

    private userRepository : IUserRepository;

    /**
     * Creates an instance of user controller.
     * @param userRepository 
     */
    constructor(@inject(TYPES.IUserRepository) userRepository : IUserRepository) {
        this.userRepository = userRepository;
    }

    /**
     * Https get
     * @param req 
     * @param res 
     */
    @httpGet('/')
    public async getUsers(@request() req : express.Request , @response() res : express.Response) {
        try {
            const users = await this.userRepository.findAll();
            if(!users){
                res.status(404).json("No user found");
            } else {
                res.status(200).json(users);
            }
        } catch(error) {
            res.status(400).json(error);
        }
    }

    /**
     * Https get
     * @param req 
     * @param res 
     */
    @httpGet('/:id')
    public async getUser(@request() req : express.Request , @response() res : express.Response) {
        try {
            const user = await this.userRepository.findById(+req.params.id);
            if(!user){
                res.status(404).json("No user found");
            } else {
                res.status(200).json(user);
            }
        } catch(error) {
            res.status(400).json(error);
        }
    }

    /**
     * Https post
     * @param req 
     * @param res 
     */
    @httpPost('/')
    public async postUser(@request() req : express.Request , @response() res : express.Response) {
        try {
            let user = new User();
            user.Email = req.body.email;
            user.FirstName = req.body.firstName;
            user.LastName = req.body.lastName;
            user.Password = req.body.password;
            user.UserName = req.body.userName;
            user.UserType = req.body.userType;

            const users = await this.userRepository.create(user);
            res.status(200).json(users);
        } catch(error) {
            res.status(400).json(error);
        }
    }

    /**
     * Https put
     * @param req 
     * @param res 
     */
    @httpPut('/:id')
    public async putUser(@request() req : express.Request , @response() res : express.Response) {
        try {
            let user = new User();
            user.Email = req.body.email;
            user.FirstName = req.body.firstName;
            user.LastName = req.body.lastName;
            user.Password = req.body.password;
            user.UserName = req.body.userName;
            user.UserType = req.body.userType;

            const result = await this.userRepository.update(+req.params.id, user);
            if(result) {
                res.status(200).json(req.body);
            } else {
                res.status(400).json('Something went wrong');
            }
        } catch(error) {
            res.status(400).json(error);
        }
    }

    /**
     * Https delete
     * @param req 
     * @param res 
     */
    @httpDelete('/:id')
    public async deleteUser(@request() req : express.Request , @response() res : express.Response) {
        try {
            console.log('inside delete');
            const result = await this.userRepository.delete(+req.params.id);
            console.log(result);
            if(result) {
                res.status(200).json('Successfully deleted!');
            } else {
                res.status(400).json('Something went wrong');
            }
        } catch(error) {
            res.status(400).json(error);
        }
    }
}