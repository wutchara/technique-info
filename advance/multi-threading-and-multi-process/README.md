# Multi threading && multiple process

> Node.js is a single threaded language which in background uses multiple threads to execute asynchronous code.

see the example on: `example-1-multi-process`

```bash
loadtest http://127.0.0.1:3000/endpoint -c 5 -n 10
```

REF:

- https://itnext.io/multi-threading-and-multi-process-in-node-js-ffa5bb5cde98
- https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/
