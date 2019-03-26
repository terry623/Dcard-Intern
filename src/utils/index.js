export const drawImage = id => {
  const canvas = document.querySelector(`#${id}`);
  const ctx = canvas.getContext('2d');
  ctx.strokeStyle = '#BADA55';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 15;
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let hue = 0;

  const draw = e => {
    if (!isDrawing) return;

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue = hue + 1;
    if (hue >= 360) hue = 0;
  };

  canvas.addEventListener('mousedown', e => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', () => (isDrawing = false));
  canvas.addEventListener('mouseout', () => (isDrawing = false));
};
