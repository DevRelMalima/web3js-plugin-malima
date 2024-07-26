// Import the Web3 library
import Web3 from 'web3';

// Initialize Web3 with Alchemy endpoint
const web3 = new Web3('https://eth-sepolia.g.alchemy.com/v2/WFN1BlQKxAzvdXCq8_fIBzxiU8yykdJf');

// Function to send transaction
async function sendTransaction(privateKey, toAddress, amountEth) {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    const tx = {
        to: toAddress,
        value: web3.utils.toWei(amountEth, 'ether'),
        gas: 21000,  // Standard gas limit for Ether transfer
    };

    try {
        const signedTx = await account.signTransaction(tx);
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        console.log('Transaction receipt:', receipt);
        return receipt;
    } catch (error) {
        console.error('Error sending transaction:', error);
        throw error;
    }
}

// Example usage (replace PRIVATE_KEY, RECIPIENT_ADDRESS, and AMOUNT with your values)
sendTransaction(
    '0x9673488150c05380c2d245a4b7926252132489ecc9f19fd3513e926993cce2d1', 
    '0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f', 
    '0.01'  // Sending 0.01 ETH
);
export default web3;