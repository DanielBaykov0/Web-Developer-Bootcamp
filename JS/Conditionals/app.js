// let random = Math.random();
// if (random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5")
//     console.log(random);
// }

// if (random >= 0.5) {
//     console.log("YOUR NUMBER IS GREATER THAN 0.5")
//     console.log(random);
// }

// const dayOfWeek = prompt("ENTER A DAY").toLowerCase();
// if (dayOfWeek === "Monday") {
//   console.log("I HATE MONDAYS!");
// } else if (dayOfWeek === "Saturday") {
//   console.log("YAY I LOVE SATURDAYS");
// } else if (dayOfWeek === "Friday") {
//   console.log("FRIDAYS ARE DECENT, ESPCIALLY AFTER WORK");
// } else {
//     console.log("MEH");
// }

// const age = 8;
// if (age < 5) {
//   console.log("You are a baby. You get in for free!");
// } else if (age < 10) {
//   console.log("You are a child. You pay $10");
// } else if (age < 65) {
//   console.log("You are an adult. You pay $20");
// } else {
//   console.log("You are a senior. You pay $10");
// }

const password = prompt("please enter a new password");
if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Valid Password");
  } else {
    console.log("Password cannot contain spaces!");
  }
} else {
  console.log("PASSWORD TOO SHORT! Must be 6+ characters");
}
