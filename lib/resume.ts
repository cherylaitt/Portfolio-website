import fs from 'fs';
import path from 'path';
import { profile } from './profile';

export function isResumeAvailable(): boolean {
  return fs.existsSync(path.join(process.cwd(), 'public', profile.resumePath));
}
