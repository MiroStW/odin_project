function tribonacci(signature, n) {
  const result = [];
  for (let i = 0; i < Math.min(n, signature.length); i++) {
    result.push(signature[i]);
  }
  if (n > signature.length) {
    for (let i = 3; i < n; i++) {
      result.push(result[i - 1] + result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

console.log(tribonacci([1, 1, 1], 10));
