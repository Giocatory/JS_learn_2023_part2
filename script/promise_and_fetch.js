'use strict';

fetch("https://api.randomuser.me/?nat=US&results=1")
.then( res => res.json() )
.then( json => json.results)
.then( console.log)
.then( console.error);

// [
//     {
//       gender: 'male',
//       name: { title: 'Mr', first: 'Franklin', last: 'Miles' },
//       location: {
//         street: [Object],
//         city: 'Garden Grove',
//         state: 'California',
//         country: 'United States',
//         postcode: 11078,
//         coordinates: [Object],
//         timezone: [Object]
//       },
//       email: 'franklin.miles@example.com',
//       login: {
//         uuid: '594d1510-66ab-4c3a-8daf-949b9a4e1152',
//         username: 'redzebra660',
//         password: 'stinky',
//         salt: 'yxNTXoPc',
//         md5: '4b2b9e29d192c36ea9edafe38c219fad',
//         sha1: '8c45b707c7edcedf6b57b05b2cb0df99a9288b0e',
//         sha256: '970ff67d4413fb8168f65abdfcb98fbce4d69869800d8e7e600b7a534cd312be'
//       },
//       dob: { date: '1960-01-10T22:05:12.847Z', age: 63 },
//       registered: { date: '2014-04-16T06:18:36.228Z', age: 9 },
//       phone: '(662) 900-3112',
//       cell: '(881) 264-1025',
//       id: { name: 'SSN', value: '020-01-7070' },
//       picture: {
//         large: 'https://randomuser.me/api/portraits/men/71.jpg',
//         medium: 'https://randomuser.me/api/portraits/med/men/71.jpg',
//         thumbnail: 'https://randomuser.me/api/portraits/thumb/men/71.jpg'
//       },
//       nat: 'US'
//     }
//   ]
//   undefined
