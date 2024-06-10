// 문제 정의:

// 주어진 정수 배열 nums에서 두 원소의 합이 특정 값 target에 가장 가까운 경우의 합을 반환하는 함수를 작성하세요.
// 정수 배열 nums와 정수 target이 주어집니다.
// 배열에서 두 원소의 합이 target에 가장 가까운 경우의 합을 반환합니다.
// 배열은 최소 두 개의 원소를 포함하고 있습니다.

// 다음의 조건을 만족해야 합니다:

// 가장 가까운 경우가 두가지 있을 경우, 작은 값을 반환합니다.
// while 문을 사용하여 구현합니다.

// 문제에서 '가장 가까운 경우의 합'을 구하는 것은 목표값 target과 가장 가까운 값을 찾는 것을 의미합니다.
// 따라서 합이 target과 정확히 같은 경우는 이 문제의 의도에 맞지 않습니다.
// 즉, 두 원소의 합이 target과 같은 경우는 제외됩니다

// 예시:

// closestSum([1, 2, 3, 4, 5], 7); // 6 (최대한 가까운 경우: 2 + 4 = 6)
// closestSum([-1, 2, 1, -4], 1); // 0 (최대한 가까운 경우: -1 + 1 = 0)

// 함수 구현:
function closestSum(nums, target) {
  /** 문제풀이 계획
   * 모든 '두 원소의 합'을 구하고, 그 값을 빈 배열에 넣는다
   * 빈 배열의 원소 중 target과 같거나 크지 않으면서 가장 가까운 수(index)를 찾는다
   */
  let sums = [];
  let numsSum = 0;
  let answer = Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      numsSum = nums[i] + nums[j];
      // 조건1. numsSum과 target이 같지 않아야 한다.
      if (numsSum === target) {
        continue;
      }
      // 조건2. 가장 가까운 거리를 구해야 한다 - Math.abs(a-b), Infinity
      let minusNumsSum = Math.abs(numsSum - target);
      let minusAnswer = Math.abs(answer - target);
      if (minusNumsSum < minusAnswer) {
        answer = numsSum;
      }
      // 조건3. (만약 거리가 동일하다면) 둘 중 더 작은 수를 찾는다.
      if (minusNumsSum === minusAnswer && numsSum < answer) {
        answer = numsSum;
      }
    }
  }
  return answer;
}

// 테스트 코드:
function testClosestSum() {
  const testCases = [
    { nums: [1, 2, 3, 4, 5], target: 7, expected: 6 },
    { nums: [-1, 2, 1, -4], target: 1, expected: 0 },
    { nums: [10, 22, 11, 4, 5], target: 12, expected: 14 },
    { nums: [0, 0, 0, 0, 0], target: 5, expected: 0 },
    { nums: [3, 7, 8, 1], target: 100, expected: 15 },
  ];

  testCases.forEach((testCase, index) => {
    const { nums, target, expected } = testCase;
    try {
      const result = closestSum([...nums], target);
      if (result !== expected) {
        throw new Error(
          `Test case ${
            index + 1
          } failed: Expected ${expected}, but got ${result}`
        );
      }
      console.log(`Test case ${index + 1}: Passed`);
    } catch (error) {
      console.error(error.message);
    }
  });
}

// 테스트 함수 호출     'node week3/practice2.js'
testClosestSum();
