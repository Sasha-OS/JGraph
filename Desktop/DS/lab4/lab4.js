const matrix = [
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 1], 
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], 
  [0, 0, 0, 0, 1, 1, 0, 0, 1, 0],  
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
   ];



const test = [
  [0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0],
  [1, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0, 0],
  [0, 0, 1, 1, 0, 0],
];

let arr, ctx, graph1, last, alert, k = 1;

const draw = () => {
  const canvas1 = document.getElementById('graph1');
  const canvas2 = document.getElementById('tree');
  alert = document.getElementById('alert');

  if (canvas1.getContext && canvas2.getContext) {
    const container1 = document.getElementById('graph1_info');
    ctx = canvas1.getContext('2d');
    const ctx2 = canvas2.getContext('2d');
    graph1 = new Graph(ctx, test, true, 20);
    const data = BFS(graph1, 6);
    const tree = data.tree;
    arr = data.arr;
    const graph2 = new Graph(ctx2, tree, true, 10);

    graph1.triangle();
    graph1.info(container1);
    graph2.triangle();
    step();
  }
};

const step = () => {
  if (k > test.length) {
    alert.style.display = 'block';
    return;
  }

  if (typeof(last) == 'number') {
    ctx.restore();
    ctx.clearRect(0, 0, 1000, 1000);
    graph1.triangle();
  }

  const curr = arr.indexOf(k);
  ctx.save();
  ctx.strokeStyle = 'green';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(graph1.vertices[curr].x, graph1.vertices[curr].y, 20, 0, 2 * Math.PI);
  ctx.stroke();
  k++;
  last = curr;
};

const reset = () => {
  alert.style.display = 'none';
  k = 1;
  step();
};