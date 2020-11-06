require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name rate stereo equip give civil army gas'; 
let testAccounts = [
"0xb9223bce68b7e9b6ad899bc90532a9297552a49627b9c78f2147fa8248b2fb13",
"0xea157c4afa632e8437f78ef162eef85ca3cac66f60c644d6cad2f974f9ff5274",
"0x8d445c2d8a5a509ac542545aa46a6a3c6ad64c5ebb4984f97c6597d7a24d2975",
"0xd4a4498774a78b25567abe9072cc8621247d18e19b9fa4a964553cb679d71535",
"0x95084345ccb1c3a0b1d38d8369f22eae05b682e08d754357d420c75476cf8241",
"0xeae5d87e555ae0f8e32295dd589327af3e2eca32e859581fc807cf2313a7da4b",
"0x3ca35fb082021beb2fbd410f28ee7da6102d1f29227ed65f27507ab4725f8927",
"0xeeacc38fc34bee4c2ae60c3f12306475635a204af630b1f5b61b3c775ea1f7ed",
"0x374f370569a40872a46caf9dfc318ba3bd3f898620ebb54a95ae962f4041d93d",
"0x11383c6d0bfda1052acfba801b81d17c4fbfb59d58ff2a58a8da6486cdd2a5b4"
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
            version: '^0.5.11'
        }
    }
};
