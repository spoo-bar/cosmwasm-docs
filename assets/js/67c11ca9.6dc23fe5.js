"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[225],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,h=d["".concat(c,".").concat(u)]||d[u]||p[u]||s;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5217:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return d}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),o=["components"],i={sidebar_position:2},c="Hints",l={unversionedId:"capture-the-flag/hints",id:"capture-the-flag/hints",isDocsHomePage:!1,title:"Hints",description:"Hint 1",source:"@site/dev-academy/capture-the-flag/02-hints.md",sourceDirName:"capture-the-flag",slug:"/capture-the-flag/hints",permalink:"/dev-academy/capture-the-flag/hints",editUrl:"https://github.com/InterWasm/docs/edit/main/dev-academy/capture-the-flag/02-hints.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"devAcademy",previous:{title:"Riddles",permalink:"/dev-academy/capture-the-flag/intro"},next:{title:"Anatomy of a Smart Contract",permalink:"/dev-academy/develop-smart-contract/intro"}},m=[{value:"Hint 1",id:"hint-1",children:[],level:2},{value:"Hint 2: Endpoints",id:"hint-2-endpoints",children:[],level:2},{value:"Hint 3: Formats",id:"hint-3-formats",children:[{value:"Transactions, Addresses, Block Heights",id:"transactions-addresses-block-heights",children:[],level:3},{value:"Base64",id:"base64",children:[],level:3}],level:2},{value:"Hint 4: Queries",id:"hint-4-queries",children:[{value:"Smart Query",id:"smart-query",children:[],level:3},{value:"Json Schema",id:"json-schema",children:[],level:3},{value:"Execute Smart Contract",id:"execute-smart-contract",children:[],level:3}],level:2},{value:"Hint 5: Recovery and Signing",id:"hint-5-recovery-and-signing",children:[{value:"Recovering Mnemonic",id:"recovering-mnemonic",children:[],level:3},{value:"Signing offline transactions",id:"signing-offline-transactions",children:[],level:3}],level:2}],p={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"hints"},"Hints"),(0,s.kt)("h2",{id:"hint-1"},"Hint 1"),(0,s.kt)("p",null,"Reward vouchers are 16 character hexadecimal number (like ",(0,s.kt)("inlineCode",{parentName:"p"},"c0ad2205922223b2"),")."),(0,s.kt)("h2",{id:"hint-2-endpoints"},"Hint 2: Endpoints"),(0,s.kt)("p",null,"RPC: ",(0,s.kt)("a",{parentName:"p",href:"https://rpc.pebblenet.cosmwasm.com:443"},"https://rpc.pebblenet.cosmwasm.com:443")),(0,s.kt)("p",null,"Faucet: ",(0,s.kt)("a",{parentName:"p",href:"https://faucet.pebblenet.cosmwasm.com"},"https://faucet.pebblenet.cosmwasm.com")),(0,s.kt)("p",null,"Explorer: ",(0,s.kt)("a",{parentName:"p",href:"https://block-explorer.pebblenet.cosmwasm.com"},"https://block-explorer.pebblenet.cosmwasm.com")),(0,s.kt)("h2",{id:"hint-3-formats"},"Hint 3: Formats"),(0,s.kt)("h3",{id:"transactions-addresses-block-heights"},"Transactions, Addresses, Block Heights"),(0,s.kt)("p",null,"In this event you will see strings like: ",(0,s.kt)("inlineCode",{parentName:"p"},"8B74EA4E6EC2B8940E6963DF813FE158171C1FEBEAFA36B38DFE80EA0521970C"),"\nThis is 32 bytes, hexadecimal string. Tendermint/cosmos-sdk hashes the txs and blocks in this format.\nThe hash above is a pebblenet transaction hash. These values always indexed by block explorers.\nRun a search with the hash to see it\u2019s content: ",(0,s.kt)("a",{parentName:"p",href:"https://block-explorer.pebblenet.cosmwasm.com/transactions/8B74EA4E6EC2B8940E6963DF813FE158171C1FEBEAFA36B38DFE80EA0521970C"},"https://block-explorer.pebblenet.cosmwasm.com/transactions/8B74EA4E6EC2B8940E6963DF813FE158171C1FEBEAFA36B38DFE80EA0521970C")),(0,s.kt)("p",null,"Another value: ",(0,s.kt)("inlineCode",{parentName:"p"},"wasm1\u2026.")," strings. These strings are bech32 account addresses.\nGo ahead and see one: ",(0,s.kt)("a",{parentName:"p",href:"https://block-explorer.pebblenet.cosmwasm.com/account/wasm1k8lesl0wsspcpdfpuh8es3k4ymfsfkryydhw03"},"https://block-explorer.pebblenet.cosmwasm.com/account/wasm1k8lesl0wsspcpdfpuh8es3k4ymfsfkryydhw03")),(0,s.kt)("p",null,"Block height is a sequential unsigned integer value that indexes a block. There could be many transactions in a single block.\nHere is one: ",(0,s.kt)("a",{parentName:"p",href:"https://block-explorer.pebblenet.cosmwasm.com/blocks/334748"},"https://block-explorer.pebblenet.cosmwasm.com/blocks/334748")),(0,s.kt)("h3",{id:"base64"},"Base64"),(0,s.kt)("p",null,"From Wikipedia: Base64 is a group of binary-to-text encoding schemes that represent binary data (more specifically, a sequence of 8-bit bytes) in an ASCII string format by translating the data into a radix-64 representation"),(0,s.kt)("p",null,"Basically if you see a string like this: ",(0,s.kt)("inlineCode",{parentName:"p"},"aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2hcP3ZcPU5VWXZiVDZ2VFBzCg==")," this is a base64 encoded string.\nTo decode ",(0,s.kt)("inlineCode",{parentName:"p"},"echo \u201caHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2hcP3ZcPU5VWXZiVDZ2VFBzCg==\u201d | base64 -d")),(0,s.kt)("h2",{id:"hint-4-queries"},"Hint 4: Queries"),(0,s.kt)("p",null,"Querying on chain data"),(0,s.kt)("p",null,"cosmos-sdk/CosmWasm based projects all have similar client apis: ",(0,s.kt)("inlineCode",{parentName:"p"},"terracli"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"wasmd"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"wasmd")," and more.\nQuery and tx interfaces are very similar."),(0,s.kt)("p",null,"Query block:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"wasmd query block 15 --node https://rpc.pebblenet.cosmwasm.com\n")),(0,s.kt)("p",null,"Query tx:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"wasmd query tx 8B74EA4E6EC2B8940E6963DF813FE158171C1FEBEAFA36B38DFE80EA0521970C --node https://rpc.pebblenet.cosmwasm.com\n")),(0,s.kt)("h3",{id:"smart-query"},"Smart Query"),(0,s.kt)("p",null,"Smart Query interface is defined by the contract itself thus you can run complex queries."),(0,s.kt)("p",null,"Sample cw20 query:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"QUERY='{\u201ctoken_info\u201d:{}}\u2019\nwasmd query wasm contract-state smart [bech32_address] \u2018$QUERY\u2019\n")),(0,s.kt)("h3",{id:"json-schema"},"Json Schema"),(0,s.kt)("p",null,"Smart contract execute or query interface is defined by Json Schema that is found in the smart contract repo.\nSmart contract developer should provide schema to the users: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-plus/tree/master/contracts/cw20-base/schema"},"https://github.com/CosmWasm/cosmwasm-plus/tree/master/contracts/cw20-base/schema")),(0,s.kt)("h3",{id:"execute-smart-contract"},"Execute Smart Contract"),(0,s.kt)("p",null,"You can execute smart contracts using cli. Some riddles needs this skill for the solution:"),(0,s.kt)("p",null,"Sending tokens from cw20"),(0,s.kt)("p",null,"You need"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"SEND_MSG='{\u201ctransfer\u201d: {\u201camount\u201d:\u201d1000\u2033, \u201crecipient\u201d:\u201dwasm170n6mk4k97kvrtj25t9ghm54ewmewt6yq9g6kt\u201d}}\u2019\nwasmd tx wasm execute $CONTRACT_ADDR \u201c$SEND_MSG\u201d \u2013from wallet\n")),(0,s.kt)("h2",{id:"hint-5-recovery-and-signing"},"Hint 5: Recovery and Signing"),(0,s.kt)("h3",{id:"recovering-mnemonic"},"Recovering Mnemonic"),(0,s.kt)("p",null,"The mnemonic seed phrase is the only access to a wallet. You can recover access to an account if you have the mnemonic of the wallet."),(0,s.kt)("p",null,"You can recover an account using mnemonic with this command below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"wasmd keys add show --recover\n> Enter your bip39 mnemonic\nchef sense chicken net around sting course someone question badge hand also nation siren remember famous bird eagle phrase kidney devote damp sugar throw\n")),(0,s.kt)("h3",{id:"signing-offline-transactions"},"Signing offline transactions"),(0,s.kt)("p",null,"Offline signing is a cool functionality. It is like a delayed payment, where you sign a transaction and only submit it later to the network.\nOne use case: create a transaction that will send\nfrom account A to B and send the unsigned tx to the account A owner to approve and sign the transaction then broadcast to the chain"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# \u2013generate-only flag creates tx and only prompts unsigned tx\nwasmd tx bank send wasm134rsdpu5xfhegdclxmdeqxn0j6gmenkmcdmpuz wasm103hx72nfk0mypwlfa3qwyx4rzvv35gvyy83ral 100upebble --memo \u201cyou found me\u201d --chain-id pebblenet-1 --generate-only > unsigned_tx.json\n# {\u201cbody\u201d:{\u201cmessages\u201d:[{\u201c@type\u201d:\u201d/cosmos.bank.v1beta1.MsgSend\u201d,\u201dfrom_address\u201d:\u201dwasm134rsdpu5xfhegdclxmdeqxn0j6gmenkmcdmpuz\u201d,\u201dto_address\u201d:\u201dwasm103hx72nfk0mypwlfa3qwyx4rzvv35gvyy83ral\u201d,\u201damount\u201d:[{\u201cdenom\u201d:\u201dupebble\u201d,\u201damount\u201d:\u201d100\u2033}]}],\u201dmemo\u201d:\u201dyou found me\u201d,\u201dtimeout_height\u201d:\u201d0\u2033,\u201dextension_options\u201d:[],\u201dnon_critical_extension_options\u201d:[]},\u201dauth_info\u201d:{\u201csigner_infos\u201d:[],\u201dfee\u201d:{\u201camount\u201d:[],\u201dgas_limit\u201d:\u201d81363\u2033,\u201dpayer\u201d:\u201d\u201d,\u201dgranter\u201d:\u201d\u201d}},\u201dsignatures\u201d:[]}\n\n# signs the tx and posts it to the chain\nwasmd tx sign unsigned_tx.json --from wasm134rsdpu5xfhegdclxmdeqxn0j6gmenkmcdmpuz --chain-id pebblenet-1\n")))}d.isMDXComponent=!0}}]);