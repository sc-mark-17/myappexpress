app.use(express.static('public'));
app.use(express.static('media'));


app.use('/media', express.static('public'));
