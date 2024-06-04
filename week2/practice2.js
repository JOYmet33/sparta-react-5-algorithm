// 문제 정의:
// 주어진 문자열에서 각 단어를 반전시키시오. 단어의 순서는 그대로 유지되어야 합니다.

// 예시:

// 입력: "the sky is blue"
// 출력: "eht yks si eulb"

// 입력: "hello world"
// 출력: "olleh dlrow"

function reverseEachWord(s) {
  let newArray = s.split(" ");
  let reversedArray = newArray.map(
    // 문자열 쪼개서 배열로 만들고, 배열의 순서를 바꾸고, 배열을 다시 문자열로 합치는 것
    // 문자열 쪼개서 배열로 만들기 = [...element]
    // 배열의 순서를 바꾸기 = reverse()
    // 배열을 다시 문자열로 합치기 = join("")
    (element) => [...element].reverse().join("")
    // 다른 방법(문자열 쪼개서 배열로 만들기) : element.split("")
    // element.split("").reverse().join("")
  );
  let joinedString = reversedArray.join(" ");
  return joinedString;
}

function testReverseEachWord() {
  const testCases = [
    { input: "the sky is blue", expected: "eht yks si eulb" },
    { input: "hello world", expected: "olleh dlrow" },
    { input: "a b c d", expected: "a b c d" },
    { input: "Palindrome", expected: "emordnilaP" },
    { input: "I love coding", expected: "I evol gnidoc" },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = reverseEachWord(input);
      if (result !== expected)
        throw new Error(`Expected ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출
testReverseEachWord();
