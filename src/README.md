For Dev only:
Seed: 'country scorpion front enjoy tape tackle large mass once cabbage link advance'

Seed for private network: 'candy annual nominee gold tattoo coach among reason margin romance drive father'

Seed for local geth dev vault: 'column oval waste blade rebel quit service female subway ball orange large'

Community Insurance Contract Address:

0xb6142fa287c1cd15c61ae8f7aad2ba03bf26b9b6

Cumbersome workflow:

Compile contract in remix:

Copy abi and record locally for use when creating local web3 contract instance.

Make sure you have metamask installed & have added seed and passwords to create a vault.

Make sure you keep a reocrd of the seed if you need access to those same addresses (eg. you need to do something as the contract owner);

Deploy contract to test network through remix . Choose injected web3 from environment list. Make sure you have a test network selected in metamask. We'll use Rinkeby.

Select contract in remix, and hit create. Confirm transaction in metamask (again making sure that you have the appropriate test network selected). Once contract is deployed, copy the contract address for future reference.

To do quick tests in the future, you can open remix and drop in the address in 'at address' and hit at address button to interact with the contract.

To create a dapp that interacts with the contract:

* Install web3 v.1 beta. If you're prepared to build the project you can install one of the latest versions. To get list of versions use:

`npm view web3 versions`

At time of writing latest version is '1.0.0-beta2' , however this does not include a dist folder, so you if you wish to use absolute latest, rather clone git repo and run :

git checkout -b 1.0 origin/1.0
npm install
npm run-script build

Alternatively, you can install one of the older beta version like '1.0.0-beta.26' which includes the dist folder.

To connect to ethereum network from a browser, we'll be using metamask as our provider.

we need to import web3 lib;
