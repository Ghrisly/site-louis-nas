'use strict';

/* Directives */

app.directive('menu', function () {
    return {
        restrict : 'E',
        template :
     
'          <ul class=\"navbar-inverse nav nav-justified\" id=\"appleNav\">'+
'            <li class=\"active\"><a href=\"/\">Accueil</a></li>'+
'            <li class=\"dropdown\">'+
'              <a href class=\"dropdown-toggle\" data-toggle=\"dropdown\">L\'acteur&nbsp;<span class=\"caret\"></span></a>'+
'              <ul class=\"dropdown-menu\" role=\"menu\">'+
'                <li><a href=\"#\">Parcours</a></li>'+
'                <li><a href=\"#\">Infos et mensurations</a></li>'+
'                <li><a href=\"#\">Gallerie</a></li>'+
'              </ul>'+
'            </li>'+
'            <li class=\"dropdown\">'+
'              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Le musicien&nbsp;<span class=\"caret\"></span></a>'+
'              <ul class=\"dropdown-menu\" role=\"menu\">'+
'                <li><a href=\"#\">Parcours</a></li>'+
'                <li><a href=\"#\">Gallerie</a></li>'+
'                <li><a href=\"#\">Cours particuliers</a></li>'+
'                <li><a href=\"#\">Projet Cantus Hydrae</a></li>'+
'              </ul>'+
'            </li>'+
'            <li><a href=\"/contact\">Contact</a></li>'+
'          </ul>'
    };
});
