import { createNodeRequestHandler } from '@angular/ssr/node';
import { join } from 'node:path';

export default createNodeRequestHandler({
  distFolder: join(process.cwd(), 'dist/neuron-ops/browser'),
});

