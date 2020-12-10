import { OUTPUT_FOLDER_PATH } from '../constants/paths';

const fs = require('fs').promises;

fs.rmdir(OUTPUT_FOLDER_PATH, { recursive: true })
    .then(() => console.log('Output directory cleared!'));
