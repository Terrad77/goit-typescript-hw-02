/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

// Функція приймає рядок і не повертає значення (void)
function showMessage(message: string): void {
  console.log(message);
}

// Функція приймає два числа і повертає число
function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// Функція не приймає жодних параметрів і не повертає ніякого значення (never), програма буде припинена через генерацію помилки
function customError(): never {
  throw new Error("Error");
}

export {};
