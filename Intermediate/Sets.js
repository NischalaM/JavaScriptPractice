let num_set = new Set([100, 200, 300, 400, 500]);

num_set.delete(200);
num_set.delete(400);
num_set.add(1000);

for (let value of num_set.values()) {
    console.log(value);
}
