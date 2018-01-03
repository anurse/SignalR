import path from 'path';

import sourceMaps from 'rollup-plugin-sourcemaps'
import typescript from 'rollup-plugin-typescript2'

export default {
    input: path.join(__dirname, "ts", "index.ts"),
    output: {
        file: path.join(__dirname, "wwwroot", "dist", "signalr-functional-tests.js"),
        format: "iife",
        sourcemap: true,
        banner: "/* @license\r\n" +
            " * Copyright (c) .NET Foundation. All rights reserved.\r\n" +
            " * Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.\r\n" +
            "*/",
        external: [ "@aspnet/signalr", "@aspnet/signalr-protocol-msgpack" ],
        globals: {
            "@aspnet/signalr": "signalR",
            "@aspnet/signalr-protocol-msgpack": "signalR.protocols.msgpack",
        },
    },
    plugins: [
        typescript(),
        sourceMaps()
    ]
}