import fs from 'fs';
import { PATH } from './src/constants/paths';
import parseAirwayFixes from './src/parsers/airwayParser';
import { convertAllAirwaysToSct2 } from './src/utilities/outputHelpers';

// Airways
const airwayNasr = fs.readFileSync(PATH.AIRWAY_INPUT, 'utf-8');
const airwayFixes = parseAirwayFixes(airwayNasr);
const airwayOutputData = convertAllAirwaysToSct2(airwayFixes).join('\n');
fs.writeFileSync(PATH.AIRWAY_OUTPUT, airwayOutputData, 'utf-8');