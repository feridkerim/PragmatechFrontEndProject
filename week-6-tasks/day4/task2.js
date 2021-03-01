// 2) Obyektdəki dəyərlərə əsasən, dövrdən istifadə edərək
// “Adı: Lorem, Familyası: İpsum, Yaşı: 34” olaraq digərlərini də ad, familiya, yaş olaraq console-da çıxarmaq. Sonda bütün age-lərin cəmini(сложить) dövr ilə tapıb console-da göstərin.

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

//   }];



var students = [ 

  {

      name: 'John',

      surname: 'Doe',

      age: 41

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

  }];


    var sum = 0;


  for (let str = 0; str < students.length; str++) {
      const element = students[str];
      console.log('Ad:',element.name+',', 'Familiya:', element.surname+',', 'Yas:', element.age  )
      
      sum = sum+students[str]
  }


 