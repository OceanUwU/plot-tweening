# PlotTweening
[tweening.ocean.lol](https://tweening.ocean.lol)
## setup
1. `npm install`
### setup client
2. create `src/socket/server.json` and put the address of the server this client will connect to as a string (e.g. `"ws://localhost:2816"`).
#### for development
3. `npm run dev-client`
4. find at http://localhost:3000
#### for build
3. `npm run build-client`
4. find in `build/`
### setup server
2. create `server/cfg.json` and include the following then edit it to your needs
    ```json
    {
        "port": 2816,
        "codeLength": 4
    }
    ```
3. `npm start` (or `cd server` then `nodemon` for development)