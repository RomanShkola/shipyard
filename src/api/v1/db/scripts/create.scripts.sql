CREATE database foo;
CREATE USER romanshkola WITH encrypted password 'pass';
GRANT ALL PRIVILEGES ON database foo TO romanshkola;

CREATE TABLE ships (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(16),
    speed VARCHAR(16)
);

