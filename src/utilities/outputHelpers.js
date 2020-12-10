const { convertCoordinatesToSct2 } = require("./conversionHelpers");

export function convertAllAirwaysToSct2(airwayFixes) {
    const outputLines = [];

    for (let i = 0; i < airwayFixes.length - 1; i++) {
        const currentFix = airwayFixes[i];
        let nextIndex = i + 1;
        let nextFix = airwayFixes[nextIndex];
        
        if (currentFix.id !== nextFix.id) {
            continue;
        }

        if (currentFix.lat === '' || currentFix.lon === '') {
            continue;
        }

        while ((nextFix.lat === '' || nextFix.lon === '') && nextIndex < airwayFixes.length) {
            nextIndex++;
            nextFix = airwayFixes[nextIndex];
        }

        if (nextIndex >= airwayFixes.length) {
            break;
        }

        const lineLabel = currentFix.id;
        const currentCoordinate = convertCoordinatesToSct2(currentFix.lat, currentFix.lon).join(' ');
        const nextCoordinate = convertCoordinatesToSct2(nextFix.lat, nextFix.lon).join(' ');
        const outputLine = `${lineLabel} ${currentCoordinate} ${nextCoordinate}`;

        outputLines.push(outputLine);
    }

    return outputLines;
}