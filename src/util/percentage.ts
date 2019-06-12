import { TOTAL_PERCENTAGE } from '../const';

export const getWholePercent = (obtained: number, total: number): number => {
    return obtained / total * TOTAL_PERCENTAGE;
};
