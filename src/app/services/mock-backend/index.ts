import { setupWorker } from 'msw/browser';

import { branchesHandlers } from './branches.handler';
import { productHandlers } from './product.handler';

const worker = setupWorker(...productHandlers, ...branchesHandlers);
worker.start({
  onUnhandledRequest: 'warn',
});
console.log('msw started');
export { worker };