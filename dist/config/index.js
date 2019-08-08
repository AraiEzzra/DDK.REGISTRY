"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const development_1 = require("./development");
const testnet_1 = require("./testnet");
const mainnet_1 = require("./mainnet");
var WORKSPACE;
(function (WORKSPACE) {
    WORKSPACE[WORKSPACE["DEVELOPMENT"] = 0] = "DEVELOPMENT";
    WORKSPACE[WORKSPACE["TESTNET"] = 1] = "TESTNET";
    WORKSPACE[WORKSPACE["MAINNET"] = 2] = "MAINNET";
})(WORKSPACE = exports.WORKSPACE || (exports.WORKSPACE = {}));
exports.CONFIG_DEFAULT = {
    MAX_REFERRAL_COUNT: 15,
    SALT_LENGTH: 16,
    EPOCH_TIME: 1451667600000,
    SLOT_INTERVAL: 10,
    MAX_VOTES_PER_TRANSACTION: 3,
    FEES: {
        SEND: 0.0001,
        VOTE: 0.0001,
        SIGNATURE: 1000000,
        DELEGATE: 1000000000,
        STAKE: 0.0001,
        SEND_STAKE: 0.001,
    },
};
exports.getConfig = (workspace) => {
    switch (workspace) {
        case WORKSPACE.DEVELOPMENT:
            return Object.assign({}, exports.CONFIG_DEFAULT, development_1.CONFIG_DEVELOPMENT);
        case WORKSPACE.TESTNET:
            return Object.assign({}, exports.CONFIG_DEFAULT, testnet_1.CONFIG_TESTNET);
        case WORKSPACE.MAINNET:
            return Object.assign({}, exports.CONFIG_DEFAULT, mainnet_1.CONFIG_MAINNET);
        default:
            return Object.assign({}, exports.CONFIG_DEFAULT, development_1.CONFIG_DEVELOPMENT);
    }
};
