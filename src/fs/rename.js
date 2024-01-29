import {constants} from 'node:fs'
import { access, rename as reName } from 'node:fs/promises';

const rename = async () => {
    try {
        await access('src/fs/files/wrongFilename.txt', constants.F_OK)
        try {
            await access('src/fs/files/properFilename.md', constants.F_OK)
            throw new Error('FS operation failed')
        } catch (e) {
            await reName('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md')
        }
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

await rename();
