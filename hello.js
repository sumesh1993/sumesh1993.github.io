var x = document.createElement("IFRAME");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const widgetId = urlParams.get('widgetId')

x.setAttribute("src", "https://124b-106-51-64-99.in.ngrok.io/?widgetId="+widgetId);
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
