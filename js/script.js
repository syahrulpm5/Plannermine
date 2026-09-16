const appName = "PlannerMIne";
let completedTasks = 2;

completedTasks = completedTasks + 1;

console.log(appName);
console.log(completedTasks);

function hitungProgress(completedTasks, totalTasks) {
    return completedTasks / totalTasks * 100;
}

let progress = hitungProgress(6, 8);

console.log(progress);

if (progress === 100) {
    console.log("Selesai!");
}