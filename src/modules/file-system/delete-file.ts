import fs from 'fs';
import path from 'path';
import env from '../../infra/config/env';
import { validateFile } from './validate-file';

export const deleteFile = async (filename: string) => {
  if ((await validateFile(filename))) {
    return fs.unlinkSync(path.join(env.DATA_DIRECTORY, filename));
  }
};
