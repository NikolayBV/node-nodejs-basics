import {constants} from 'node:fs'
import { access, rm } from 'node:fs/promises';

const remove = async () => {
    try {
        await access('src/fs/files/fileToRemove.txt', constants.F_OK)
        await rm('src/fs/files/fileToRemove.txt')
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

await remove();
