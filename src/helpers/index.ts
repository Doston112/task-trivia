type NotArray<T> = T extends Array<unknown> ? never : T;

export function getMutatedArray<T>(array: NotArray<T>): T[] {
  let newArr = JSON.parse(JSON.stringify(array)).map((item) => ({
    ...item,
    answered: null,
  }));

  return newArr;
}

export function isCorrectFunc(item: any): boolean {
  return item.answered === item.correct_answer.toLowerCase();
}

export function getCountAnswers(array: NotArray<any>): number {
  let count = 0;
  array.forEach((item) => {
    if (isCorrectFunc(item)) {
      count += 1;
    }
  });

  return count;
}
