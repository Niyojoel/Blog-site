import Image from "next/image";
import getProductCategory from "../helpers/getProductCategory";
import styles from "./styles.module.sass"

export default function BlogDetails() {
    const props = {
      label: "Product Durability",
      title:"Looking at how Tesla has shod up it product durability over the years",
      image: "/blogImgs/blog (12).jpg",
      article: " Label product brand review title trace for car fast origin build strong way safe good summary import trace for requested module data con productContext for some perfectly crafted Import trace for requested module data context product context for some perfectly crafted href btn icon iconType.\n Product durability title trace for car fast origin build strong way safe good summary import trace for requested module data c productContext for some perfectly crafted Import trace for requested  data context productContext for some perfectly crafted"
    };
  return (
    <div className="container mt-60 pb-80">
      <div className="row mb-5">
        <div className="col col_12">
          <div className={`h5 mb-20 c-${getProductCategory(props.label)}`}>
            {props.label}
          </div>
          <h2 className="mb-50">{props.title}</h2>
        </div>
      </div>
      <div className={`${styles.featured_ImageBox} col col_12 mb-50`}>
        <Image
          src={props.image}
          alt="featured-image"
          height={500}
          width={1280}
          className={styles.featured_Image}
        />
      </div>
      <div className="row">
        <div className="col col_12">
          <p>{props.article}</p>
          <p>{props.article}</p>
          <p>{props.article}</p>
        </div>
      </div>
    </div>
  );
}
