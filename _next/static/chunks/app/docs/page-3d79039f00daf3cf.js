(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40],{198:(e,t,s)=>{"use strict";s.d(t,{default:()=>n});var a=s(95155),r=s(12115),l=s(12505);let i=[{title:"Getting Started",icon:l.uoG,items:[{id:"introduction",label:"Introduction"},{id:"installation",label:"Installation"},{id:"quick-start",label:"Quick Start"}]},{title:"Core Concepts",icon:l.vd0,items:[{id:"architecture",label:"Architecture"},{id:"encryption",label:"Encryption"},{id:"storage",label:"Storage Layer"},{id:"blockchain",label:"Blockchain Integration"}]},{title:"API Reference",icon:l.FSj,items:[{id:"zkfileclient",label:"ZKFileClient"},{id:"upload",label:"Upload API"},{id:"download",label:"Download API"},{id:"share",label:"Share API"}]},{title:"Security",icon:l.SMR,items:[{id:"security-model",label:"Security Model"},{id:"best-practices",label:"Best Practices"}]},{title:"Examples",icon:l.ZPX,items:[{id:"react-integration",label:"React Integration"},{id:"nextjs-integration",label:"Next.js Integration"}]},{title:"Configuration",icon:l.Pcn,items:[{id:"configuration",label:"Configuration Options"},{id:"advanced",label:"Advanced Usage"}]}];function n(){let[e,t]=(0,r.useState)("introduction");return(0,a.jsx)("aside",{className:"hidden lg:block w-64 flex-shrink-0 sticky top-[72px] h-[calc(100vh-88px)] overflow-y-auto",children:(0,a.jsxs)("div",{className:"space-y-6 pr-4",children:[(0,a.jsx)("div",{children:(0,a.jsx)("h2",{className:"text-white font-bold text-lg mb-4",children:"Documentation"})}),i.map((s,r)=>(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 text-gray-400 text-sm font-semibold mb-3",children:[(0,a.jsx)(s.icon,{className:"text-[#0DA9BB]",size:14}),(0,a.jsx)("span",{children:s.title})]}),(0,a.jsx)("ul",{className:"space-y-1 ml-5 border-l border-[#0DA9BB]/20",children:s.items.map(s=>(0,a.jsx)("li",{children:(0,a.jsx)("button",{onClick:()=>(e=>{t(e);let s=document.getElementById(e);if(s){let e=s.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:e,behavior:"smooth"})}})(s.id),className:`block w-full text-left px-3 py-1.5 text-sm transition-all duration-200 border-l-2 -ml-[1px] ${e===s.id?"border-[#0DA9BB] text-[#0DA9BB] bg-[#0DA9BB]/5":"border-transparent text-gray-400 hover:text-white hover:border-[#0DA9BB]/50"}`,children:s.label})},s.id))})]},r))]})})}},1934:(e,t,s)=>{"use strict";s.d(t,{v:()=>i});var a=s(12115);let r=e=>{let t,s=new Set,a=(e,a)=>{let r="function"==typeof e?e(t):e;if(!Object.is(r,t)){let e=t;t=(null!=a?a:"object"!=typeof r||null===r)?r:Object.assign({},t,r),s.forEach(s=>s(t,e))}},r=()=>t,l={setState:a,getState:r,getInitialState:()=>i,subscribe:e=>(s.add(e),()=>s.delete(e))},i=t=e(a,r,l);return l},l=e=>{let t=e?r(e):r,s=e=>(function(e,t=e=>e){let s=a.useSyncExternalStore(e.subscribe,a.useCallback(()=>t(e.getState()),[e,t]),a.useCallback(()=>t(e.getInitialState()),[e,t]));return a.useDebugValue(s),s})(t,e);return Object.assign(s,t),s},i=e=>e?l(e):l},13220:(e,t,s)=>{"use strict";s.d(t,{k5:()=>d});var a=s(12115),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=a.createContext&&a.createContext(r),i=["attr","size","title"];function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,a)}return s}function c(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach(function(t){var a,r,l;a=e,r=t,l=s[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var a=s.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in a?Object.defineProperty(a,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[r]=l}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function d(e){return t=>a.createElement(m,n({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,s)=>a.createElement(t.tag,c({key:s},t.attr),e(t.child)))}(e.child))}function m(e){var t=t=>{var s,{attr:r,size:l,title:o}=e,d=function(e,t){if(null==e)return{};var s,a,r=function(e,t){if(null==e)return{};var s={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;s[a]=e[a]}return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)s=l[a],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}(e,i),m=l||t.size||"1em";return t.className&&(s=t.className),e.className&&(s=(s?s+" ":"")+e.className),a.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,d,{className:s,style:c(c({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),o&&a.createElement("title",null,o),e.children)};return void 0!==l?a.createElement(l.Consumer,null,e=>t(e)):t(r)}},59725:(e,t,s)=>{"use strict";s.d(t,{default:()=>l});var a=s(95155),r=s(12505);function l(){return(0,a.jsxs)("div",{className:"flex-1 max-w-4xl pb-20",children:[(0,a.jsxs)("section",{id:"introduction",className:"mb-16 scroll-mt-20",children:[(0,a.jsx)("h1",{className:"text-4xl font-bold text-white mb-4",children:"ZKFile Core SDK Documentation"}),(0,a.jsx)("p",{className:"text-xl text-gray-300 mb-6",children:"Build privacy-first applications with zero-knowledge encryption and on-chain access control."}),(0,a.jsxs)("div",{className:"bg-gradient-to-r from-[#0DA9BB]/10 to-[#14c4d9]/10 border border-[#0DA9BB]/30 rounded-lg p-6 mb-8",children:[(0,a.jsx)("h3",{className:"text-[#0DA9BB] font-semibold mb-3 text-lg",children:"What is ZKFile Core SDK?"}),(0,a.jsx)("p",{className:"text-gray-300 leading-relaxed mb-4",children:"ZKFile Core SDK is a TypeScript/JavaScript library that enables developers to build applications with:"}),(0,a.jsxs)("ul",{className:"space-y-2 text-gray-300",children:[(0,a.jsxs)("li",{className:"flex items-start gap-2",children:[(0,a.jsx)("span",{className:"text-[#0DA9BB] mt-1",children:"•"}),(0,a.jsxs)("span",{children:[(0,a.jsx)("strong",{children:"Client-side encryption"})," using AES-256-GCM"]})]}),(0,a.jsxs)("li",{className:"flex items-start gap-2",children:[(0,a.jsx)("span",{className:"text-[#0DA9BB] mt-1",children:"•"}),(0,a.jsxs)("span",{children:[(0,a.jsx)("strong",{children:"On-chain access control"})," via Solana blockchain"]})]}),(0,a.jsxs)("li",{className:"flex items-start gap-2",children:[(0,a.jsx)("span",{className:"text-[#0DA9BB] mt-1",children:"•"}),(0,a.jsxs)("span",{children:[(0,a.jsx)("strong",{children:"Decentralized storage"})," with IPFS and Arweave"]})]}),(0,a.jsxs)("li",{className:"flex items-start gap-2",children:[(0,a.jsx)("span",{className:"text-[#0DA9BB] mt-1",children:"•"}),(0,a.jsxs)("span",{children:[(0,a.jsx)("strong",{children:"Zero-knowledge proofs"})," for privacy-preserving verification"]})]})]})]}),(0,a.jsxs)("a",{href:"https://github.com/ZKFile/zkfile-core-sdk",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-6 py-3 bg-[#0f1419] border border-[#0DA9BB]/30 rounded-lg text-white hover:bg-[#0DA9BB]/10 transition-all duration-200",children:[(0,a.jsx)(r.hL4,{size:20}),(0,a.jsx)("span",{className:"font-medium",children:"View on GitHub"})]})]}),(0,a.jsxs)("section",{id:"installation",className:"mb-16 scroll-mt-20",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold text-white mb-6",children:"Installation"}),(0,a.jsx)("p",{className:"text-gray-300 mb-6",children:"Install the ZKFile Core SDK using your preferred package manager:"}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)(i,{title:"npm",code:"npm install @zkfile/core-sdk",icon:(0,a.jsx)(r.JyX,{className:"text-[#CB3837]",size:18})}),(0,a.jsx)(i,{title:"yarn",code:"yarn add @zkfile/core-sdk"}),(0,a.jsx)(i,{title:"pnpm",code:"pnpm add @zkfile/core-sdk"})]}),(0,a.jsx)("div",{className:"mt-6 bg-[#0DA9BB]/5 border border-[#0DA9BB]/20 rounded-lg p-4",children:(0,a.jsxs)("p",{className:"text-sm text-gray-400",children:[(0,a.jsx)("strong",{className:"text-[#0DA9BB]",children:"Note:"})," ZKFile Core SDK requires Node.js 16+ and works in both browser and Node.js environments."]})})]}),(0,a.jsxs)("section",{id:"quick-start",className:"mb-16 scroll-mt-20",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold text-white mb-6",children:"Quick Start"}),(0,a.jsx)("p",{className:"text-gray-300 mb-6",children:"Get started with ZKFile in just a few lines of code:"}),(0,a.jsx)(i,{title:"example.ts",code:`import { ZKFileClient } from '@zkfile/core-sdk';
import { Connection, clusterApiUrl } from '@solana/web3.js';

// Initialize client
const zkfile = new ZKFileClient({
  rpcEndpoint: clusterApiUrl('mainnet-beta'),
  storageProvider: 'ipfs'
});

// Upload encrypted file
const file = new File(['Hello DEMOFILE'], 'secret.txt');
const result = await zkfile.upload({
  file,
  password: 'secure-password',
  wallet: walletAdapter
});

console.log('File ID:', result.fileId);
console.log('CID:', result.cid);

// Download and decrypt file
const decrypted = await zkfile.download({
  fileId: result.fileId,
  password: 'secure-password',
  wallet: walletAdapter
});`})]}),(0,a.jsxs)("section",{id:"architecture",className:"mb-16 scroll-mt-20",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold text-white mb-6",children:"Architecture Overview"}),(0,a.jsx)("p",{className:"text-gray-300 mb-6",children:"ZKFile Core SDK follows a modular architecture with clear separation of concerns:"}),(0,a.jsx)(i,{title:"System Architecture",code:`┌─────────────────────────────────────┐
│      Client Application             │
│    (React / Next.js / Vue)          │
└────────────┬────────────────────────┘
             │
             ▼
┌─────────────────────────────────────┐
│      @zkfile/core-sdk               │
│  ┌──────────────────────────────┐   │
│  │   DEMOFILE (Main API)    │   │
│  └──────────────────────────────┘   │
│         │                            │
│  ┌──────┴──────┬──────┬──────┐      │
│  ▼             ▼      ▼      ▼      │
│ Crypto    Storage  Blockchain DFProof│
│ Module    Module   Module    Module │
└─────────────────────────────────────┘
       │          │          │
       ▼          ▼          ▼
   ┌──────┐  ┌────────┐ ┌──────┐
   │ IPFS │  │Arweave │ │Solana│
   └──────┘  └────────┘ └──────┘`}),(0,a.jsx)("h3",{className:"text-2xl font-semibold text-white mb-4 mt-8",children:"Core Modules"}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)(n,{title:"Crypto Module",description:"Handles all cryptographic operations including AES-256-GCM encryption, PBKDF2 key derivation, and secure random generation."}),(0,a.jsx)(n,{title:"Storage Module",description:"Manages decentralized storage operations with IPFS and Arweave, providing redundancy and permanent storage options."}),(0,a.jsx)(n,{title:"Blockchain Module",description:"Interacts with Solana blockchain for on-chain access control, metadata storage, and immutable audit trails."}),(0,a.jsx)(n,{title:"DEMOFILE Proof Module",description:"Generates and verifies zero-knowledge proofs for privacy-preserving data verification without revealing the data itself."})]})]}),(0,a.jsxs)("section",{id:"encryption",className:"mb-16 scroll-mt-20",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold text-white mb-6",children:"Encryption"}),(0,a.jsx)("p",{className:"text-gray-300 mb-6",children:"DEMOFILE uses industry-standard AES-256-GCM encryption with PBKDF2 key derivation:"}),(0,a.jsxs)("div",{className:"bg-[#0f1419] border border-[#0DA9BB]/20 rounded-lg p-6 mb-6",children:[(0,a.jsx)("h3",{className:"text-[#0DA9BB] font-semibold mb-4",children:"Encryption Specifications"}),(0,a.jsx)("table",{className:"w-full text-sm",children:(0,a.jsxs)("tbody",{className:"text-gray-300",children:[(0,a.jsxs)("tr",{className:"border-b border-[#0DA9BB]/10",children:[(0,a.jsx)("td",{className:"py-2 font-semibold",children:"Algorithm"}),(0,a.jsx)("td",{className:"py-2",children:"AES-256-GCM"})]}),(0,a.jsxs)("tr",{className:"border-b border-[#0DA9BB]/10",children:[(0,a.jsx)("td",{className:"py-2 font-semibold",children:"Key Size"}),(0,a.jsx)("td",{className:"py-2",children:"256 bits"})]}),(0,a.jsxs)("tr",{className:"border-b border-[#0DA9BB]/10",children:[(0,a.jsx)("td",{className:"py-2 font-semibold",children:"IV Size"}),(0,a.jsx)("td",{className:"py-2",children:"96 bits (12 bytes)"})]}),(0,a.jsxs)("tr",{className:"border-b border-[#0DA9BB]/10",children:[(0,a.jsx)("td",{className:"py-2 font-semibold",children:"Salt Size"}),(0,a.jsx)("td",{className:"py-2",children:"128 bits (16 bytes)"})]}),(0,a.jsxs)("tr",{className:"border-b border-[#0DA9BB]/10",children:[(0,a.jsx)("td",{className:"py-2 font-semibold",children:"Auth Tag"}),(0,a.jsx)("td",{className:"py-2",children:"128 bits"})]}),(0,a.jsxs)("tr",{className:"border-b border-[#0DA9BB]/10",children:[(0,a.jsx)("td",{className:"py-2 font-semibold",children:"KDF"}),(0,a.jsx)("td",{className:"py-2",children:"PBKDF2-SHA256"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"py-2 font-semibold",children:"Iterations"}),(0,a.jsx)("td",{className:"py-2",children:"100,000"})]})]})})]}),(0,a.jsx)(i,{title:"Encryption Flow",code:`Password → PBKDF2 (100k iterations) → 256-bit Key
                                            ↓
File Data + Key + IV → AES-256-GCM → Ciphertext + Auth Tag`})]}),(0,a.jsxs)("section",{id:"storage",className:"mb-16 scroll-mt-20",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold text-white mb-6",children:"Storage Layer"}),(0,a.jsx)("p",{className:"text-gray-300 mb-6",children:"DEMOFILE supports multiple decentralized storage providers:"}),(0,a.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{className:"bg-[#0f1419] border border-[#0DA9BB]/20 rounded-lg p-5",children:[(0,a.jsx)("h3",{className:"text-[#0DA9BB] font-semibold mb-3",children:"IPFS Storage"}),(0,a.jsxs)("ul",{className:"space-y-2 text-sm text-gray-300",children:[(0,a.jsxs)("li",{className:"flex items-start gap-2",children:[(0,a.jsx)("span",{className:"text-[#0DA9BB] mt-1",children:"✓"}),(0,a.jsx)("span",{children:"Fast access with CDN support"})]}),(0,a.jsxs)("li",{className:"flex items-start gap-2",children:[(0,a.jsx)("span",{className:"text-[#0DA9BB] mt-1",children:"✓"}),(0,a.jsx)("span",{children:"Content-addressed storage"})]}),(0,a.jsxs)("li",{className:"flex items-start gap-2",children:[(0,a.jsx)("span",{className:"text-[#0DA9BB] mt-1",children:"✓"}),(0,a.jsx)("span",{children:"Distributed and redundant"})]})]})]}),(0,a.jsxs)("div",{className:"bg-[#0f1419] border border-[#0DA9BB]/20 rounded-lg p-5",children:[(0,a.jsx)("h3",{className:"text-[#0DA9BB] font-semibold mb-3",children:"Arweave Storage"}),(0,a.jsxs)("ul",{className:"space-y-2 text-sm text-gray-300",children:[(0,a.jsxs)("li",{className:"flex items-start gap-2",children:[(0,a.jsx)("span",{className:"text-[#0DA9BB] mt-1",children:"✓"}),(0,a.jsx)("span",{children:"Permanent storage (200+ years)"})]}),(0,a.jsxs)("li",{className:"flex items-start gap-2",children:[(0,a.jsx)("span",{className:"text-[#0DA9BB] mt-1",children:"✓"}),(0,a.jsx)("span",{children:"One-time payment model"})]}),(0,a.jsxs)("li",{className:"flex items-start gap-2",children:[(0,a.jsx)("span",{className:"text-[#0DA9BB] mt-1",children:"✓"}),(0,a.jsx)("span",{children:"Immutable by design"})]})]})]})]})]}),(0,a.jsxs)("section",{id:"blockchain",className:"mb-16 scroll-mt-20",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold text-white mb-6",children:"Blockchain Integration"}),(0,a.jsx)("p",{className:"text-gray-300 mb-6",children:"DEMOFILE leverages Solana blockchain for on-chain access control and metadata storage:"}),(0,a.jsx)(i,{title:"On-Chain Data Structure",code:`File Account (PDA)
├── owner: PublicKey
├── cid: string (IPFS/Arweave)
├── file_hash: string (SHA-256)
├── created_at: i64
├── metadata: Vec<u8>
└── access_list: Vec<AccessGrant>

AccessGrant
├── recipient: PublicKey
├── granted_at: i64
├── expires_at: Option<i64>
└── permissions: u8`})]}),(0,a.jsxs)("section",{id:"zkfileclient",className:"mb-16 scroll-mt-20",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold text-white mb-6",children:"ZKFileClient API"}),(0,a.jsx)(i,{title:"Constructor",code:`new ZKFileClient(config: ZKFileConfig)

interface ZKFileConfig {
  rpcEndpoint: string;              // Solana RPC URL
  programId?: string;               // ZKFile program ID
  storageProvider: 'ipfs' | 'arweave';
  ipfsGateway?: string;             // IPFS gateway URL
  arweaveGateway?: string;          // Arweave gateway URL
}`})]}),(0,a.jsxs)("section",{id:"upload",className:"mb-16 scroll-mt-20",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold text-white mb-6",children:"Upload API"}),(0,a.jsx)(i,{title:"upload()",code:`await zkfile.upload(options: UploadOptions): Promise<UploadResult>

interface UploadOptions {
  file: File | Blob;
  password: string;
  wallet: WalletAdapter;
  metadata?: {
    name?: string;
    description?: string;
    tags?: string[];
  };
  onProgress?: (progress: number) => void;
}

interface UploadResult {
  fileId: string;
  cid: string;
  signature: string;
  metadata: FileMetadata;
  uploadedAt: number;
}`}),(0,a.jsx)("h3",{className:"text-xl font-semibold text-white mb-4 mt-6",children:"Example"}),(0,a.jsx)(i,{code:`const result = await zkfile.upload({
  file: myFile,
  password: 'secure-password',
  wallet: walletAdapter,
  metadata: {
    name: 'My Document',
    tags: ['important', 'private']
  },
  onProgress: (progress) => {
    console.log(\`Upload progress: \${progress}%\`);
  }
});`})]}),(0,a.jsxs)("section",{id:"download",className:"mb-16 scroll-mt-20",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold text-white mb-6",children:"Download API"}),(0,a.jsx)(i,{title:"download()",code:`await zkfile.download(options: DownloadOptions): Promise<File>

interface DownloadOptions {
  fileId: string;
  password: string;
  wallet: WalletAdapter;
  onProgress?: (progress: number) => void;
}`}),(0,a.jsx)("h3",{className:"text-xl font-semibold text-white mb-4 mt-6",children:"Example"}),(0,a.jsx)(i,{code:`const file = await zkfile.download({
  fileId: 'abc123...',
  password: 'secure-password',
  wallet: walletAdapter
});

// Use the decrypted file
const url = URL.createObjectURL(file);`})]}),(0,a.jsxs)("section",{id:"share",className:"mb-16 scroll-mt-20",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold text-white mb-6",children:"Share API"}),(0,a.jsx)(i,{title:"share()",code:`await zkfile.share(options: ShareOptions): Promise<ShareResult>

interface ShareOptions {
  fileId: string;
  recipient: PublicKey;
  expiresAt?: number;
  wallet: WalletAdapter;
}

interface ShareResult {
  accessId: string;
  signature: string;
  recipient: PublicKey;
  expiresAt?: number;
}`}),(0,a.jsx)("h3",{className:"text-xl font-semibold text-white mb-4 mt-6",children:"Example"}),(0,a.jsx)(i,{code:`const result = await zkfile.share({
  fileId: 'abc123...',
  recipient: new PublicKey('recipient-address'),
  expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
  wallet: walletAdapter
});`})]}),(0,a.jsxs)("section",{id:"security-model",className:"mb-16 scroll-mt-20",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold text-white mb-6",children:"Security Model"}),(0,a.jsx)("p",{className:"text-gray-300 mb-6",children:"ZKFile implements a multi-layer security architecture:"}),(0,a.jsx)("div",{className:"space-y-4",children:[{layer:"Layer 1: Client-Side",items:["AES-256-GCM Encryption","PBKDF2 Key Derivation","Local Key Storage"]},{layer:"Layer 2: Transport",items:["HTTPS/TLS","Signature Verification","Wallet Authentication"]},{layer:"Layer 3: Storage",items:["Encrypted at Rest","Content Addressing","Distributed Storage"]},{layer:"Layer 4: Access Control",items:["Cryptographic Grants","Time-locked Access","Revocable Permissions"]},{layer:"Layer 5: Blockchain",items:["Immutable Metadata","On-chain Verification","Audit Trail"]}].map((e,t)=>(0,a.jsxs)("div",{className:"bg-[#0f1419] border border-[#0DA9BB]/20 rounded-lg p-5",children:[(0,a.jsx)("h3",{className:"text-[#0DA9BB] font-semibold mb-3",children:e.layer}),(0,a.jsx)("ul",{className:"space-y-1 text-sm text-gray-300",children:e.items.map((e,t)=>(0,a.jsxs)("li",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{className:"text-[#0DA9BB]",children:"•"}),(0,a.jsx)("span",{children:e})]},t))})]},t))})]}),(0,a.jsxs)("section",{id:"best-practices",className:"mb-16 scroll-mt-20",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold text-white mb-6",children:"Best Practices"}),(0,a.jsx)("div",{className:"space-y-4",children:(0,a.jsxs)("div",{className:"bg-[#0DA9BB]/5 border border-[#0DA9BB]/20 rounded-lg p-5",children:[(0,a.jsx)("h3",{className:"text-white font-semibold mb-3",children:"Security Best Practices"}),(0,a.jsxs)("ul",{className:"space-y-2 text-sm text-gray-300",children:[(0,a.jsxs)("li",{className:"flex items-start gap-2",children:[(0,a.jsx)("span",{className:"text-[#0DA9BB] mt-1",children:"✓"}),(0,a.jsx)("span",{children:"Never hardcode passwords - Use secure input methods"})]}),(0,a.jsxs)("li",{className:"flex items-start gap-2",children:[(0,a.jsx)("span",{className:"text-[#0DA9BB] mt-1",children:"✓"}),(0,a.jsx)("span",{children:"Implement password strength validation (min 12 characters)"})]}),(0,a.jsxs)("li",{className:"flex items-start gap-2",children:[(0,a.jsx)("span",{className:"text-[#0DA9BB] mt-1",children:"✓"}),(0,a.jsx)("span",{children:"Use secure random generation for salts and IVs"})]}),(0,a.jsxs)("li",{className:"flex items-start gap-2",children:[(0,a.jsx)("span",{className:"text-[#0DA9BB] mt-1",children:"✓"}),(0,a.jsx)("span",{children:"Enable 2FA on wallets for additional security"})]}),(0,a.jsxs)("li",{className:"flex items-start gap-2",children:[(0,a.jsx)("span",{className:"text-[#0DA9BB] mt-1",children:"✓"}),(0,a.jsx)("span",{children:"Validate file sizes before encryption"})]})]})]})})]}),(0,a.jsxs)("section",{id:"react-integration",className:"mb-16 scroll-mt-20",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold text-white mb-6",children:"React Integration"}),(0,a.jsx)(i,{title:"FileUploader.tsx",code:`import { useWallet } from '@solana/wallet-adapter-react';
import { ZKFileClient } from '@zkfile/core-sdk';
import { useState } from 'react';

function FileUploader() {
  const wallet = useWallet();
  const [uploading, setUploading] = useState(false);
  
  const zkfile = new ZKFileClient({
    rpcEndpoint: clusterApiUrl('mainnet-beta'),
    storageProvider: 'ipfs'
  });
  
  const handleUpload = async (file: File) => {
    setUploading(true);
    try {
      const result = await zkfile.upload({
        file,
        password: 'user-password',
        wallet
      });
      console.log('Uploaded:', result.fileId);
    } finally {
      setUploading(false);
    }
  };
  
  return (
    <input 
      type="file" 
      onChange={(e) => handleUpload(e.target.files![0])}
      disabled={uploading}
    />
  );
}`})]}),(0,a.jsxs)("section",{id:"nextjs-integration",className:"mb-16 scroll-mt-20",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold text-white mb-6",children:"Next.js Integration"}),(0,a.jsx)(i,{title:"app/api/upload/route.ts",code:`import { ZKFileClient } from '@zkfile/core-sdk';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('file') as File;
  
  const zkfile = new ZKFileClient({
    rpcEndpoint: process.env.SOLANA_RPC_URL!,
    storageProvider: 'ipfs'
  });
  
  const result = await zkfile.upload({
    file,
    password: formData.get('password') as string,
    wallet: // ... wallet adapter
  });
  
  return NextResponse.json({ fileId: result.fileId });
}`})]}),(0,a.jsxs)("section",{id:"configuration",className:"mb-16 scroll-mt-20",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold text-white mb-6",children:"Configuration Options"}),(0,a.jsx)(i,{code:`const zkfile = new ZKFileClient({
  // Required
  rpcEndpoint: 'https://api.mainnet-beta.solana.com',
  storageProvider: 'ipfs', // or 'arweave'
  
  // Optional
  programId: 'DEMOFILE...', // DEMOFILE Program ID
  ipfsGateway: 'https://ipfs.io',
  arweaveGateway: 'https://arweave.net',
  defaultEncryption: 'aes-256-gcm',
  kdfIterations: 100000
});`})]}),(0,a.jsxs)("section",{id:"advanced",className:"mb-16 scroll-mt-20",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold text-white mb-6",children:"Advanced Usage"}),(0,a.jsxs)("div",{className:"bg-[#0f1419] border border-[#0DA9BB]/20 rounded-lg p-6",children:[(0,a.jsx)("h3",{className:"text-white font-semibold mb-4",children:"Custom Storage Provider"}),(0,a.jsx)("p",{className:"text-gray-300 text-sm mb-4",children:"You can implement custom storage providers by extending the StorageProvider interface:"}),(0,a.jsx)(i,{code:`interface StorageProvider {
  upload(data: Uint8Array): Promise<string>;
  download(cid: string): Promise<Uint8Array>;
  pin(cid: string): Promise<void>;
  unpin(cid: string): Promise<void>;
}`})]})]})]})}function i({title:e,code:t,icon:s}){return(0,a.jsxs)("div",{className:"bg-[#0f1419] border border-[#0DA9BB]/20 rounded-lg overflow-hidden",children:[e&&(0,a.jsx)("div",{className:"flex items-center justify-between px-4 py-2 bg-[#0a0e12] border-b border-[#0DA9BB]/20",children:(0,a.jsxs)("div",{className:"flex items-center gap-2 text-gray-400 text-sm",children:[s,(0,a.jsx)("span",{className:"font-mono",children:e})]})}),(0,a.jsx)("pre",{className:"p-4 overflow-x-auto",children:(0,a.jsx)("code",{className:"text-gray-300 font-mono text-sm leading-relaxed whitespace-pre",children:t})})]})}function n({title:e,description:t}){return(0,a.jsxs)("div",{className:"bg-[#0f1419] border border-[#0DA9BB]/20 rounded-lg p-5",children:[(0,a.jsx)("h4",{className:"text-[#0DA9BB] font-semibold mb-2",children:e}),(0,a.jsx)("p",{className:"text-gray-300 text-sm",children:t})]})}},71353:(e,t,s)=>{Promise.resolve().then(s.bind(s,59725)),Promise.resolve().then(s.bind(s,198)),Promise.resolve().then(s.bind(s,7853)),Promise.resolve().then(s.bind(s,95727))}},e=>{e.O(0,[711,362,446,603,573,371,441,794,358],()=>e(e.s=71353)),_N_E=e.O()}]);