var x = document.createElement("IFRAME");
x.setAttribute("src", "https://771f-103-171-98-26.in.ngrok.io/spin");
x.setAttribute('id', 'child-iframe');
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
