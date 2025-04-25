module.exports = {
    networks: {
        development: {
            from: 'TNQ4GvRrBkxJkb4xH3YEMeyFGsdwGzMutP',
            privateKey: 'b6592b66e4ddff77be1d6a1633db3fc0a226e052416d7c198f5ae0af079adcd1',
            userFeePercentage: 30,
            feeLimit: 1e9,
            originEnergyLimit: 1e7,
            fullHost: "https://api.shasta.trongrid.io",
            network_id: "*" // Match any network id
        },
        production: {}
    }
};
