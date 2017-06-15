
exports.up = function(knex, Promise) {
	return knex.schema.createTable('artists', (table =>{
		table.increments('id').primary();
		table.text('artist').notNullable();
	}));
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('artists');
};
