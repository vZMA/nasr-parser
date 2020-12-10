import _last from 'lodash/last';

/**
 * Convert a singular northing OR easting value NASR source format to .sct2 coordinate format
 * NOTE: To convert a paired lat/lon, use convertCoordinatesToSct2
 *
 * @function _convertCoordinateToSct2
 * @param {string} lat - latitude OR longitude, in NASR source format: '41-29-20.26N' or '084-39-22.54W'
 * @returns {string} latitude in shape of *.sct2 format: 'N41.29.20.26' or 'W084.39.22.54'
 * @private
 */
function _convertCoordinateToSct2(latOrLon) {
    const directionCharacter = _last(latOrLon);
    const coordinateWithoutDirectionCharacter = latOrLon.substr(0, latOrLon.length - 1);
    const degreeMinuteSecond = coordinateWithoutDirectionCharacter.replaceAll('-', '.');

    return `${directionCharacter}${degreeMinuteSecond}`;
}

/**
 * Convert a coordinate PAIR from NASR source format to .sct2 coordinate format
 *
 * @function convertCoordinatesToSct2
 * @param {string} lat - latitude, in NASR source format: '41-29-20.26N'
 * @param {string} lon - longitude, in NASR source format: '084-39-22.54W'
 * @returns {array<string>} lat/lon coordinate pair in *.sct2 format: ['N41.29.20.26', 'W084.39.22.54']
 */
export function convertCoordinatesToSct2(lat, lon) {
    const convertedLat = _convertCoordinateToSct2(lat);
    const convertedLon = _convertCoordinateToSct2(lon);
    const convertedPair = [convertedLat, convertedLon];

    return convertedPair;
}