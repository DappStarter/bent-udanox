require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other foot film cost rifle upper coral light army gas'; 
let testAccounts = [
"0x0173f03b67b6bf124583266aedcd9a64381271e6fd7b1eb093244a3074391de0",
"0x57a863f41372a0a2336a256246493230ee8817455a290d204b3ba772d6f2b97e",
"0xab1ce2826af9c1b55fa0ddc0083e0dbecb15bccbdde41fe9cd914cd9918ea1e3",
"0x90305afb51ba7a18e6702f629230eb0cc41f23be834083d0c1f3e5819a76bfa0",
"0x0df44437dbe34a8d23bce66252f20bd20efb9cf97bd2525e1672031ee7d03d2c",
"0x36679699f43ec3a0f008b8ac2c102f16e4743694408c76b0a00dacd241cb72b2",
"0x2c60f355583e7b28d468b4fae6b430b2f6bc3faf857c37f506d518ebbd5a563f",
"0x29d89a690502fffe892558c9645a866cb3765fa9bfdcf25e274b5043dbb8e737",
"0x26d997a221253d795fc1d82145256ab71e007ec4cff4b9bd6e42dabe7209d8cc",
"0x173d9c458733a729f290816c6bf6b824b6d5cef50dd91266642c68116b99bb98"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

