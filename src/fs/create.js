import { writeFile, access, constants } from 'node:fs';

const create = async () => {
    const file = 'src/fs/files/fresh.txt';
    const data = 'I am fresh and young';

   access(file, constants.F_OK, (err) => {
       if (err) {
           writeFile(file, data, (_) => console.log('File has been created'))
       } else {
           throw new Error('FS operation failed')
       }
   })
};

await create();
