 /*

  Forma proverava da li su uneti inputi za ime, prezime,  broj godina i email.

  Osnovna cena leta je 50 eur

  Znaci ako korisnik nista ne izabere nega ostavi sve po default-u cena je 50eur

      STOLOVI - nema dodatka na cenu
      KOPAONIK - + 10eur
      ZLATIBOR - + 20eur

      trajanje leta

      15 min - nema dodatka na cenu
      30 min -  + 30 eur
      1 h -     + 60 eur

      usb

      ne - nema dodatka na cenu
      da - 10 eur



      Znaci npr Zlatibor - 1h i da usb =  50 + 20 + 60 + 10 = 140 eur
    	


  */

 $(document).ready(function () {
    var workers = [];

    //zakazite dugme i provera validnosti
    $("#zakazite").click(function () {
      var firstName = $("#firstName").val();
      var surname = $("#surname").val();
      var brojGodina = $("#wyears").val();
      var email = $("#email").val();
      if (!isValid(firstName, surname, brojGodina, email)) {	
        return;
      } else {
		  $("#myModal1").modal();
	  }

      var fullName = surname + " " + firstName;
      var godineStarosti = parseInt(brojGodina);
      var useUsb = $("#usb").val();
      var uzletiste = $("#uzletiste").val();
      var trajanjeLeta = $("#duzinaLeta").val();
      var tandem = countTandem(
        uzletiste,
        trajanjeLeta,
        useUsb
      );
      workers.push({
        name: fullName,
        godineStarosti: godineStarosti,
        uzletiste: uzletiste,
        tandem: tandem,
        email: email
      });
   
    });

    //ova f-ja samo ispisuje rezervaciju
    $("#showWorkersBtn").click(function () {
      $("#workers").empty();
      $("#workers").append(
        '<table class="table table-striped"><tr><th>Name</th><th>Cena/EUR</th></tr></table>'
      );
      workers.sort(function (w1, w2) {
        return w2.tandem - w1.tandem;
      });
      for (var i = 0; i < workers.length; i++) {
        $("#workers table").append(
          "<tr><td>" +
          workers[i].name +
          "</td>" +
          "<td>" +
          workers[i].tandem.toFixed(2) +
          "</td></tr>"
        );
      }
    });

    // proracun rezervacije
    function countTandem(uzletiste, duzinaLeta, usb) {
      var baseTandem = 50;
      //var raise = baseTandem * godineStarosti;
      var mainTandem = baseTandem;
      var useUSB = withUSB(usb);
      var coeficient = uzletisteCoeficient(uzletiste);
      var duzina = trajanjeLeta(duzinaLeta);
      return mainTandem * coeficient + duzina + useUSB;
    }

    function withUSB(usb) {
      switch (usb) {
        case "da":
          return 10;
        default:
          return 0;
      }
    }

    function uzletisteCoeficient(uzletiste) {
      switch (uzletiste) {
        case "zlatibor":
          return 1.4;
        case "kopaonik":
          return 1.2;
        default:
          return 1;
      }
    }

    function trajanjeLeta(duzina) {
      switch (duzina) {
        case "30min":
          return 30;
        case "1h":
          return 60;
        default:
          return 0;
      }
    }

    //proverava da li su unosi prazni i da li je broj godina broj i da li je veci od 0
    function isValid(firName, sname, wYears, email) {
      if (
        firName.length == 0 ||
        sname.length == 0 ||
        wYears.length == 0 ||
        email.length == 0
      ) {
		  $("#myModalZvezda").modal();
        return false;
      }
      var n = parseInt(wYears);
      if (isNaN(n) || n < 0) {
		  $("#myModalBroj").modal();
        return false;
      }
      return true;
    }
  });




  function potvrdi() {
    var ste = document.getElementById('emailLoc').value;


    if (localStorage.getItem('emailLoc') === null) {
      localStorage.setItem('emailLoc', ste);
       $("#myModalLoc1").modal();
    } else if (ste === localStorage.emailLoc) {
       $("#myModalLoc2").modal();
    } else {
       $("#myModalLoc3").modal();

    }
  }

