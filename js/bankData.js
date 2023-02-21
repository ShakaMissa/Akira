var defaultComments = [
    {
        title: "Date avec Yor",
        author: "Akira",
        date: Date.now(),
    }
]

let comments = defaultComments;
if (localStorage && localStorage.getItem('comments')) {
    comments = JSON.parse(localStorage.getItem('comments'));
} else {
    comments = defaultComments;
    localStorage.setItem('comments', JSON.stringify(defaultComments));
}
