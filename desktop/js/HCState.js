
/*
$('.addDevice').on('click', function (event) {
  var fibaroId = $(this).attr('data-fibaro_id');
  var rowId = $(this).closest('tr').index();

  if(fibaroId){

    $.ajax({
      type: 'POST',
      url: 'plugins/homecenter/core/ajax/homecenter.ajax.php',
      data: {
          action: 'DefineEqLogic',
          fibaroId : fibaroId,
      },
      dataType: 'json',
      global: false,
      error: function (request, status, error) {     
          bootbox.alert("ERREUR 'readDevConfig' !<br>status="+status+"<br>error="+error);
      },
      success: function (json_res) {
  
        res = JSON.parse(json_res.result);
        eqLogics = Array(res.eqLogic);
  
        jeedom.eqLogic.save({
          type: eqType,
          eqLogics: eqLogics, 
          error: function (error) {
              $('#div_alert').showAlert({message: error.message, level: 'danger'});
          },
          success: function (_data) {
            var jeedom = '.jeedomId:eq(' + rowId + ')';
            var separator = '.separatorId:eq(' + rowId + ')';
            $(jeedom).text(_data.id);
            $(separator).show();
            
            var jeedom = '.jeedomName:eq(' + rowId + ')';
            var separator = '.separatorName:eq(' + rowId + ')';    
            $(jeedom).text(_data.name);
            $(separator).show();

            var jeedom = `.jeedomRoom:eq(${rowId})`;
            var separator = `.separatorRoom:eq(${rowId})`;    
            $(jeedom).text(_data.object_id);
            $(separator).show();
        
            var jeedom = `.jeedomState:eq(${rowId})`;
            $(jeedom).text('{{jumelé}}');
            $(jeedom).removeClass("label-warning").addClass("label-success");
        
            var jeedom = `.fa-plus-circle:eq(${rowId})`;
            //$(jeedom).css({ 'color': '#80808073' }); 
            $(this).removeClass("cursor").removeClass("addDevice");
            $(this).attr('data-fibaro_id', null);    
           
            loadPage('index.php?v=d&m=homecenter&p=homecenter' + '&saveSuccessFull=1')
            $('#div_alert').showAlert({message: '{{Sauvegarde effectuée avec succès}}', level: 'success'})            

          }

        });
        
      }
    });
  
  }

});
*/

// Sauvegarde des modules 
$('#bt_save').on('click', function (event) {
  event.preventDefault();
  var fibaroIds = $("#table_extratFibaro input[type=checkbox]:checked").map(function(){
    return $(this).attr('data-fibaro_id');
  }).get(); 

  console.log(fibaroIds);

  if(fibaroIds){

    $.ajax({
      type: 'POST',
      url: 'plugins/homecenter/core/ajax/homecenter.ajax.php',
      data: {
          action: 'DefineEqLogic',
          fibaroIds : fibaroIds,
      },
      dataType: 'json',
      global: false,
      error: function (request, status, error) {     
          bootbox.alert("ERREUR 'readDevConfig' !<br>status="+status+"<br>error="+error);
      },
      success: function (json_res) {
        if(isset(json_res))
          res = JSON.parse(json_res.result);
          eqLogics = res.eqLogics

          console.log(eqLogics);

          jeedom.eqLogic.save({
            type: eqType,
            eqLogics: eqLogics, 
            error: function (error) {
                $('#div_alert').showAlert({message: error.message, level: 'danger'});
            },
            success: function (_data) {
              console.log(_data);
              //loadPage('index.php?v=d&m=homecenter&p=homecenter' + '&saveSuccessFull=1')
              //$('#div_alert').showAlert({message: '{{Sauvegarde effectuée avec succès}}', level: 'success'})            
            }
        
          });          
      }
    });
  }
  
});

// Tri dynamique de tableau HTML
// Auteur : Copyright © 2015 - Django Blais
// Source : http://trucsweb.com/tutoriels/Javascript/tableau-tri/
// Sous licence du MIT.
function twInitTableau() {
  // Initialise chaque tableau de classe « avectri »
      [].forEach.call( document.getElementsByClassName("avectri"), function(oTableau) {
      var oEntete = oTableau.getElementsByTagName("tr")[0];
      var nI = 1;
    // Ajoute à chaque entête (th) la capture du clic
    // Un picto flèche, et deux variable data-*
    // - Le sens du tri (0 ou 1)
    // - Le numéro de la colonne
    [].forEach.call( oEntete.querySelectorAll("th"), function(oTh) {
        oTh.addEventListener("click", twTriTableau, false);
        oTh.setAttribute("data-pos", nI);
        if(oTh.getAttribute("data-tri")=="1") {
          oTh.innerHTML += "<span class=\"flecheDesc\"></span>";
        } else {
          oTh.setAttribute("data-tri", "0");
          oTh.innerHTML += "<span class=\"flecheAsc\"></span>";
        }
        // Tri par défaut
        if (oTh.className=="selection") {
          oTh.click();
        }
        nI++;
    });
  });
}

function twInit() {
  twInitTableau();
}
function twPret(maFonction) {
  if (document.readyState != "loading"){
    maFonction();
  } else {
    document.addEventListener("DOMContentLoaded", maFonction);
  }
}
twPret(twInit);

function twTriTableau() {
  // Ajuste le tri
  var nBoolDir = this.getAttribute("data-tri");
  this.setAttribute("data-tri", (nBoolDir=="0") ? "1" : "0");
  // Supprime la classe « selection » de chaque colonne.
  [].forEach.call( this.parentNode.querySelectorAll("th"), function(oTh) {oTh.classList.remove("selection");});
  // Ajoute la classe « selection » à la colonne cliquée.
  this.className = "selection";
  // Ajuste la flèche
  this.querySelector("span").className = (nBoolDir=="0") ? "flecheAsc" : "flecheDesc";

  // Construit la matrice
  // Récupère le tableau (tbody)
  var oTbody = this.parentNode.parentNode.parentNode.getElementsByTagName("tbody")[0]; 
  var oLigne = oTbody.rows;
  var nNbrLigne = oLigne.length;
  var aColonne = new Array(), i, j, oCel;
  for(i = 0; i < nNbrLigne; i++) {
    oCel = oLigne[i].cells;
    aColonne[i] = new Array();
    for(j = 0; j < oCel.length; j++){
      aColonne[i][j] = oCel[j].innerHTML;
    }
  }

  // Trier la matrice (array)
  // Récupère le numéro de la colonne
  var nIndex = this.getAttribute("data-pos");
  // Récupère le type de tri (numérique ou par défaut « local »)
  var sFonctionTri = (this.getAttribute("data-type")=="num") ? "compareNombres" : "compareLocale";
  // Tri
  aColonne.sort(eval(sFonctionTri));
  // Tri numérique
  function compareNombres(a, b) {return a[nIndex-1] - b[nIndex-1];}
  // Tri local (pour support utf-8)
  function compareLocale(a, b) {return a[nIndex-1].localeCompare(b[nIndex-1]);}
  // Renverse la matrice dans le cas d’un tri descendant
  if (nBoolDir==0) aColonne.reverse();
  
  // Construit les colonne du nouveau tableau
  for(i = 0; i < nNbrLigne; i++){
    aColonne[i] = "<td>"+aColonne[i].join("</td><td>")+"</td>";
  }

  // assigne les lignes au tableau
  oTbody.innerHTML = "<tr>"+aColonne.join("</tr><tr>")+"</tr>";
}

