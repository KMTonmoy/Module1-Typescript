{
  //! Referance Type ---> Object

  const user: {
    firstName: string;
    middleName?: string;
    lastName: string;
    isMarried: boolean;
    readonly Company: "N/A"; // Litaral Type
  } = {
    firstName: "Tasrik",
    lastName: "Ahamed",
    isMarried: false,
    Company: "N/A",
  };

  console.log(user);
  // user.Company = "Ts";
}
