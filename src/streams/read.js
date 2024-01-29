import { createReadStream } from 'node:fs';
import {stdout} from 'node:process';

const read = async () => {
   const stream = createReadStream('src/streams/files/fileToRead.txt')
    stream.on("data", function(chunk){
        stdout.write(chunk.toString());
    });
};

await read();
