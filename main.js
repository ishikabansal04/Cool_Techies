
		function dlgLogin(){
            window.open("index2.html");
			// var whitebg = document.getElementById("white-background");
			// var dlg = document.getElementById("dlgbox");
			// whitebg.style.display = "none";
			// dlg.style.display = "none";
		}

		function showDialogue(){
			var whitebg = document.getElementById("white-background");
			var dlg = document.getElementById("dlgbox");
			whitebg.style.display = "block";
			dlg.style.display = "block";

			var winWidth = window.innerWidth;
			var winHeight = window.innerHeight;

			dlg.style.left = (winWidth/2) - 480/2 + "px";
			dlg.style.top = "150 px";
        }
        function showFirstAid(){
            var box = document.getElementById('dlgbox');
         
            var modal=document.getElementById('simpleModal');

            var modalBtn=document.getElementById('patient');

            var closeBtn=document.getElementsByClassName('closeBtn')[0];

            modalBtn.addEventListener('click',openModal);
            closeBtn.addEventListener('click',closeModal);
          
            
            function openModal(){
                box.style.display='none';
                modal.style.display='block';

            }

            function closeModal(){
            modal.style.display='none';
            dlgLogin();
            }

        }