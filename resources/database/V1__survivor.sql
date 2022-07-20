CREATE TABLE survivor (
	id bigint GENERATED BY DEFAULT AS IDENTITY,
	name varchar(255) NOT NULL UNIQUE,
    age integer NOT NULL,
    gender integer NOT NULL,
    latitude varchar(255) NOT NULL,
    longitude varchar(255) NOT NULL,
	CONSTRAINT survivor_pkey PRIMARY KEY (id)
);