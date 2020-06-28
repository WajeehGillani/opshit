var home = `<!DOCTYPE html>
  	<html>
		<head>
			<title>OpShit</title>
			<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap" rel="stylesheet">
			<style type="text/css">
				body {
				  margin: 0;
				  padding: 0;
				  font-family: sans-serif;
				}

				header {
				  position: absolute;
				  top: 0;
				  left: 0;
				  padding: 0 100px;
				  background: #262626;
				  width: 100%;
				  box-sizing: border-box;
				}

				header .logo {
				  color: #fff;
				  height: 50px;
				  line-height: 50px;
				  font-size: 24px;
				  font-weight: bold;
				  text-transform: uppercase;
				  float: left;
				}

				header nav {
				  float: right;
				}

				header nav ul {
				  margin: 0;
				  padding: 0;
				  display: flex;
				}

				header nav ul li {
				  list-style: none;
				}

				header nav ul li a {
				  height: 50px;
				  line-height: 50px;
				  padding: 0 20px;
				  color: #fff;
				  text-decoration: none;
				  display: block;
				}

				header nav ul li a.active,
				header nav ul li a:hover {
				  color: #fff;
				  background: #2196f3;
				}

				.menu-toggle {
				  color: #fff;
				  float: right;
				  line-height: 50px;
				  font-size: 24px;
				  cursor: pointer;
				  display: none;
				}

				@media (max-width: 991px) {
				  header {
				    padding: 0 20px;
				  }
				  .menu-toggle {
				    display: block;
				  }
				  header nav {
				    position: absolute;
				    width: 100%;
				    height: calc(100vh - 50px);
				    background: #333;
				    top: 50px;
				    left: -100%;
				    transition: .5s;
				    text-align: center;
				  }
				  header nav.active {
				    left: 0;
				  }
				  header nav ul {
				    display: block;
				  }
				  header nav ul li a {
				    border-bottom: 1px solid rgba(0, 0, 0, .2);
				  }
				}

			</style>
			<script type="text/javascript">
				document.querySelector('.menu-toggle').addEventListener('click', function() {
				  document.querySelector('nav').classList.toggle('active');
				});
			</script>
		</head>
		<body>
			<header>
			  <div class="logo">opshit</div>
			  <nav class="active">
			    <ul>
			      <li><a href="#">Login</a></li>
			      <li><a href="#">Register</a></li>
			    </ul>
			  </nav>
			  <div class="menu-toggle"><i class="fa fa-bars" aria-hidden="true"></i></div>
			</header>
			<center>
				<h1 style="font-family: 'Rajdhani', sans-serif; font-size: 150px;">Opshit</h1>
				<br>
				<h1 style="font-family: 'Rajdhani', sans-serif;">The NodeJS Framework for Smart Back-End</h1>
				<p>It's a open source </p>
			</center>
		</body>
  	</html>`;

exports.home = home;