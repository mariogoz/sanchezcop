var myform = $("form#sendForm");
myform.submit(function (event) {
    event.preventDefault();

    var params = myform.serializeArray().reduce(function (obj, item) {
        obj[item.name] = item.value;
        return obj;
    }, {});

    // Change to your service ID, or keep using the default service
    var service_id = "default_service";

    var template_id = "template_R8MJWmot";
    
    myform.find("#enviar").val("Enviando...");
    
    emailjs.send(service_id, template_id, params)
        .then(function(){
            myform.find("#enviar").val("Enviado");
            alert("Mensaje Enviado!");
            myform.find("#enviar").val("Enviar");
        }, function(err) {
            alert("Error enviar email!\r\n Response:\n " + JSON.stringify(err));
            myform.find("#enviar").val("Enviar");
        });
        
    return false;
});

