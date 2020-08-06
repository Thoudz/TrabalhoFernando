function getUsers() {
    return getFetch("https://jsonplaceholder.typicode.com/users");
}

function getUserComments(userId) {
    return getFetch("https://jsonplaceholder.typicode.com/comments", {
        userId: userId,
    });
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

/* function getFetch(url, params = {}) {
    const queryString = Object.entries(params)
        .map((param) => {
            return `${param[0]}=${param[1]}`;
        })
        .join("&");
    return fetch(`${url}?${queryString}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
} */

function getFetch(url, params = {}) {
    return axios({
        url: url,
        method: "GET",
        params: params,
    }).then((res) => res.data);
}