import parse from "html-react-parser";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Blogs from "../../store/blog-details.json";

const BlogDetail = () => {
  const { id } = useParams();

  const blog = Blogs.find((blog) => blog.id === id);

  return (
    <Fragment>
      <div className="banner bg-blue-primary lg:pb-24">
        <div className="py-16 lg:py-48 container mx-auto bg-[url(../public/img/patterns/Q-logo-pattern-home-banner.svg)] bg-center bg-no-repeat bg-contain">
          <h1 className="text-white text-4xl lg:text-6xl heading font-semibold text-center">
            {blog.title}
          </h1>
          <h3 className="text-white lg:text-xl font-medium text-center lg:w-2/3 mx-auto mt-6 px-4 lg:px-0">
            {blog.subtitle}
          </h3>
        </div>
      </div>
      <div className="bg-blue-secondary/10 py-24">
        <img
          src={blog.image}
          className="lg:w-1/2 w-3/4 mx-auto rounded-xl"
          alt={blog.imgAlt ? blog.imgAlt : "blog thumbnail"}
        />
      </div>
      <div className="container mx-auto pt-24 pb-12 blog-content lg:w-1/2 px-2">
        {parse(blog.content)}
      </div>
      <div className="pb-12 text-center">
        {blog.CTA && blog.CTA === "true" ? (
          <a
            href="/locations"
            className="btn-primary text-blue-primary border-blue-primary border-2 uppercase hover:bg-blue-logo-secondary hover:border-blue-logo-secondary hover:text-white"
          >
            Book an Appointment
          </a>
        ) : null}
      </div>
    </Fragment>
  );
};

export default BlogDetail;
