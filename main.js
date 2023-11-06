 
<html>
  <head>
    <title>Emotion To Emoji</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>

    <script src="https://unpkg.com/ml5@0.4.3/dist/ml5.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/webcamjs/1.0.26/webcam.js"></script>

    <link rel="stylesheet" type="text/css" href="style.css">
  </head>

  <body>
  <div class="container">
  
    <center>
      <h3 class="btn btn-warning heading">Hand Gesture App
      <br>
      <span>&#9996;</span>
      <span>&#128076;</span>
      <span>&#128077;</span>
      <span>&#129304;</span>
      <span>&#128078;</span>
      <span>&#128406;</span>
      </h3>


      <br>


      <div class="col-md-4 col-sm-12 col-xs-12">
	      <label>Webcam View - </label>
        <div id="camera"></div>
        <br><br>
        <button onclick="take_snapshot();" class="btn btn-warning">Capture Image</button>
      </div>

      <div class="col-md-4 col-sm-12 col-xs-12">
	      <label>Predection 1 - </label>
        <p class="emotion_name" id="results_emotion_name"></p>
        <p class="emoji" id="update_emoji"></p>

        <label>Predection 2 - </label>
        <p class="emotion_name" id="results_emotion_name2"></p>
        <p class="emoji" id="update_emoji2"></p>
      </div>

      <div class="col-md-4 col-sm-12 col-xs-12">
	      <label>Snapshot - </label>
        <div id="result"></div>
        <br><br>
        <button onclick="check();" class="btn btn-success">Predict Emotion</button>
      </div>

    </center>

  </div>

<script src="main.js"></script>

  </body>
</html>
                                       
