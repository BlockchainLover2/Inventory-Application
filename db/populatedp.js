const { Client } = require("pg");



async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: "postgresql://postgres:123@localhost:5432/top_users",
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();