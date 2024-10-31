{
  // learing Function
  // Normal Function
  // Arror Function

  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  add(2, 5);

  const addArrow = (num1: number, num2: number): number => num1 + num2;

  // objectffdf

  const poorUser = {
    name: "Tonmoy",
    balence: 0,
    addBalence(balence: number): string {
      return `My New Balence ${this.balence + balence}`;
    },
  };

  const arr: number[] = [1, 4, 10];
  const newArray: number[] = arr.map((elem: number) => elem * elem);
}
