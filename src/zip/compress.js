import {createGzip} from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';

const compress = async () => {
    const source = createReadStream('files/fileToCompress.txt')
    const destination = createWriteStream('files/archive.gz')
    source.pipe(createGzip()).pipe(destination)
};

await compress();
