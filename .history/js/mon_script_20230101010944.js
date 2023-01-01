console.log('coucou')

const SignaturePad = require('signature_pad');

const canvas = document.querySelector('#signature-canvas');
const signaturePad = new SignaturePad(canvas,{
    minWidth: 5,
    maxWidth: 10,
    penColor: "rgb(66, 133, 244)"
});

signaturePad.addEventListener("beginStroke", () => {
    console.log("Signature started");
  }, { once: true });
  
let signatureData = null;

signaturePad.onEnd = function() {
  signatureData = signaturePad.toDataURL();
};

document.querySelector('#clear-button').addEventListener('click', function() {
  signaturePad.clear();
  signatureData = null;
});
