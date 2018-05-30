module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      from: "0x6a7557fbd52f05dd766473970bf1b322042a95f5",
      gas: 4100000
    },
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
      from: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57",
      gas: 4100000
    }
  }
};
