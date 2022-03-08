import { Request, Response } from 'express';
import { ProfileUserService } from '../services/ProfileUserService';

class ProfileUserController {
  async handle(request: Request, respose: Response) {
    const { user_id } = request;

    const profileUserService = new ProfileUserService();

    const result = await profileUserService.execute(user_id);

    return respose.json(result);
  }
}

export { ProfileUserController };
