let abc = document.getElementById("shiva");
        function darkmode(){
            abc.style.color='white';
            abc.style.backgroundColor= 'black';
            document.getElementById('darkmode').innerHTML = 'Light Mode';
            document.getElementById('darkmode').onclick=lightMode;
        }
        function lightMode(){
            abc.style.color='black';
            abc.style.backgroundColor= 'white';
            document.getElementById('darkmode').innerHTML = 'DarkMode';
            document.getElementById('darkmode').onclick=darkmode;
        }