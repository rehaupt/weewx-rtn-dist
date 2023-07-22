      function addZero(i) {
          if (i < 10) {
              i = "0" + i;
          }
          return i;
      }
      function isEven(n) {
         return n % 2 == 0;
      }

      var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var d = new Date();
      var localDate = addZero(d.getDate());
      var localMonth = addZero(d.getMonth()+1);
      var curHour = addZero(d.getHours());
      if (d.getHours() < 12) {
        curHour = addZero(3);
      }
      else {
        curHour = 15;
      }
      if ((d.getHours() < 21) && (d.getHours() >= 15)) {
        var meteoPeriod = '12';
      }
      else if ((d.getHours() < 24) && (d.getHours() >= 21)) {
        var meteoPeriod = '00';
      }
      else if (d.getHours() < 12) {
        var meteoPeriod = '00';
      }
      else if ((d.getHours() < 15) && (d.getHours() >= 12)) {
        var meteoPeriod = '12';
      }

      var cdsky_adjDT = d.getFullYear().toString()+localMonth.toString()+localDate.toString()+curHour.toString();
      var str = document.getElementById("cdskygif").href;
      var res = str.replace(/DT/gi, cdsky_adjDT);

      document.getElementById("cdskygif").href = res;
      document.getElementById("cdskyimg").src = res;

      str = document.getElementById("ecmwfgif").src;
      res = str.replace(/PERIOD/gi, meteoPeriod);
      document.getElementById("ecmwfgif").src = res;

      str = document.getElementById("ecmwf").href;
      res = str.replace(/PERIOD/gi, meteoPeriod);
      document.getElementById("ecmwf").href = res;
