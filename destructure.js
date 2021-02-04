// const person = { name: 'sabbir', id: 12, class: 11, friends: 'arif', gfname: 'sumaiya', phone: '012233882', address: 'kochu khet' }

// const { gfname, friends, name, address } = person;
// console.log(friends, address, gfname);

const friends = ['arif', 'sabbir', 'samiha', 'mubin', 'mithila'];
const [bestFriend, ...rest] = friends;
console.log(bestFriend, rest);