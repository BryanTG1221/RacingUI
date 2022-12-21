export function controlsBy(params) {
    if(params != undefined) {
        document.querySelector('#btnSave').style.display = 'none';
        document.querySelector('#btnPatch').style.display = 'block';
        document.querySelector('#btnDelete').style.display = 'block';
    }
    else {
        document.querySelector('#btnSave').style.display = 'block';
        document.querySelector('#btnPatch').style.display = 'none';
        document.querySelector('#btnDelete').style.display = 'none';
    }
}