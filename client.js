const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', () => {console.log('Successfully connected to game server.');
                            conn.write('Name: HIW');
                            setTimeout(() => conn.write('Move: up'), 50);
                            setTimeout(() => conn.write('Move: left'), 50);
                            setTimeout(() => conn.write('Move: up'), 50);
                            setTimeout(() => conn.write('Move: left'), 50);
                            setTimeout(() => conn.write('Move: down'), 50);
                            setTimeout(() => conn.write('Move: right'), 50);
                            setTimeout(() => conn.write('Move: up'), 50);
                            setTimeout(() => conn.write('Move: left'), 50);
                            setTimeout(() => conn.write('Move: right'), 50);
                            setTimeout(() => conn.write('Move: down'), 50);
                            setTimeout(() => conn.write('Move: down'), 50);
                            setTimeout(() => conn.write('Move: down'), 50);
                            setTimeout(() => conn.write('Move: right'), 50);
                            setTimeout(() => conn.write('Move: down'), 50);
                            setTimeout(() => conn.write('Move: down'), 50);
                            setTimeout(() => conn.write('Move: down'), 50);
                            setTimeout(() => conn.write('Move: left'), 50);
                            setTimeout(() => conn.write('Move: left'), 50);
                            setTimeout(() => conn.write('Move: left'), 50);
                            setTimeout(() => conn.write('Move: left'), 50);});

  conn.on('data', () => console.log('you ded cuz you idled'));

  return conn;
}



module.exports = { connect };