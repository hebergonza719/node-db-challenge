
exports.seed = function(knex, Promise) {
  return knex('resources').insert([
    {id: 1, name: 'interior paint', description: 'sample'},
    {id: 2, name: 'paint brush', description: 'sample'},
    {id: 3, name: 'backsplash tiles', description: 'sample'},
    {id: 4, name: 'tile adhesive', description: 'sample'},
    {id: 5, name: 'outlets', description: 'sample'},
    {id: 6, name: 'hardwood floor panels', description: 'sample'},
    {id: 7, name: 'protective gloves', description: 'sample'},
    {id: 8, name: 'nail-gun', description: 'sample'},
  ]);
};
