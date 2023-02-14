import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  //semicolon after prop allows you to name it within this component's context, here being data named 'blogs'
  const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

  //useEffect was here for example/dev purposes. Now moved to useFetch.js for scalability.

  //The use of '&&' means 'logical &', where the item on the right will only output if the item on the left is true.
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}

export default Home;
<div>

</div>