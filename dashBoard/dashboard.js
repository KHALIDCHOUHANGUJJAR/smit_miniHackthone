let blog = document.getElementById("blog");
let creat_blog = document.getElementById("creat_blog")
const showBlog =()=>{
blog.innerHTML = `

      <form action="#" method="post">
<h1>CREATE BLOG</h1>
      <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div class="form-group">
          <label for="category">Category</label>
          <select id="category" name="category" required>
            <option value="">Select a category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
        </div>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>

`
}
creat_blog.addEventListener("click",showBlog)
