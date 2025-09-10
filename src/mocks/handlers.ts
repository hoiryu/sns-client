import { handlerPost } from '~mocks/handlers/post';
import { handlerUser } from '~mocks/handlers/user';
import PostService from '~services/mocks/postService';
import UserService from '~services/mocks/userService';

export const userService = new UserService(10);
export const postService = new PostService(userService, 60);

export const handlers = handlerUser.concat(handlerPost);
