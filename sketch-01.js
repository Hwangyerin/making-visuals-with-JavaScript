const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080,1080],
  // dimensions: 'A4',
  // pixelsPerInch: 300,
  // orientation: 'landscape'
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#fff7ed';
    context.fillRect(0, 0, width, height);
    // context.lineWidth = width * 0.01;
    context.lineWidth = width * 0.01;
    context.strokeStyle = '#ccb999'

    const w = width * 0.10;
    const h = height * 0.10;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;

    const off = width * 0.02;
    let x, y;

    const circleColors = ['#F12D05','#C9B74A','#DDDDE2','#6DB8BF','#F27202','#EE6A93']
    const RectColors = ['#F49305','#E1858E','#A8BA26','#E63A26','#E1B5D2','#9EC6A9']
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;
        context.beginPath();
        context.rect(x, y, w, h);
        context.fill();


        if (Math.random() > 0) {
          const color = circleColors[Math.floor(Math.random()*circleColors.length)]
          context.beginPath();
          context.fillStyle = color;
          context.arc(x + w/2, y + h/2, w/3,0,2*Math.PI); //ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise)
          context.fill();
          
          context.fillStyle = RectColors[Math.floor(Math.random()*RectColors.length)] //사각형 컬러 되돌려놓기


        }
      }
    }
  };
};

canvasSketch(sketch, settings);


