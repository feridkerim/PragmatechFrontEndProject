// 3) Obyektdəki dəyərlərə əsasən
// “Adı: Lorem, Familyası: İpsum, Yaşı: 34” olaraq yazın və sonda bütün age-lərin cəmini(сложить) göstərin.

// var students = [ 
//   {
//       name: 'John',
//       surname: 'Doe',
//       age: 41
//   },
//   {
//       name: 'Lorem',
//       surname: 'Ipsum',
//       age: 34
//   },
//   {
//       name: 'Dummy',
//       surname: 'Name',
//       age: 24
//   }
// ];



var students = [ 
  {
      name: 'John',
      surname: 'Doe',
      age: 41
  },
  {
      name: 'Lorem',
      surname: 'Name',
      age: 38
  },
  {
      name: 'Lorem',
      surname: 'Ipsum',
      age: 34
  },
  {
      name: 'Dummy',
      surname: 'Name',
      age: 24
  },
];


var std = students.findIndex(x => x.name === 'Lorem' & x.surname === 'Ipsum' & x.age === 34);

console.log('Adi:' , students[std].name + ',' ,'Familyası:' ,  students[std].surname + ',' , 'Yaşı:' , students[std].age );



var age = students.map(x => x.age);


const toplama = (a, b) => a + b;

console.log(age.reduce(toplama))