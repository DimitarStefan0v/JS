function encodeAndDecodeMessages() {
    document.getElementById('main').addEventListener('click', onClick);
    

    function onClick(ev) {
        if (ev.target.tagName == 'BUTTON' && ev.target.textContent == 'Encode and send it') {
            const decodedText = ev.target.parentElement.querySelector('textarea');
            const encodedText = ev.target.parentElement.parentElement.querySelector('div textarea[placeholder="No messages..."]');
            encode(decodedText, encodedText);
        } else if (ev.target.tagName == 'BUTTON' && ev.target.textContent == 'Decode and read it') {
            const encodedText = ev.target.parentElement.querySelector('textarea');
            decode(encodedText);
        }
    }

    function encode(decodedText, encodedText) {
        const encoded = [];
        const message = decodedText.value;
        for (let i = 0; i < message.length; i++) {
            let currSymbol = message.charCodeAt(i);
            encoded.push(String.fromCharCode(currSymbol + 1));
        }

        decodedText.value = '';
        encodedText.value = encoded.join('');
    }

    function decode(encodedText) {
        const decoded = [];
        const message = encodedText.value;
        for (let i = 0; i < message.length; i++) {
            let currSymbol = message.charCodeAt(i);
            decoded.push(String.fromCharCode(currSymbol - 1));
        }

        encodedText.value = decoded.join('');
    }
}