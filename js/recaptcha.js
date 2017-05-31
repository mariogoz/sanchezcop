var verifyCallback = function(response) {
                if (response != null) {
                    document.getElementById('enviar').disabled = false;
                } 
};
var onloadCallback = function() {
            document.getElementById('enviar').disabled = true;
            grecaptcha.render('captchaContainer', {
                'sitekey' : '6LcyGAgUAAAAAGVclQpW8WA_5-Qdrd_bGannJWL9',
                'callback' : verifyCallback,
                'theme' : 'ligth'
            });
};    