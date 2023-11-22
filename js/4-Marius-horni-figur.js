const el = document.getElementById('myCanvas');
   const ctx = el.getContext('2d') ; 

    

  ctx.beginPath();

  const x1 = 100, y1 = 100, r1= 100;
  ctx.arc(x1, y1, r1, 0, Math.PI*2);
  ctx.fillStyle = "#e7a749";
  ctx.fill();
  ctx.stroke;

  ctx.beginPath();
  ctx.rect(x1 -100, y1 + 5, 200, 20) ;
  ctx.fillStyle = "brown";
  ctx.fill();
  ctx.stroke;

  ctx.beginPath();
  ctx.rect(x1 - 100, y1-6, 200, 14) ;
  ctx.fillStyle = "gold" ;
  ctx.fill() ;
  ctx.stroke ;

  ctx.beginPath();
  ctx.rect(x1 - 100, y1-16, 200, 10) ;
  ctx.fillStyle = "green" ;
  ctx.fill() ;
  ctx.stroke ;


  ctx.beginPath() ;
  ctx.arc(x1, y1 - 80, 4, 0, Math.PI*2) ;
  ctx.fillStyle = "white" ;
  ctx.fill() ;
  ctx.stroke() ;

  ctx.beginPath() ;
  ctx.arc(x1 -20, y1 - 80, 4, 0, Math.PI*2) ;
  ctx.fillStyle = "white" ;
  ctx.fill() ;
  ctx.stroke() ;

  ctx.beginPath() ;
  ctx.arc(x1 +20, y1 - 80, 4, 0, Math.PI*2) ;
  ctx.fillStyle = "white" ;
  ctx.fill() ;
  ctx.stroke() ;

  ctx.beginPath() ;
  ctx.arc(x1 +10, y1 - 70, 4, 0, Math.PI*2) ;
  ctx.fillStyle = "white" ;
  ctx.fill() ;
  ctx.stroke() ;

  ctx.beginPath() ;
  ctx.arc(x1 +10, y1 - 90, 4, 0, Math.PI*2) ;
  ctx.fillStyle = "white" ;
  ctx.fill() ;
  ctx.stroke() ;

  ctx.beginPath() ;
  ctx.arc(x1 - 10, y1 - 70, 4, 0, Math.PI*2) ;
  ctx.fillStyle = "white" ;
  ctx.fill() ;
  ctx.stroke() ;

  ctx.beginPath() ;
  ctx.arc(x1 -10, y1 - 90, 4, 0, Math.PI*2) ;
  ctx.fillStyle = "white" ;
  ctx.fill() ;
  ctx.stroke() ;