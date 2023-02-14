//Props can be passed into the component argument using keyword 'props', or destructuring and calling the props directly in the argument as 
//needed, here as 'blogs' and 'title'. This way is simpler and cleaner, so you don't need to use constants/variables for those props.
//Also note, anything in the variable (passed as props) will get passed as well, in this case the individual blog title, author, id, and body.

import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs, title }) => {


  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;