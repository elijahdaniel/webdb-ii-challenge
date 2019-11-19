exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('cars').insert([
        {
          model: 'civic',
          make: 'honda',
          year: '2002'
        },
        {
          model: 'camry',
          make: 'toyota',
          year: '2020'
        },
        {
          model: 'frs',
          make: 'scion',
          year: '2019'
        }
      ])
    })
}
