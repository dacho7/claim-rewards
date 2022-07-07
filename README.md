## About project

The project allows you to claim credits by entering a user, when the user does not exist a new one is created and you must wait for the time to claim your first credit, if the user exists the last time you claim a credit is validated.

A user who has credits can spend them on the available rewards, this data is extracted from the database and it is necessary to carry out migrations to enter the first rewards.

## Technologies

<ul>
    <li>Node with typescript to server</li>
    <li>Express with socke.io to client connect</li>
    <li>Sequelize to database connect and postgres</li>
    <li>Jest</li>
    <li>Docker</li>
</ul>

## Configuration

configure enviorement vars in .env in root folder
execute docker-compose up --build
execute migrate

> docker exec <server-container-name> npx sequelize-cli db:migrate
> docker exec <server-container-name> npx sequelize-cli db:seed:all

execute tests

> docker exec <server-container-name> npm run test

Open on port 3003
