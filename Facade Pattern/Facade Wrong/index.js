function getUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
}

function getUserComments(userId) {
    return fetch(
        `https://jsonplaceholder.typicode.com/comments?userId=${userId}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        }
    ).then((res) => res.json());
}

getUsers().then((users) => {
    users.forEach((user) => {
        getUserComments(user.id).then((comments) => {
            console.log("------------------------------------- \n");
            console.log("Id: " + user.id + "\n");
            console.log("Nome: " + user.name + "\n");
            console.log("Username: " + user.username);
            console.log("Quantidade de comentarios: " + comments.length);
        });
    });
});