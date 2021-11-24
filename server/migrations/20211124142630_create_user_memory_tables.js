exports.up = function (knex) {
  return knex.schema
    .createTable("user", (table) => {
      table.increments("userID").primary();
      table.string("username").notNullable();
      table.string("password").notNullable();
      table.string("firstName").notNullable();
      table.string("lastName").notNullable();
      table.string("email").notNullable();
      table.integer("dateOfBirth").notNullable();
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
      table.string("title").notNullable();
      table.string("description", 1000).notNullable();
      table.integer("dateOfMemory").notNullable();
      table.timestamp("dateCreated").defaultTo(knex.fn.now());
      table.timestamp("dateLastUpdated").defaultTo(knex.fn.now());
      table.string("feeling").notNullable();
      table.boolean("helpfulThought").notNullable();
      table.string("relatedMoment").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("memory").dropTable("user");
};
