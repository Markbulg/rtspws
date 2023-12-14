import express   from 'express';
import rtspRelay from 'rtsp-relay';

const app = express()
,     { proxy, scriptUrl } = rtspRelay(app);

console.log('scriptUrl: ', scriptUrl);

app.ws('/api/stream', (ws, req) => {
	const url = req.url.replace('/api/stream/.websocket?url=', '');
	console.log('url: ', url);
	
    return proxy({ url: url, verbose: false })(ws);
});

app.listen(8091);