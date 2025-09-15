import { handlerPost } from '~mocks/handlers/handlerPost';
import { handlerUser } from '~mocks/handlers/handlerUser';

export const handlers = handlerUser.concat(handlerPost);
