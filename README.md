# matrimonial
# For the given error function uuid_generate_v4() does not exist

The above error is because of the absence of "uuid-ossp" Extention.
Step 1: So first we need to login in Postgres with the help of the terminal window with this command :
psql -U postgres
step 2: then we need to go to the database in which we are working with this command
\c database
Step 3: then we need to check if uuid-ossp is installed on our bd server
select * from pg_extension;
step 4: If not present, install “uuid-ossp”
CREATE EXTENSION "uuid-ossp";
Step 5:  Restart the server

# Version

node version: v19.1.0
npm version : v8.19.3
postgres version : 14.6