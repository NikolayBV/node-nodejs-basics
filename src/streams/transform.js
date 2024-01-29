import {Transform} from 'node:stream';
import {stdin, stdout} from 'node:process';

const transform = async () => {
    const reverseStdIn = new Transform({
        transform(chunk, encoding, callback) {
            stdin.on('data', (args) => {
                console.log(args)
                const dataTransform = args.toString().split('').reverse().join('');
                stdout.write(dataTransform)
            })
            callback()
        }
    })
    reverseStdIn.write(JSON.stringify(stdin));
    reverseStdIn.end();
};

await transform();
