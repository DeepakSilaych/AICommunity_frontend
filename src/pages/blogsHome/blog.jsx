import React, { useEffect , useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Blog() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/blogs/')
    .then((response) => {
      console.log(response.data);
      setBlogs(response.data);
    }) 
    .catch((error) => {
      console.log(error);
      alert("Failed to fetch blogs");
    }); 
  } , []);

  return (
      <div className = "flex flex-col gap-4">
        {blogs.map((blog) => {
          return (
            <Link to={'/blog/' + blog.id} className="text-white bg-gray-800 p-4 rounded-lg" key={blog.id}>
              <h1>{blog.title}</h1>
              <div className="cont">
                <p>{blog.authors}</p>
                <p>{Date(blog.date)}</p>
              </div>
            </Link>
          )
        }
        )}
      </div>
  );
            
}
