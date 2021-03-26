/**
 * timelock contract address
 */
export const contract_address: any = {
    1: {
        'xdexfarm': '0x7f478b6c313cAE4d36c1A6c0FB7c366b441BDE58',
        'xdexconfig': '0xcb2978a5DC9f6B68295E93D53a74EA2CF66265dC',
    }
}

/**
 * contract abi file name
 */
export const contract_abi_file: any = {
    'xdexfarm': 'xdex-farm-abi.json',
    'xdexconfig': 'xdex-config-abi.json',
}

/**
 * deplay Offset, unit: seconds
 */
export const delay_offset = 86400;

/**
 * Current timelock address
 */
export const timelock_address: any = {
    1: '0xaf1A9b15c90087F4223a9d637b831636A1eEf64e',
}

/**
 * contract timelock queue transaction functions
 */
export const queue_functions: any = {
    'xdexfarm': ['addPool', 'setLpFactor'],
    'xdexconfig': ['updateFarm'],
}

