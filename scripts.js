var ajaxInto = ajaxInto || {};
ajaxInto = {
    settings : {
        version : '0.1'
    },
    ajax : function(url,container){
        var xmlhttp;
        var ajaxResult;
        if(window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp = new XMLHttpRequest();
          } else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
          }
            xmlhttp.onreadystatechange = function(){
                if(xmlhttp.readyState==4 && xmlhttp.status==200){
                    //document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
                    ajaxResult = xmlhttp.responseText;
                    var el = document.createElement( 'div' );
                    el.innerHTML = ajaxResult;
                    document.getElementById(container).innerHTML = ajaxResult;
                }
            };
            xmlhttp.open("GET",url,true);
            xmlhttp.send();
    },

/*
    This function checks all the dom elements for a classes
    matching the argument then returns it to be used in the findAnchor
    function
*/
    hasClass : function(el, selector){
        var className =''+ selector +'';
        if ((el.className.indexOf(selector) >= 0)) {
            return (el);
        }
        return false;
    },
/*
    This function loops through all the anchor tags and returns
    only the matching class elements. A bit like Jquery hasClass
*/
    findAnchor : function(link,container){
        var result, i,  a = document.getElementsByTagName('a');
        for(i = 0; i < a.length; i++){
          result = ajaxInto.hasClass(a[i],link);
          if (typeof result !== 'undefined'){
          this.assignAction(result,container);
        }
      }
    },

    assignAction : function(n,container){
        n.onclick = function(){
            ajaxInto.ajax(n,container);
            return false;
        };
    },

    /*Run all functions here*/
    load : function () {
        ajaxInto.findAnchor('ajax-link','ajax-content');
        ajaxInto.findAnchor('more-link','ajax-content');

    }
};

window.onload = function(){
        ajaxInto.load();
};

window.onresize = function(){

};
