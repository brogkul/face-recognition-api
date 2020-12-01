BEGIN TRANSACTION;

INSERT into users (name, email, entries, joined) values ('Test', 'test@gmail.com', 5, '2020-01-01');
INSERT into login (hash, email) values ('$2a$10$vVnu9..YWuZMKlGV5rDRiutMXQ4vxKSFUOVD6AZXksnOJusBgVdEG', 'test@gmail.com');

COMMIT;