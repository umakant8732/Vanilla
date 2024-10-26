const user1 = {
  firstname: 'umakant',
  lastname: 'bhendarkar',
  address: {
    city: 'Nagbhir',
    state: 'Maharashtra',
    pincode: 441205,
    moreDetails: {
      population: 1200,
      area: '650 sq/km'
    }
  }
}

user1.age = 25 //this is how we add properties in object

console.log(user1.address.city)
