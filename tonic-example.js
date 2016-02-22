// ckeditor doesn't require in node, so package.json safely grabs it as a dependency
require("ckeditor/package.json") 

var server = require("notebook")("tonic/package-server/1.0.0")
var url = server(exports, "ckeditor");
 
`<!doctype html>
<html>
<head>
	<script src="${url}/ckeditor.js"></script>
	<script src="${url}/samples/js/sample.js"></script>
	<link rel="stylesheet" href="${url}/samples/css/samples.css">
</head>
<body>
    <div id="editor">
		<h1>Hello world!</h1>
		<p>I'm an instance of <a href="http://ckeditor.com">CKEditor</a>.</p>
	</div>
	<script> initSample(); </script>
</body>
</html>`
