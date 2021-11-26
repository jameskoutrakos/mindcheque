exports.up = function (knex) {
  return knex.schema
    .createTable("user", (table) => {
      table.increments("userID").primary();
      table.string("username").notNullable();
      table.string("password").notNullable();
      table.string("firstName").notNullable();
      table.string("lastName").notNullable();
      table.string("email").notNullable();
      table.datetime("dateOfBirth").notNullable();
    })
    .createTable("memory", (table) => {
      table.increments("memoryID").primary();
      table
        .integer("userID")
        .unsigned()
        .notNullable()
        .references("userID")
        .inTable("user")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("title");
      table.string("description", 1000);
      table.datetime("dateOfMemory");
      table.datetime("dateCreated").defaultTo(knex.fn.now());
      table.datetime("dateLastUpdated").defaultTo(knex.fn.now());
      table.string("feeling");
      table.boolean("helpfulThought");
      table.string("relatedMoment");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("memory").dropTable("user");
};
