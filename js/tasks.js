import users from "./users.js";
// ================================task1================================
const getUserNames = (users) => {
  const userNames = users.map((user) => user.name);
  return userNames;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// ================================task2================================
// Получить массив объектов пользователей по цвету глаз(поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  const usersWithEyeColor = users.filter((user) => color === user.eyeColor);
  return usersWithEyeColor;
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// ================================task3================================
// Получить массив имен пользователей по полу(поле gender).

const getUsersWithGender = (users, gender) => {
  const usersWithGender = users
    .filter((user) => gender === user.gender)
    .map((user) => user.name);

  return usersWithGender;
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// ==================================task4==========================
// Получить массив только неактивных пользователей(поле isActive).

const getInactiveUsers = (users) => {
  const inactiveUsers = users.filter((user) => !user.isActive);
  return inactiveUsers;
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// ==================================task5==========================
// Получить пользоваля(не массив) по email(поле email, он уникальный).

const getUserWithEmail = (users, email) => {
  const userWithEmail = users.find((user) => email === user.email);
  return userWithEmail;
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// ==================================task6==========================
// Получить массив пользователей попадающих в возрастную категорию от min до max лет(поле age).

const getUsersWithAge = (users, min, max) => {
  const usersWithAge = users.filter((user) => user.age > min && user.age < max);
  return usersWithAge;
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// ==================================task7==========================
// Получить общую сумму баланса(поле balance) всех пользователей.

const calculateTotalBalance = (users) => {
  // const totalBalance =
  const summ = users.reduce(
    (totalBalance, user) => (totalBalance += user.balance),
    0
  );
  return summ;
};

console.log(calculateTotalBalance(users)); // 20916

// ==================================task8==========================
// Массив имен всех пользователей у которых есть друг с указанным именем.
const getUsersWithFriend = (users, friendName) => {
  const filteredUser = users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);
  return filteredUser;
};
console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// ==================================task9==========================
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = (users) => {
  const namesSortedByFriendsCount = users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
  return namesSortedByFriendsCount;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// ==================================task10==========================
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = (users) => {
  const uniqueSkills = users
    .reduce((acc, user) => {
      acc.push(...user.skills);
      return acc;
    }, [])
    .filter((item, index, arr) => {
      return arr.indexOf(item) === index;
    })
    .sort();
  return uniqueSkills;
};
console.log(getSortedUniqueSkills(users));
