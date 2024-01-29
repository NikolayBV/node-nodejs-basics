import {parentPort, workerData,} from 'node:worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    const { input } = workerData;

    const result = nthFibonacci(input);

    parentPort.postMessage({ result });
};

sendResult();
