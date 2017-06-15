const artist_song = require('../artist_song');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
	return knex.raw('TRUNCATE artist_songs RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
	return knex('artist_songs').insert(artist_song);
});
};
