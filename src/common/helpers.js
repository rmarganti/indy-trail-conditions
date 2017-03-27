import appConfig from '../config/app';
import trailSystems from '../config/trailSystems';

/**
 * Get the User's configured visible trails, using defaults as a fallback
 *
 * @return {Array}
 */
export const getVisibleTrailSystems = () => {
    const savedVisibleTrailSystems = window.localStorage.getItem('visibleTrailSystems');

    return savedVisibleTrailSystems
        ? JSON.parse(savedVisibleTrailSystems)
        : appConfig.defaulTrails;
};

/**
 * Save the visible trail systems and order to local storage
 *
 * @param  {Array}  keys
 */
export const saveVisibleTrailSystems = (keys = []) => {
    window.localStorage.setItem('visibleTrailSystems', JSON.stringify(keys));
};

/**
 * Get an array of trails with the given keys
 *
 * @param  {Array}  keys
 * @return {Array}
 */
export const getTrailSystemsByKeys = (keys = []) =>
    keys.map(key => trailSystems.find(trailSystem => trailSystem.key === key));
