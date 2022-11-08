# How To Test
* Clone repo
* Open terminal
* `docker-compose up --build`
* Open second terminal
* `cd core10`
* `npm install`
* `npm run start`
* `curl -k https://localhost:443/ping` - You should recieve a 403 error
* `curl http://localhost:5000/ping` - You should recieve "Pong"