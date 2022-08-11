// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


// Time stamp Microservice TASK


// for empty date parameter

app.get('/api', (req,res) => {

  //current time

  res.json({unix: new Date().getTime(),utc: new Date().toUTCString()})
})


app.get('/api/:date?', (req,res) => {

  let {date} = req.params
  
   let utc;
   let unix;

   
 
  if (new Date(date).toString() === 'Invalid Date' && new Date(Number(date)).toString() === 'Invalid Date')
  {
      return res.json({error: 'Invalid Date'})
  }
  else if (date.indexOf('-') === -1 && date.indexOf(' ') === -1) // for unix
  {
    date = Number(date)
    utc = new Date(date).toUTCString()
    unix = date
    
  }
   else // for date (yyyy-month-day)
  {
      utc = new Date(date).toUTCString()
      unix = new Date(date).getTime()
  }
  
  
   res.json({unix,utc})
})



// 



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
