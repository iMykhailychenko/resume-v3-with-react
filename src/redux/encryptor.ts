import CryptoJS from 'crypto-js';
import { createTransform } from 'redux-persist';

const ababagalamaga = 'a-b-a-b-a-g-a-l-a-m-a-g-a';

export const encryptor = createTransform(
    inboundState => {
        if (!inboundState) return inboundState;
        const cryptedText = CryptoJS.AES.encrypt(JSON.stringify(inboundState), ababagalamaga);
        return cryptedText.toString();
    },
    outboundState => {
        if (!outboundState) return outboundState;
        const bytes = CryptoJS.AES.decrypt(outboundState as string, ababagalamaga);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);

        return JSON.parse(decrypted);
    },
);
