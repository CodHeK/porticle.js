var dots = []

setTimeout(print, 500);

function porticle(n) {
  for(var i=1;i<=n;i++) {
    var dot = document.createElement('div');
    dot.classList.add('dot');
    dot.setAttribute("id", i);
    dot.style.left = Math.floor(Math.random()*(1200) + 0)
    dot.style.top = Math.floor(Math.random()*(1200) + 0)
    dot.style.opacity = Math.random()*(1) + 0;
    dot.style.color = `rgb(${Math.floor(Math.random()*(255) + 0)}, ${Math.floor(Math.random()*(255) + 0)}, ${Math.floor(Math.random()*(255) + 0)})`;
    dot.style.border = `1px solid ${dot.style.color}`;
    dot.style.backgroundColor = dot.style.color;
    dot.style.ZIndex = Math.random()*(1000) - 100;
    dots.push(dot);
  }
}

function print() {
  for(dot in dots) {
    console.log(dots[dot]);
    document.body.appendChild(dots[dot]);
  }
}
