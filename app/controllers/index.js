

const HomeController = {
    home (req, res) {
      	var html = `<!DOCTYPE html>
				  <html>
					<head>
						<title>OpShit</title>
						<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap" rel="stylesheet">
					</head>
					<body>
						<center>
							<h1 style="font-family: 'Rajdhani', sans-serif; font-size: 150px;">Opshit</h1>
							<br>
							<h1 style="font-family: 'Rajdhani', sans-serif;"">The NodeJS Framework for Smart Back-End</h1>
							<p>It's a open source </p>
						</center>
					</body>
				  </html>`;

    	res.send(html);
    }
};

module.exports = HomeController;