# DDK Registry

## Before working with the library, you need to initialize it

We can use the next environments:

- DEVELOPMENT
- TESTNET
- MAINNET

Example:

```javascript
import DDK, { WORKSPACE } from 'ddk.registry';

DDK.initialize(WORKSPACE.MAINNET);
```
