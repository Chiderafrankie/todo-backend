CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    note TEXT NOT NULL,
    time_due TIMESTAMP NOT NULL,
    time_created TIMESTAMP DEFAULT NOW(),
    time_updated TIMESTAMP DEFAULT NOW()
);