const canvas = document.querySelector('#signature-canvas');
const signaturePad = new window.SignaturePad(canvas,{
    minWidth: 5,
    maxWidth: 10,
    penColor:'black'
})