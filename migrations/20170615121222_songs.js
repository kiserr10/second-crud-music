
exports.up = function(knex, Promise) {
	return knex.schema.createTable('songs', (table) =>{
		table.increments('id').primary();
		table.text('title').notNullable();
	});
};
exports.down = function(knex, Promise) {
	return knex.schema.dropTable('songs');
};
