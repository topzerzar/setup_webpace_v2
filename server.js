const express =  require('express');

const app = express()

app.use('/dist', express.static('./dist'))
app.use((req, res) => {
  res.status(200).send(getMarkup())
})

app.listen(8080, () => {
  console.log('Server start listening at http://localhost:8080')
})


const getMarkup = () => (
`
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Hello React</title>
	</head>
	<body>
		<script src="./dist/bundle.js"></script>
	</body>
</html>
  `
);