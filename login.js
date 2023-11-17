let users = [
    {
            name: 'u1',
            password : 'p1',
            phone: '000-000-0000',
            comps : [
                {
                    id : 1,
                    type: 'Acer',
                    name: 'acer1',
                    price: 1000,
                    opinion: 'have',
                    new: 'Yes!',
                    photo : 'https://www.soliton.az/images/articles/2021/08/31/thumb20210831113057630.jpg',
                    fullMemory: '12',
                    prosessor: 'core i7',
                    notFullMemory: '12',
                    typeOfMemory: 'HDD',
                    sistem: 'vin 10',
                    videoCart: '12'
                },
            ],
        },
    ];
    if(!localStorage.getItem('users')){
        localStorage.setItem('users', JSON.stringify(users))
    }
    users = JSON.parse(localStorage.getItem('users'))
    $(".place").on("input", function () {
        if (
        $("#name").val().length >= 2 &&
        $("#password").val().length >= 2 
        ) {
        $("#submit").attr("disabled", false);
        } else {
        $("#submit").attr("disabled", true);
        }
    });
    $('form').on('submit', function(event){
        event.preventDefault()
        let userExist = users.some(          
        (user) => user.name === $('#name').val() && user.password === $('#password').val()  
        );
        if(userExist){
            localStorage.setItem('currentUser', $('#name').val())
            $('.place').val('')
            location.href = 'main.html'
        }else{
            alert('yout password or name is incorrect')
        }
    })