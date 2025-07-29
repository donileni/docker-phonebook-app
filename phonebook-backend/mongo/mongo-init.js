db.createUser({
  user: "the_username",
  pwd: "the_password",
  roles: [
    {
      role: "dbOwner",
      db: "the_database",
    },
  ],
});

db.createCollection("people");

db.people.insert({ name: "David Olsson", number: "111-231123123" });
db.people.insert({ text: "Anton Glödman", number: "111-231123124" });
