var dots = []

setTimeout(print, 500);

function porticle(numParts, numSize, type) {
  if(type === "mono") {
    for(var i=1;i<=numParts;i++) {
      var dot = document.createElement('div');
      dot.classList.add('dot2');
      dot.style.height = Math.floor(Math.random()*(numSize) + 1);
      dot.style.width = dot.style.height;
      dot.style.left = Math.floor(Math.random()*(2000) + 0)
      dot.style.top = Math.floor(Math.random()*(2000) + 0)
      dot.style.opacity = Math.random()*(1) + 0;
      dot.style.color = '#000';
      dot.style.border = `1px solid ${dot.style.color}`;
      dot.style.backgroundColor = dot.style.color;
      dot.style.ZIndex = Math.random()*(1000) - 100;
      dots.push(dot);
    }
  }
  else if(type === "mix") {
    for(var i=1;i<=numParts/4;i++) {
      var dot = document.createElement('div');
      dot.classList.add('dot');
      dot.style.height = Math.floor(Math.random()*(numSize) + 1);
      dot.style.width = dot.style.height;
      dot.style.left = Math.floor(Math.random()*(2000) + 0)
      dot.style.top = Math.floor(Math.random()*(2000) + 0)
      dot.style.opacity = Math.random()*(1) + 0;
      dot.style.color = `rgb(${Math.floor(Math.random()*(255) + 0)}, ${Math.floor(Math.random()*(255) + 0)}, ${Math.floor(Math.random()*(255) + 0)})`;
      dot.style.border = `1px solid ${dot.style.color}`;
      dot.style.backgroundColor = dot.style.color;
      dot.style.ZIndex = Math.random()*(1000) - 100;
      dots.push(dot);
    }
    for(var i=1;i<=numParts/4;i++) {
      var dot = document.createElement('div');
      dot.classList.add('dot1');
      dot.style.height = Math.floor(Math.random()*(numSize) + 1);
      dot.style.width = dot.style.height;
      dot.style.left = Math.floor(Math.random()*(2000) + 0)
      dot.style.top = Math.floor(Math.random()*(2000) + 0)
      dot.style.opacity = Math.random()*(1) + 0;
      dot.style.color = `rgb(${Math.floor(Math.random()*(255) + 0)}, ${Math.floor(Math.random()*(255) + 0)}, ${Math.floor(Math.random()*(255) + 0)})`;
      dot.style.border = `1px solid ${dot.style.color}`;
      dot.style.backgroundColor = dot.style.color;
      dot.style.ZIndex = Math.random()*(1000) - 100;
      dots.push(dot);
    }
    for(var i=1;i<=numParts/2;i++) {
      var dot = document.createElement('div');
      dot.classList.add('dot2');
      dot.style.height = Math.floor(Math.random()*(numSize) + 1);
      dot.style.width = dot.style.height;
      dot.style.left = Math.floor(Math.random()*(2000) + 0)
      dot.style.top = Math.floor(Math.random()*(2000) + 0)
      dot.style.opacity = Math.random()*(1) + 0;
      dot.style.color = '#000';
      dot.style.border = `1px solid ${dot.style.color}`;
      dot.style.backgroundColor = dot.style.color;
      dot.style.ZIndex = Math.random()*(1000) - 100;
      dots.push(dot);
    }
  }
  else if(type === "color") {
    for(var i=1;i<=numParts/2;i++) {
      var dot = document.createElement('div');
      dot.classList.add('dot');
      dot.style.height = Math.floor(Math.random()*(numSize) + 1);
      dot.style.width = dot.style.height;
      dot.style.left = Math.floor(Math.random()*(2000) + 0)
      dot.style.top = Math.floor(Math.random()*(2000) + 0)
      dot.style.opacity = Math.random()*(1) + 0;
      dot.style.color = `rgb(${Math.floor(Math.random()*(255) + 0)}, ${Math.floor(Math.random()*(255) + 0)}, ${Math.floor(Math.random()*(255) + 0)})`;
      dot.style.border = `1px solid ${dot.style.color}`;
      dot.style.backgroundColor = dot.style.color;
      dot.style.ZIndex = Math.random()*(1000) - 100;
      dots.push(dot);
    }
    for(var i=1;i<=numParts/2;i++) {
      var dot = document.createElement('div');
      dot.classList.add('dot1');
      dot.style.height = Math.floor(Math.random()*(numSize) + 1);
      dot.style.width = dot.style.height;
      dot.style.left = Math.floor(Math.random()*(2000) + 0)
      dot.style.top = Math.floor(Math.random()*(2000) + 0)
      dot.style.opacity = Math.random()*(1) + 0;
      dot.style.color = `rgb(${Math.floor(Math.random()*(255) + 0)}, ${Math.floor(Math.random()*(255) + 0)}, ${Math.floor(Math.random()*(255) + 0)})`;
      dot.style.border = `1px solid ${dot.style.color}`;
      dot.style.backgroundColor = dot.style.color;
      dot.style.ZIndex = Math.random()*(1000) - 100;
      dots.push(dot);
    }
  }
}

function print() {
  for(dot in dots) {
    console.log(dots[dot]);
    document.body.appendChild(dots[dot]);
  }
}
