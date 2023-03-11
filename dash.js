const blog_table = document.getElementById("blog_table")

// interacting with our getbooks endpoint
fetch('http://127.0.0.1:4000/api/v1/blogs')
.then((response) => response.json())
.then((blogs) => {
  console.log(blogs)
  blogs.data.forEach(blogs => {
    const row = document.createElement("tr")
    const nameCell = document.createElement("td");
    const authorCell = document.createElement("td")
    const actionsCell = document.createElement("td")

    const deleteButton = document.createElement("button")

    // assign values to the cells
    nameCell.textContent = blogs.name;
    authorCell.textContent = blogs.author;
    deleteButton.textContent = "Remove"

    actionsCell.appendChild(deleteButton)

    // append rows
    row.appendChild(nameCell)
    row.appendChild(authorCell)
    row.appendChild(actionsCell)

    // append table body
    blogTable.querySelector("tbody").appendChild(row)

    deleteButton.addEventListener("click", () => {
      deleteBook(blogs._id)
    })
  })
})
.cath(err => alert(err))

function deleteBook(blogId) {
  fetch('http://127.0.0.1:4000/api/v1/blogs', {
    method: "DELETE"
  })
  .then((response) => response.json())
  .then((data) => {
    // functionalities of delete
  })
}