const express = require('express');
const fsa = require('fs-extra');
const path = require('path');
const app = express();
const port = 3000;

app.get('/files', (req, res) => {
    const folder = path.join(__dirname, 'assets/world-maps');
    fsa.readdir(folder, (err, files) => {
        if (err) {
            return res.status(500).send('Fehler beim Lesen des Ordners: ' + err);
        }
        res.json(files);
    });
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
