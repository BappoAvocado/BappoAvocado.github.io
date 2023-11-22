const canvas = document.getElementById("Truls-figur")
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#FAF9F6";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        


        ctx.beginPath();
        ctx.rotate((20 * Math.PI) / 180);
          ctx.ellipse(120, 65, 90, 50, 0, 0, 2 * Math.PI);
          ctx.fillStyle = "black";
          ctx.fill();
          ctx.closePath();
          
        ctx.beginPath();
          ctx.ellipse(120, 65, 80, 40, 0, 0, 2 * Math.PI);
          ctx.fillStyle = "#F39C12";
          ctx.fill();
          ctx.closePath();

      
        ctx.beginPath();
        ctx.rotate((-20 * Math.PI) / 180)
          ctx.ellipse(90, 97, 22, 35, 0, 0, 2 * Math.PI);
          ctx.fillStyle = "#7DCEA0";
          ctx.fill();
          ctx.closePath(); 

        ctx.beginPath();
          ctx.ellipse(90, 97, 7, 30, 0, 0, 2 * Math.PI);
          ctx.fillStyle = "black";
          ctx.fill();
          ctx.closePath();