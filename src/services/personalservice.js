// Import the web3 instance configured in the config directory
import web3 from '../config/web3.js';

// Unlock an account
export async function unlockAccount(address, password, duration) {
    try {
        const success = await web3.eth.personal.unlockAccount(address, password, duration);
        console.log(`Account unlocked: ${success}`);
        return success;
    } catch (error) {
        console.error(`Error unlocking account: ${error.message}`);
        throw error;
    }
}

// Create a new account
export async function createAccount(password) {
    try {
        const newAccount = await web3.eth.personal.newAccount(password);
        console.log(`New account created: ${newAccount}`);
        return newAccount;
    } catch (error) {
        console.error(`Error creating account: ${error.message}`);
        throw error;
    }
}

// Send a transaction from our personal API
export async function sendTransaction(from, to, value, password) {
    try {
        const tx = await web3.eth.personal.sendTransaction({
            from,
            to,
            value: web3.utils.toWei(value, 'ether')
        }, password); // Ensure password is passed as required for personal.sendTransaction
        console.log(`Transaction sent: ${tx}`);
        return tx;
    } catch (error) {
        console.error(`Error sending transaction: ${error.message}`);
        throw error;
    }
}
