import { CLI } from './classes/Cli.js';

const cli = new CLI();


async function runApp() {
  await cli.mainMenu();  
}

runApp();
