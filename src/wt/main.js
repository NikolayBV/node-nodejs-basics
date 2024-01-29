import {Worker, workerData} from 'node:worker_threads';

const num = 12;

const performCalculations = async () => {
    const worker = new Worker('./src/wt/worker.js', {
        workerData: { input: num },
    });
    worker.on('message', (message) => {
        console.log(message.result);
    });
};

await performCalculations();
