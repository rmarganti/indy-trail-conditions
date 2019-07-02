import appConfig from '../config/app';
import trailSystems, { TrailSystemConfig } from '../config/trailSystems';

/**
 * Get the User's configured visible trails, using defaults as a fallback
 */
export const getVisibleTrailSystems = (): string[] => {
    const savedVisibleTrailSystems = window.localStorage.getItem(
        'visibleTrailSystems'
    );

    return savedVisibleTrailSystems
        ? JSON.parse(savedVisibleTrailSystems)
        : appConfig.defaultTrails;
};

/**
 * Save the visible trail systems and order to local storage
 */
export const saveVisibleTrailSystems = (keys: string[] = []) => {
    window.localStorage.setItem('visibleTrailSystems', JSON.stringify(keys));
};

/**
 * Get an array of trails with the given keys
 */
export const getTrailSystemsByKeys = (
    keys: string[] = []
): TrailSystemConfig[] =>
    keys
        .map(key => trailSystems.find(trailSystem => trailSystem.key === key))
        .filter(isTrailSystem);

const isTrailSystem = (
    ts: TrailSystemConfig | undefined
): ts is TrailSystemConfig => typeof ts !== 'undefined';

/**
 * Get all trail systems NOT matching the given keys.
 */
export const getTrailSystemsExcluding = (keys: string[] = []) =>
    trailSystems.filter(trailSystem => !keys.includes(trailSystem.key));
