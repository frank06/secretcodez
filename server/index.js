module.exports = function(app) {

  app.get('/api/codes', function (req, res) {
    
    if (req.headers['authorization'] !== "Bearer some bs") {
      return res.status(401).send('Unauthorized');
    }
    
    return res.status(200).send({
      codes: [
        { id: 1, description: 'Obama Nuclear Missile Launching Code is: lovedronesandthensa' },
        { id: 2, description: 'Putin Nuclear Missile Launching Code is: invasioncoolashuntingshirtless' }
      ]
    });
  });
  
  app.get('/token', function(req, res) {

    if (req.query.login == 'login' && req.query.password == 'ok') {
      res.send({ auth_token: "some bs" });
    } else {
      res.status(401).send('Unauthorized');
    }

  });

};