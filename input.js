/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function(){
    stdin.on('data', (key) => {
      connection.write("Say: hello");
      if(key === '\u0003'){
        process.exit();
      }else if(key === 'w'){
        connection.write('Move: up');      
      }else if(key === 'a'){
        connection.write('Move: left');
      }else if(key === 's'){
        connection.write('Move: down');
      }else if(key === 'd'){
        connection.write('Move: right');
      }  
    });
  }  

  handleUserInput();
  return stdin;
}

module.exports = { setupInput }; 
