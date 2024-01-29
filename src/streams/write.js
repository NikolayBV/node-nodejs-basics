import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const write = async () => {
    const destination = createWriteStream('src/streams/files/fileToWrite.txt');
    stdin.on('data', (args) => {
        console.log(args)
        destination.write(args)
    })

};

await write();
