$(function(){
    $('#sendMsg').click(function (e) {
        e.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
        let d = new Date();
        console.log(name, email, message, d);
        if (name.length !== 0 && email.length !== 0 && message.length !== null) {

            database.ref().push().set({
                Name: name,
                Email: email,
                Message: message,
                Date_Time: d.toUTCString(),
            });
            $('#userMessage').show();
       document.querySelector('#userMessage').innerHTML = "Your Message Has Been Sent. I will get back to your Shortly."     

        } else alert('All Fields must be filled...');
        
        $('#name').focus();
        $('#name').val('');        
        $('#email').val('');
        $('#message').val('');
    })


})