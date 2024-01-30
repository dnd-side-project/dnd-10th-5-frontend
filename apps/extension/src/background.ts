import { runtime } from 'webextension-polyfill';

console.log('Hello from the background!');

runtime.onInstalled.addListener((details) => {
  console.log('Extension installed:', details);
});
