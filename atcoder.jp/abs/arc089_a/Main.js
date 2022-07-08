function Main(input) {
  input = input.split('\n');
  let [_N, ...plans] = input;
  plans = plans.map(plan => plan.split(' ').map(v => parseInt(v, 10)));
  plans.pop();
  let result;
  plans.reduce((prePlan, currentPlan) => {
    const time = currentPlan[0] - prePlan[0];
    const distance = Math.abs(currentPlan[1] - prePlan[1]) + Math.abs(currentPlan[2] - prePlan[2]);
    if (distance > time || (distance % 2 != time % 2)) {
      result = "No";
      return currentPlan;
    }
    result = "Yes";
    return currentPlan;
  }, [0, 0, 0]);
  console.log(result);
}


Main(require("fs").readFileSync("/dev/stdin", "utf8"));