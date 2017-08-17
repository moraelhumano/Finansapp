var url = 'renta=1750.0&ahorro=1000.0&personales=1500.0';

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(url/*window.location.search.substring(1)*/),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

$(function () {
  var renta = getUrlParameter('renta'),
      ahorro = getUrlParameter('ahorro'),
      personales = getUrlParameter('personales');
  console.log(renta + ' ' + ahorro + ' ' + personales);
  
  /*Initialize nav menu*/
  $('.nav-item.renta').click(function () {
     $('.carousel').carousel(0);
  });
  $('.nav-item.ahorro').click(function () {
     $('.carousel').carousel(1);
  });
  $('.nav-item.personales').click(function () {
     $('.carousel').carousel(2);
  });
  
  /*Initialize carousel buttons*/
  $('[data-slide="prev"]').click(function () {
     $('.carousel').carousel('prev');
  });
  $('[data-slide="next"]').click(function () {
     $('.carousel').carousel('next');
  });
  
});


