sessionStorage.setItem('indexIntro', 'No');

function myPageStatus(status){
    sessionStorage.setItem('pageStatus', status);
}

function setVisibility(divID){
    var elms = document.getElementById("mainInfo").children;
    for(var i = 0; i < elms.length; i++){
        document.getElementById(elms[i].id).classList.add('hideDisplay');
    }
    document.getElementById(divID).classList.remove('hideDisplay');
}