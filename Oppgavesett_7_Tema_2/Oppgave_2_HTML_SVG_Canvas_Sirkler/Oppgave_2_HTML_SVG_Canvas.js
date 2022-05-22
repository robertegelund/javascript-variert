const sirkelCanvas = document.querySelector("#sirkelCanvas");

const ctx = sirkelCanvas.getContext("2d");

function graderTilRadianer (grader) {
    return (grader / 360) * 2 * Math.PI;
} 

ctx.arc(100, 100, 100, graderTilRadianer(0), graderTilRadianer(360), false);

ctx.fillStyle = "peachpuff";
ctx.fill(); 