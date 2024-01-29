import {constants} from 'node:fs'
import { access, readFile } from 'node:fs/promises';

const read = async () => {
    try {
        await access('src/fs/files/fileToRead.txt', constants.F_OK)
        console.log(await readFile('src/fs/files/fileToRead.txt', { encoding: 'utf8' }));
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await read();
