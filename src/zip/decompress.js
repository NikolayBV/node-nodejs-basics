import {createUnzip} from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';

const decompress = async () => {
    const inputFile = createReadStream('files/archive.gz')
    const outputFile = createWriteStream('files/fileToCompress.txt')
    inputFile.pipe(createUnzip()).pipe(outputFile);
};

await decompress();
