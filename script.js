function random_value(secret_value) {
  let rand_number = Math.floor(Math.random() * 50000) + 10;
  return " " + (secret_value * rand_number);
}
