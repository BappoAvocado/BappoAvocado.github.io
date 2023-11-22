const el = document.getElementById('alex-canvas');
        const ctx = el.getContext('2d');

        // First circle
        ctx.beginPath();
        ctx.arc(100, 160, 45, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();

        // Second circle
        ctx.beginPath();
        ctx.arc(100, 100, 35, 0, 2 * Math.PI);
        ctx.fillStyle = 'White';
        ctx.fill();
        ctx.closePath();

        // Third circle
        ctx.beginPath();
        ctx.arc(100, 50, 25, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();

        // Fourth circle (positioned differently)
        ctx.beginPath();
        ctx.arc(90, 45, 5, 0, 2 * Math.PI); // Changed position of the last circle
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.closePath();


        ctx.rect(100,100,10,100);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.closePath();