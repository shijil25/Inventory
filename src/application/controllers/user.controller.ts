import { ILoggerService, IUserService } from '../../core/interfaces/index';
import * as express from 'express';
import { interfaces, controller, httpGet, request, response, httpPost, httpPut, httpDelete } from 'inversify-express-utils';
import { inject } from 'inversify';
import TYPES from '../../infrastructure/ioc/types';
import { UserDTO } from '../../core/dto/index';

/**
 * User Controller
 */
@controller('/users')
export class UserController implements interfaces.Controller {

    private userService: IUserService;
    private loggerService: ILoggerService;

    /**
     * Creates an instance of user controller.
     * @param userService 
     */
    constructor(@inject(TYPES.IUserService) userService: IUserService,
        @inject(TYPES.ILoggerService) loggerService: ILoggerService) {
        this.userService = userService;
        this.loggerService = loggerService;
    }

    /**
     * Https get
     * @param req 
     * @param res 
     */
    @httpGet('/')
    public async getUsers(@request() req: express.Request, @response() res: express.Response) {
        try {
            const result = await this.userService.findAll();
            if (!result.IsSuccess) {
                res.status(404).json(result.ErrorMessage);
            } else {
                res.status(200).json(result.Data);
            }
        } catch (error) {
            console.log(error);
            this.loggerService.logError(JSON.stringify(error));
            res.status(400).json(error);
        }
    }

    /**
     * Https get
     * @param req 
     * @param res 
     */
    @httpGet('/:id')
    public async getUser(@request() req: express.Request, @response() res: express.Response) {
        try {
            const result = await this.userService.findById(+req.params.id);
            if (!result) {
                res.status(404).json(result.ErrorMessage);
            } else {
                res.status(200).json(result.Data);
            }
        } catch (error) {
            this.loggerService.logError(JSON.stringify(error));
            res.status(400).json(error);
        }
    }

    /**
     * Https post
     * @param req 
     * @param res 
     */
    @httpPost('/')
    public async postUser(@request() req: express.Request, @response() res: express.Response) {
        try {
            let user = new UserDTO(0, req.body.lastName, req.body.firstName, req.body.userType, req.body.email, req.body.userName, req.body.password);
            const result = await this.userService.create(user);
            if (!result.IsSuccess) {
                res.status(400).json(result.ErrorMessage);
            } else {
                res.status(200).json(result.Data);
            }
        } catch (error) {
            this.loggerService.logError(JSON.stringify(error));
            res.status(400).json(error);
        }
    }

    /**
     * Https put
     * @param req 
     * @param res 
     */
    @httpPut('/:id')
    public async putUser(@request() req: express.Request, @response() res: express.Response) {
        try {
            let user = new UserDTO(0, req.body.lastName, req.body.firstName, req.body.userType, req.body.email, req.body.userName, req.body.password);
            const result = await this.userService.update(+req.params.id, user);
            if (result.IsSuccess) {
                res.status(200).json(req.body);
            } else {
                this.loggerService.logError(result.ErrorMessage);
                res.status(400).json(result.ErrorMessage);
            }
        } catch (error) {
            this.loggerService.logError(JSON.stringify(error));
            res.status(400).json(error);
        }
    }

    /**
     * Https delete
     * @param req 
     * @param res 
     */
    @httpDelete('/:id')
    public async deleteUser(@request() req: express.Request, @response() res: express.Response) {
        try {
            const result = await this.userService.delete(+req.params.id);
            if (result.IsSuccess) {
                res.status(200).json('Successfully deleted!');
            } else {
                this.loggerService.logError(result.ErrorMessage);
                res.status(400).json(result.ErrorMessage);
            }
        } catch (error) {
            this.loggerService.logError(JSON.stringify(error));
            res.status(400).json(error);
        }
    }
}