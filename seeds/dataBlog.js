
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blog').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('blog').insert({id: 1, name: "data1", posted:"aaa"}),
        knex('blog').insert({id: 2, name: "data2", posted:"bbb"}),
        knex('blog').insert({id: 3, name: "data3", posted:"ccc"})
      ]);
    });
};
