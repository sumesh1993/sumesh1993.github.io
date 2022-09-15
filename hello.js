var x = document.createElement("IFRAME");
x.setAttribute("src", "https://fd9e-2401-4900-1f26-287-8048-d29b-be6b-97d0.in.ngrok.io");
x.setAttribute('id', 'sumesh-iframe');
x.setAttribute('sandbox',"allow-same-origin allow-scripts");
x.style.position='fixed';
x.style.zIndex='99999999999';
x.style.bottom=0;
x.style.right=0;
x.style.border='none';
document.body.appendChild(x);

window.addEventListener('message', function (e) {
    const data = JSON.parse(e.data);
    if(data?.source == 'iframe') {
        x.style.width=data?.width;
        x.style.height=data?.height;
    }
});
