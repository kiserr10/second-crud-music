const songs = require('../songs');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
	return knex.raw('TRUNCATE songs RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
	return knex('songs').insert(songs);
});
};
