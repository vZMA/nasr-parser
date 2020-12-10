import { startsWith } from '../utilities/parserHelpers';

export default function parseAirwayFixes(airwayNasr) {
    const lines = airwayNasr.split('\n');
    const airwayFixLines = lines.filter((line) => startsWith(line, ['AWY2']));
    const airwayFixes = airwayFixLines.map((line) => {
        return {
            id: line.substr(4, 5).trim(),
            sequence: line.substr(10, 5).trim(),
            navaidLongNameOrFixId: line.substr(15, 30).trim(),
            fixType: line.substr(45, 19).trim(),
            isNamedFix: line.substr(64, 15).trim() === 'FIX',
            state: line.substr(79, 2).trim(),
            lat: line.substr(83, 14).trim(),
            lon: line.substr(97, 14).trim(),
            navaidId: line.substr(116, 4).trim()
        };
    });

    const sortedByAirwayId = airwayFixes.sort((a, b) => {
        if (a.id > b.id) return 1;
        if (a.id < b.id) return -1
        return 0;
    });

    const sortedByAirwayIdAndSequenced = sortedByAirwayId.sort((a, b) => {
        if (a.id !== b.id) return 0;
        if (+a.sequence > +b.sequence) return 1;
        if (+b.sequence > +a.sequence) return -1;

        // sequence number is the same...
        // if fixname is also the same...
        if (a.navaidLongNameOrFixId === b.navaidLongNameOrFixId) return 0;
        // else two DIFFERENT elements are supposed to be at the same point along an airway
        console.info(`Unable to sort ${[a.id, a.sequence]} and ${[b.id, b.sequence]}; ` +
            `if this error repeats, there are probably multiple ${a.id} airways!`);
        return 0;
    });

    // console.log(sortedByAirwayIdAndSequenced.map(fix => [fix.id, fix.sequence]));

    // console.log(sortedByAirwayIdAndSequenced.filter((fix) => fix.id === 'V11'));

    return sortedByAirwayIdAndSequenced;
}
