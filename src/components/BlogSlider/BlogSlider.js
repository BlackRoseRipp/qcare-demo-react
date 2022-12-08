import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Blogs from "../../store/blog-details.json";

const BlogSlider = () => {
  return (
    <div
      id="testimonialSlider"
      class="carousel slide relative"
      data-bs-ride="true"
    >
      <div class="carousel-indicators">
        <button
          class="carousel-control-next !bg-transparent !mr-4"
          type="button"
          data-bs-target="#testimonialSlider"
          data-bs-slide="prev"
        >
          <BsArrowLeft className="text-4xl !text-blue-logo-secondary" />
          <span class="visually-hidden">Previous</span>
        </button>
        {Blogs.map((blog, i) => {
          return (
            <button
              type="button"
              data-bs-target="#testimonialSlider"
              className={
                "!w-3 !h-3 rounded-full !bg-blue-logo-secondary" +
                (i === 0 ? " active" : "")
              }
              data-bs-slide-to={i}
              aria-label={"Slide " + (i + 1)}
            ></button>
          );
        })}
        <button
          class="carousel-control-next !bg-transparent !ml-4"
          type="button"
          data-bs-target="#testimonialSlider"
          data-bs-slide="next"
        >
          <BsArrowRight className="text-4xl !text-blue-logo-secondary" />
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="carousel-inner relative w-full overflow-hidden">
        {Blogs.map((blog, index) => {
          return (
            <div
              className={
                "carousel-item float-left w-full py-16" +
                (index === 0 ? " active" : "")
              }
            >
              <a
                href={"/blog/" + blog.id}
                className="w-5/6 mx-auto h-[580px] flex flex-col rounded-xl shadow-md hover:shadow-xl overflow-hidden"
              >
                <img src={blog.image} className="w-full" alt="blog_1" />
                <div className="px-6 py-4">
                  <h3 className="text-blue-primary text-lg font-medium mb-2 text-center md:text-start">
                    {blog.title}
                  </h3>
                  <p className="text-blue-secondary text-sm text-justify md:text-start">
                    {blog.subtitle}
                  </p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogSlider;
