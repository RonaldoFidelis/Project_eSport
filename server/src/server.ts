import express from 'express';

const app = express();

app.get('/ads', (request, response) => {
    return response.json([
        {id: 1, name: 'Ronaldo'},
        {id: 2, name: 'Lidia'},
        {id: 3, name: 'Kiki'},
    ]);
});


app.listen(3333);