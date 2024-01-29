import {constants} from 'node:fs'
import { access, readdir } from 'node:fs/promises';

const list = async () => {
    try {
        await access('src/fs/files', constants.F_OK)
        console.log(await readdir('src/fs/files'))
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await list();
