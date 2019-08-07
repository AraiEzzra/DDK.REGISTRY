import { WORKSPACE, getConfig, ConfigSchema } from './config';
import { IRewardCalculator, initRewardCalculator } from './util/reward';

export * from './config';

export class DDKRegistry {
    private _config: ConfigSchema;
    private _rewardCalculator: IRewardCalculator;

    get config() {
        return this._config;
    }

    get rewardCalculator() {
        return this._rewardCalculator;
    }

    initialize(workspace: WORKSPACE = WORKSPACE.MAINNET) {
        this._config = getConfig(workspace);
        this._rewardCalculator = initRewardCalculator(this._config);
    }
}

const DDK = new DDKRegistry();

export default DDK;
