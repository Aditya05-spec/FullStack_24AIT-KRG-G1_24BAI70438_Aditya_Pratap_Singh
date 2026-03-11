document.getElementById("postForm").addEventListener("submit", function(e) {

  e.preventDefault();

  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      body: body
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);

    document.getElementById("message").innerText =
      "Post submitted successfully!";
  })
  .catch(error => console.log(error));

});