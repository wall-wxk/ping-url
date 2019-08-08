var root = document.getElementById('root');
Ping.config({
    protocol: 'https'
});
Ping.check('google.com').then(function(res){
    console.log('success', res);
}, function(res){
    console.log('error', res);
})
