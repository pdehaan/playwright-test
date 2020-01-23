#!/usr/bin/env node

const pw = require("playwright");
const {name, version} = require("playwright/package.json");

console.log(`${name}@${version}`);
for (const device of pw.devices) {
  console.log(`${device.name.padEnd(30, ".")} ${JSON.stringify(device.viewport)}`);
}
