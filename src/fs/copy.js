import {access, constants} from 'node:fs'
import { mkdir, cp } from 'node:fs/promises';

const copy = async () => {
    await access('src/fs/files_copy', constants.F_OK, async (err) => {
        if(err?.code === 'ENOENT') {
            await mkdir('src/fs/files_copy')
            await access('src/fs/files', constants.F_OK, async (err) => {
                if (err) {
                    throw new Error('FS operation failed');
                } else {
                    await cp('src/fs/files', 'src/fs/files_copy', {recursive: true})
                }
            })
        } else {
            throw new Error('FS operation failed');
        }
    });
};

await copy();
