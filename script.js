const labels = document.querySelectorAll('.questions__label');
const questions = document.querySelectorAll('.questions__question');

labels.forEach((label, index) => {
    label.addEventListener('click', function() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', './data/db.json', true);
        xhr.onreadystatechange = function() {
            var output = document.createElement('div');
            output.className = "questions__answer--box";
            if(this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);
                output.append(document.createTextNode(data.db[index].content));
                var temp = document.querySelector('.questions__answer--box');
                if(temp == null) {
                    questions[index].appendChild(output);
                } else {
                    temp.remove();
                }
            }
        }
        xhr.send();
    });
})





// function getInfo() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.open('GET', 'https://api.github.com/users', true);
//     xhttp.onreadystatechange = function() {
//         if(this.readyState == 4 && this.status == 200) {
//             var users = JSON.parse(this.responseText)
//             var output = '';
//             for(user in users) {
//                 output += 
//                 '<div class="user">' +
//                 '<img src="' + users[user].avatar_url + '" style="width: 50px; height: 50px">' + 
//                 '<ul><li>Login: ' + users[user].login + '</li>' + '<li>ID:' + users[user].id + '</li></ul></div>'; 
//             }
//             info.innerHTML = output;
//         }
//     }
//     xhttp.send();
// }