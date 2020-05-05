
exports.seed = function(knex, Promise) {
  return knex('tasks').insert([
    {id: 1, description: 'clean work area', notes: 'sample', completed: false, project_id: 1},
    {id: 2, description: 'remove old backsplash', notes: 'sample', completed: false, project_id: 2},
    {id: 3, description: 'remove old hardwood panels', notes: 'sample', completed: false, project_id: 3},
    {id: 4, description: 'remove damaged outlets', notes: 'sample', completed: false, project_id: 4},
    {id: 5, description: 'cover floor with drop-cloth', notes: 'sample', completed: false, project_id: 1}
  ]);
};
