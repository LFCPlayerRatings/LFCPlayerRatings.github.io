window.onload = function () {
    const ctx = [];
    const charts = [];
    ctx.push(document.getElementById('canvas').getContext('2d'));
    ctx.push(document.getElementById('canvas2').getContext('2d'));
    ctx.push(document.getElementById('canvas3').getContext('2d'));

    let i = 0;
    for(const config of configs){
        charts.push(new Chart(ctx[i], config));
        i++;
    }
};