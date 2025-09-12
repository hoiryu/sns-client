import { handlerPost } from '~mocks/handlers/post';
import { handlerUser } from '~mocks/handlers/user';

export const handlers = handlerUser.concat(handlerPost);
