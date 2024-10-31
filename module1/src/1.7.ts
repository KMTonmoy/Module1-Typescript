{
  // spradeOparator
  // restOparator
  // distructring

  const bors1: string[] = ["mir", "firoz", "Mizam"];
  const bors2: string[] = ["Tonmoy", "Nahid", "Rahat"];

  bors1.push(...bors2);

  const mentors = {
    tyepsceipt: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };
  const mentors2 = {
    tyepsceipt: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };
  const mentors3 = {
    prisma: "Tonmoy",
    next: "Mir",
    cloud: "nahid",
  };

  const mentorsList = {
    ...mentors,
    ...mentors2,
    ...mentors3,
  };

  // learn Rest Oparator

  const greetFriends = (...friends: string[]) => {
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`);

    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };

  greetFriends("Abul", "Dabul", "Kabul", "Labul");
}
