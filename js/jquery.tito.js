(function ( $ ) {

  $.tito = function(event_url) {

    var base_url = [$.tito.base_url(), event_url].join('/');

    var methods = [
      {
        name: 'releases',
        url: '/releases/current.json',
        process: function(release_ids) {
          var data = {};

          release_ids = release_ids || [];

          if (release_ids.length > 1) {
            data.release_ids = release_ids.join(',');
          } else {
            data.release_id = release_ids[0];
          }

          return data;
        }
      }
    ];

    $.each(methods, $.proxy(function(index, method) {
      this[ method.name ] = function() {
        var url = base_url + method.url,
            data = method.process ? method.process.apply(null, arguments) : {};

        return $.ajax({
          url: url,
          data: data,
          dataType: "jsonp"
        });
      };
    }, this));

    return this;
  };

  $.tito.base_url = function() {
    return $.tito.dev === true ? 'http://api.tito.dev' : 'https://api.tito.io';
  };

  $.tito.start = function() {
    window.TitoMachine={};window.TitoMachine.serialize=function(e){if(e&&"FORM"===e.nodeName){var t,n,i=[];for(t=e.elements.length-1;t>=0;t-=1)if(""!==e.elements[t].name)switch(e.elements[t].nodeName){case"INPUT":switch(e.elements[t].type){case"text":case"hidden":case"password":case"button":case"reset":case"submit":i.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value));break;case"checkbox":case"radio":e.elements[t].checked&&i.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value));break;case"file":}break;case"TEXTAREA":i.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value));break;case"SELECT":switch(e.elements[t].type){case"select-one":i.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value));break;case"select-multiple":for(n=e.elements[t].options.length-1;n>=0;n-=1)e.elements[t].options[n].selected&&i.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].options[n].value))}break;case"BUTTON":switch(e.elements[t].type){case"reset":case"submit":case"button":i.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value))}}return i.join("&")}},window.TitoMachine.contentLoaded=function(e){/in/.test(document.readyState)?setTimeout("window.TitoMachine.contentLoaded("+e+")",9):e()},function(){TitoMachine.mobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},TitoMachine.load=function(e,t){return TitoMachine.iframe.style.display="block",TitoMachine.iframe.style.zIndex=10000,TitoMachine.iframe.contentWindow.postMessage?(TitoMachine.defaultOverflow=document.getElementsByTagName("body")[0].style.overflow,document.getElementsByTagName("body")[0].style.overflow="hidden",TitoMachine.iframe.contentWindow.postMessage({formdata:t,action:e},"*")):void 0},TitoMachine.contentLoaded(function(){var e;return window.TitoMachine.iframe=document.createElement("iframe"),TitoMachine.iframe.style.position="fixed",TitoMachine.iframe.style.top=0,TitoMachine.iframe.style.bottom=0,TitoMachine.iframe.style.right=0,TitoMachine.iframe.style.left=0,TitoMachine.iframe.style.width="100%",TitoMachine.iframe.style.height="100%",TitoMachine.iframe.style.border="none",TitoMachine.iframe.style.margin=0,TitoMachine.iframe.setAttribute("allowtransparency",!0),TitoMachine.iframe.style.display="none",(e=document.getElementById("tito-tickets-form"))&&(TitoMachine.iframe.src=e.action,TitoMachine.src=TitoMachine.iframe.src,document.body.appendChild(TitoMachine.iframe)),window.onmessage=function(e){if("TitoMachine.close"===e.data.action){TitoMachine.iframe.style.display="none",TitoMachine.iframe.src=TitoMachine.src,document.getElementsByTagName("body")[0].style.overflow=TitoMachine.defaultOverflow;try{if(window.Backbone&&"beta.tito.io"===document.location.host)return Backbone.history.navigate(e.data.url)}catch(t){return null}}}})}.call(this);
  };

}( jQuery ));
