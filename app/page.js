import BlogCard from "./components/BlogCard/BlogCard";
import { IconType } from "./components/Button/Button";
import Hero from "./components/Hero/Hero";


export default function Home () {
  return (
    <div className="pb-80">
      <Hero />
        <div className="container">
        <h1 className="mb-50 mt-80">Headline</h1>
        <BlogCard
          label="Product Brand Review"
          title="Trace for car fast origin build strong way safe good"
          summary="Import trace for requested module data context productContext for
          some perfectly crafted Import trace for requested module data
          context productContext for some perfectly crafted"
          href="/"
          btnIcon={IconType.ARROW_RIGHT}
          image="/blogImgs/blog (19).png"
          className="mb-80"
        />
        <h3 className="pb-5 mt-50">News Feed</h3>
        <hr className="mb-40" />
        <div className="row">
          <div className="col col_4 m-wd-100">
            <BlogCard
              label="Product Durability"
              title="Trace for car fast origin build strong way safe good"
              summary="Import trace for requested module data context productContext for
              some perfectly crafted Import trace for requested module data
              context productContext for some perfectly crafted"
              href="/"
              btnIcon={IconType.ARROW_RIGHT}
              image="/blogImgs/blog (2).png"
              className="mb-30"
            />
          </div>
          <div className="col col_4 m-wd-100">
            <BlogCard
              label="Product Features"
              title="Trace for car fast origin build strong way safe good"
              summary="Import trace for requested module data context productContext for
              some perfectly crafted Import trace for requested module data
              context productContext for some perfectly crafted"
              href="/"
              btnIcon={IconType.ARROW_RIGHT}
              image="/blogImgs/blog (3).png"
              className="mb-30"
            />
          </div>
          <div className="col col_4 m-wd-100">
            <BlogCard
              label="Product Efficiency"
              title="Trace for car fast origin build strong way safe good"
              summary="Import trace for requested module data context productContext for
              some perfectly crafted Import trace for requested module data
              context productContext for some perfectly crafted"
              href="/"
              btnIcon={IconType.ARROW_RIGHT}
              image="/blogImgs/blog (5).png"
              className="mb-30"
            />
          </div>
        </div>
      </div>
    </div>
  );
}