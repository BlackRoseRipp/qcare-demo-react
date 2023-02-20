import { Fragment } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Blogs from "../../store/blog-details.json";

const reversedBlogs = Blogs.reverse();

const Blog = () => {
  const size = useWindowSize();

  /* 
  NOT WORKING SOLUTION - NEED NEW ONE
  const sortBlogs = (blogsArr) => {
    let matrix = [];
    const colNum = size.width < 1024 ? (size.width < 767 ? 1 : 2) : 3;

    for (let i = 0; i < colNum; i++) {
      matrix.push([]);
    }

    blogsArr.forEach((blog, index) => {
      matrix[index % colNum].push(blog);
    });

    let sortedBlogs = [];

    matrix.map((colList) => {
      colList.map((blog) => {
        sortedBlogs.push(blog);
      });
    });

    return sortedBlogs;
  };

  const sortedBlogs = sortBlogs(reversedBlogs);
  console.log(reversedBlogs);
  console.log(sortedBlogs); */

  return (
    <Fragment>
      <div className="banner bg-blue-primary pb-24">
        <div className="container mx-auto py-56 bg-[url(../public/img/patterns/Q-logo-pattern-home-banner.svg)] bg-center bg-no-repeat bg-contain">
          <h1 className="text-white text-4xl lg:text-6xl heading font-semibold text-center">
            Stay Up To Date With Your Health And Wellness
          </h1>
          <div className="text-center mt-12">
            <a
              href="/locations"
              className="btn-primary uppercase text-white font-medium border-2 border-yellow-logo hover:bg-yellow-logo"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </div>
      <div className="container py-24 mx-auto">
        <div className="my-12 grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {Blogs.map((blog) => {
            return (
              <div className="group flex flex-col mx-4 lg:mx-0 rounded shadow-lg hover:shadow-xl bg-white transition-all overflow-hidden my-8">
                <img src={blog.image} className="w-full" />
                <div className="p-8">
                  <h2 className="text-blue-primary heading text-2xl font-semibold">
                    {blog.title}
                  </h2>
                  <h4 className="text-blue-secondary py-4">{blog.subtitle}</h4>
                  <div className="text-center my-8">
                    <a
                      href={"/blog/" + blog.id}
                      className="btn-primary text-blue-primary border-2 border-blue-primary font-medium hover:text-white hover:bg-blue-logo-secondary hover:border-blue-logo-secondary"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Blog;
