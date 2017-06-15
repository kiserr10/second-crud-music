
exports.up = function(knex, Promise) {
	return knex.schema.createTable('artist_songs', (table) =>{
		table.increments('id').primary();
		table.integer('song_id').unsigned();
		table.foreign('song_id').references('songs.id');
		table.integer('artist_id').unsigned();
		table.foreign('artist_id').references('artists.id');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('artist_songs');
};
