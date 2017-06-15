const artists = require('../artists');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
	return knex.raw('TRUNCATE artists RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
	return knex('artists').insert(artists);
});
};
