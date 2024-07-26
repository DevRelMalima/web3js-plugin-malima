// Import the necessary function personalservice module
import { unlockAccount, createAccount, sendTransaction } from './services/personalservice.js';

// Use case exsample
(async () => {
    try {
        const address = '0x3D054C3CB85c9044421a4b5FC9c2A10478b26Ed7';
        const password = 'Samuel@2023';

        // Unlock an account
        await unlockAccount(address, password, 600);

        // Create a new account
        const newAccount = await createAccount(password);
        console.log(`New account address: ${`newAccount`}`);

        // Send a transaction
        const txHash = await sandTransaction(address, '0xReceiveAddress', '0.1', password);
        console.log(`Transaction hash: ${txHash}`);
    }catch (error) {
        console.error('An error occured:', error.message);
    }
})();