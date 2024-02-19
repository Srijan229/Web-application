    
   function cgpacalculation()
        {   
            var a=parseFloat(document.getElementById("first").value);
            var b=parseFloat(document.getElementById("second").value);
            var c=parseFloat(document.getElementById("third").value);
            var d=parseFloat(document.getElementById("fourth").value);
            var e=parseFloat(document.getElementById("fifth").value);
            var f=parseFloat(document.getElementById("sixth").value);
            var g=parseFloat(document.getElementById("seventh").value);
            var h=parseFloat(document.getElementById("eight").value);
            var num=0,dno=0;
            if(isFinite(a) )
            {
                num=num+a*26;
                dno=dno+26;
            }
            if(isFinite(b))
            {
                num=num+b*25;
                dno=dno+25;
            }
            if(isFinite(c))
            {
                num=num+c*25;
                dno=dno+25;
            }
            if(isFinite(d))
            {
                num=num+d*26;
                dno=dno+26;
            }
            if(isFinite(e))
            {
                num=num+e*25;
                dno=dno+25;
            }
            if(isFinite(f))
            {
                num=num+f*26;
                dno=dno+26;
            }
            if(isFinite(g))
            {
                num=num+g*24;
                dno=dno+24;
            }
            if(isFinite(h))
            {
                num=num+h*23;
                dno=dno+23;
            }
            cgpa=num/dno;
            document.getElementById("result").value=cgpa.toFixed(2); 

            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawVisualization);
      
            function drawVisualization() {
              // Some raw data (not necessarily accurate)
              var data = google.visualization.arrayToDataTable([
                ['Sem'  , 'Sgpa'],
                ['sem 1',  a],
                ['sem 2',  b],
                ['sem 3',  c],
                ['sem 4',  d],
                ['sem 5',  e],
                ['sem 6',  f],
                ['sem 7',  g],
                ['sem 8',  h],
              ]);
      
              var options = {
                title : 'Graphical Representation Of Results',
                vAxis: {title: 'Sgpa'},
                hAxis: {title: 'Sem'},
                seriesType: 'bars',
                series: {5: {type: 'line'}}
              };
      
              var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
              chart.draw(data, options);
              google.charts.load('current', {'packages':['corechart']});
              google.charts.setOnLoadCallback(drawVisualization);
        
              function drawVisualization() {
                // Some raw data (not necessarily accurate)
                var data = google.visualization.arrayToDataTable([
                  ['Semister', 'Sgpa'],
                  ['1',  a],
                  ['2',  b],
                  ['3',  c],
                  ['4',  d],
                  ['5',  e],
                  ['6',  f],
                  ['7',  g],
                  ['8',  h],
                ]);
        
                var options = 
                {
                  title : 'Your Results Over The Years',
                  vAxis: {title: 'Sgpa'},
                  hAxis: {title: 'Sem'},
                  seriesType: 'bars',
                  series: {5: {type: 'line'}}
                };
        
                var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
                chart.draw(data, options);
              }
            }    
        }