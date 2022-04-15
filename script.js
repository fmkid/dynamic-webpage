function random_value(secret_value) {
  let rand_number = Math.floor(Math.random() * 62922) + 10;
  return "Random value is " + (secret_value * rand_number);
}

document.write(random_value(1852));
