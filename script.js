function random_value(secret_value) {
  let rand_number = Math.floor(Math.random() * 1000) + 1;
  return "Random value is " + (10 * secret_value * rand_number);
}

document.getElementById("result").innerHTML = random_value(1589);
