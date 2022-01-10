import { buildConfig } from 'payload/config';
import path from 'path';
import Examples from './collections/Examples';
import Users from './collections/Users';

export const serverURL = 'http://localhost:3000'

export default buildConfig({
  serverURL,
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    // Add Collections here
    Examples,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
});
