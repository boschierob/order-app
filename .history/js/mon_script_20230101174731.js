const canvas = document.querySelector('#signature-canvas');
const signaturePad = new window.SignaturePad(canvas,{
    minWidth: 1,
    maxWidth: 2,
    penColor:'black'
})

const signaturePNG = () =>{signaturePad.toDataURL();} // save image as PNG