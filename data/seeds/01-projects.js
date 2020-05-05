
exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {id: 1, name: 'paint interior rooms', description: 'sample', completed: false},
    {id: 2, name: 'replace kitchen backsplash', description: 'sample', completed: false},
    {id: 3, name: 'replace hardwood floors', description: 'sample', completed: false},
    {id: 4, name: 'replace outlets', description: 'sample', completed: false}
  ]);
};
