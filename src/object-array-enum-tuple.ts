/**
 * Object
 */

// const user: {
//     name:  string;
//     age: number;
//     isLoggedIn: boolean;
// } = {};

const user: {
  name: string;
  age: number;
  heigh?: number; // optional property
  weight?: number;
  isLoggedIn: boolean | string | number; // Union type
  role: number;
  // Nested object
  account: {
      username: string;
      password: string;
  }
} = {
  name: 'Tay',
  age: 20,
  isLoggedIn: true,
  //   isLoggedIn: 'yes',
  //   isLoggedIn: 1',
  role: 1,
  account: {
      username: 'taych',
      password: '123456',
  }
};

// console.log(user.username);
// const ADMIN = 1;
// const CLIENT = 2;

// Enum
enum Role { ADMIN = 1, CLIENT = 2 };

// console.log(Role.ADMIN);

if (user.role === Role.ADMIN) {
    console.log('Admin');
} else {
    console.log('Client');
}


/**
 * Array
 */
const numbers: number[] = [];
numbers.push(1); // ok
// numbers.push('2'); // ERR

const rappers: Array<string> = ['Binz', 'Đen Vâu'];
// rappers.push(1); // ERR

/**
 * Tuple (Mảng hỗn hợp)
 */
const person: [string, number, boolean] = ['Tay', 2000, true];