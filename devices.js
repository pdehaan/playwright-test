#!/usr/bin/env node

const pw = require("playwright");
const { name, version } = require("playwright/package.json");

console.log(`${name}@${version}`);
for (const device of pw.devices) {
  const name = (device.name + " ").padEnd(32, ".");
  const viewport = JSON.stringify(device.viewport);
  console.log(`${name} ${viewport}`);
}
