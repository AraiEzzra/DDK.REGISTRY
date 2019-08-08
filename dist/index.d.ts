import { WORKSPACE, ConfigSchema } from './config';
import { IRewardCalculator } from './util/reward';
export * from './config';
export declare class DDKRegistry {
    private _config;
    private _rewardCalculator;
    readonly config: ConfigSchema;
    readonly rewardCalculator: IRewardCalculator;
    initialize(workspace?: WORKSPACE): void;
}
declare const DDK: DDKRegistry;
export default DDK;
