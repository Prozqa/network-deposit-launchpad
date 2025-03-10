export const IS_MAINNET                 = Boolean(process.env.REACT_APP_IS_MAINNET !== 'false');  // If REACT_APP_IS_MAINNET is unset, set it to true by default
export const TESTNET_LAUNCHPAD_NAME     = process.env.REACT_APP_TESTNET_LAUNCHPAD_NAME || 'Pyrmont';

// private vars (or derived from)
export const PORTIS_DAPP_ID             = process.env.REACT_APP_PORTIS_DAPP_ID     || '';
export const INFURA_PROJECT_ID          = process.env.REACT_APP_INFURA_PROJECT_ID  || '';
export const ENABLE_RPC_FEATURES        = Boolean(INFURA_PROJECT_ID && INFURA_PROJECT_ID !== '');
export const INFURA_URL                 = `https://${IS_MAINNET ? "mainnet" : "goerli"}.infura.io/v3/${INFURA_PROJECT_ID}`;

// public
export const ETH2_NETWORK_NAME          = (IS_MAINNET || !process.env.REACT_APP_TESTNET_LAUNCHPAD_NAME) ? 'mainnet' : process.env.REACT_APP_TESTNET_LAUNCHPAD_NAME;
export const TICKER_NAME                = IS_MAINNET ? 'ETH' : 'LYXt';
export const ETHERSCAN_URL              = IS_MAINNET ? 'https://etherscan.io/tx' : 'https://explorer.pandora.l15.lukso.network';
export const BEACONSCAN_URL             = IS_MAINNET ? 'https://beaconscan.com/validator' : `https://explorer.vanguard.l15.lukso.network`;
export const BEACONCHAIN_URL            = `https://explorer.pandora.l15.lukso.network`;
export const FORTMATIC_KEY              = process.env.REACT_APP_FORTMATIC_KEY       || 'pk_test_D113D979E0D3508F';
export const CONTRACT_ADDRESS           = process.env.REACT_APP_CONTRACT_ADDRESS    || '0x000000000000000000000000000000000000cafe';
export const MIN_DEPOSIT_CLI_VERSION    = process.env.REACT_APP_MIN_DEPOSIT_CLI_VERSION  || '1.0.0';
export const LIGHTHOUSE_INSTALLATION_URL = process.env.REACT_APP_LIGHTHOUSE_INSTALLATION_URL || 'https://lighthouse-book.sigmaprime.io/';
export const NIMBUS_INSTALLATION_URL    = process.env.REACT_APP_NIMBUS_INSTALLATION_URL  || 'https://status-im.github.io/nimbus-eth2/intro.html';
export const PRYSM_INSTALLATION_URL     = process.env.REACT_APP_PRYSM_INSTALLATION_URL   || 'https://docs.lukso.tech/networks/l15-testnet';
export const TEKU_INSTALLATION_URL      = process.env.REACT_APP_TEKU_INSTALLATION_URL    || 'https://docs.teku.pegasys.tech/en/latest/HowTo/Get-Started/Build-From-Source/';
export const MAINNET_LAUNCHPAD_URL      = 'https://launchpad.ethereum.org/'
export const TESTNET_LAUNCHPAD_URL      = `https://launchpad.l15.lukso.network/`

if(process.env.REACT_APP_ETH_REQUIREMENT && Number.isNaN(Number(process.env.REACT_APP_ETH_REQUIREMENT))) {
    throw new Error("REACT_APP_ETH_REQUIREMENT must be of type: number")
}
export const ETH_REQUIREMENT            = process.env.REACT_APP_ETH_REQUIREMENT     || 524288;

// ETH_DEPOSIT_OFFSET is added to the balance of the deposit contract to account for testnet deposit-contracts that allow some number of free deposit
if(process.env.REACT_APP_ETH_DEPOSIT_OFFSET && Number.isNaN(Number(process.env.REACT_APP_ETH_DEPOSIT_OFFSET))) {
    throw new Error("REACT_APP_ETH_DEPOSIT_OFFSET must be of type: number")
}
export const ETH_DEPOSIT_OFFSET = Number(process.env.REACT_APP_ETH_DEPOSIT_OFFSET) * Number(!IS_MAINNET) || 0;

let forkVersion = Buffer.from('00000000', 'hex')
if(typeof process.env.REACT_APP_GENESIS_FORK_VERSION === 'string'){
    forkVersion = Buffer.from(process.env.REACT_APP_GENESIS_FORK_VERSION.replace(/0x/g, ''), 'hex');
}
export const GENESIS_FORK_VERSION = forkVersion;


if(process.env.REACT_APP_PRICE_PER_VALIDATOR && Number.isNaN(Number(process.env.REACT_APP_PRICE_PER_VALIDATOR))) {
    throw new Error("REACT_APP_PRICE_PER_VALIDATOR must be of type: number")
}
export const PRICE_PER_VALIDATOR        = process.env.REACT_APP_PRICE_PER_VALIDATOR || 32;

if(process.env.REACT_APP_EJECTION_PRICE && Number.isNaN(Number(process.env.REACT_APP_EJECTION_PRICE))) {
    throw new Error("REACT_APP_EJECTION_PRICE must be of type: number")
}
export const EJECTION_PRICE             = process.env.REACT_APP_EJECTION_PRICE || 16;

// BLS signature verification variables
export const ETHER_TO_GWEI              = 1e9;
export const MIN_DEPOSIT_AMOUNT         = 1 * ETHER_TO_GWEI;
export const DOMAIN_DEPOSIT             = Buffer.from('03000000', 'hex');
export const EMPTY_ROOT                 = Buffer.from('0000000000000000000000000000000000000000000000000000000000000000', 'hex');
