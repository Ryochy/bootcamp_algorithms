export const fibonacciLoop = (n: number): number => {
  if (n <= 1) return n;

  let prev2 = 0;
  let prev1 = 1;
  let result = 1; // 初期値を1に設定
  for (let i = 2; i <= n; i++) {
    result = prev2 + prev1;
    prev2 = prev1;
    prev1 = result;
  }
  return result; // forループの外に移動
};
