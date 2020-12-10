import path from 'path';

const INPUT_FOLDER = './data-in/';
const OUTPUT_FOLDER = './data-out/';

export const PATH = {
    INPUT_FOLDER,
    OUTPUT_FOLDER,
    AIRWAY_INPUT: path.join(INPUT_FOLDER, 'AWY.txt'),
    AIRWAY_OUTPUT: path.join(OUTPUT_FOLDER, 'awy.txt')
};
