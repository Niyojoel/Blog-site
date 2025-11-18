import Image from "next/image";
import styles from "./hero.module.sass"
import Button, { IconType } from "../Button/Button";

export default function Hero () {
    return (
      <div className={styles.hero_container}>
        <div className={styles.hero_text_wrapper}>
          <div className={styles.hero_text}>
            <h1>
              {" "}
              Mcclauren <br /> THE SPEEDSTER
            </h1>
            <p>
              Do you know that the Mcclauren has a speed of at least 200
              kilometers per hour ?
            </p>
            <Button href="/mcclauren" icon={IconType.ARROW_RIGHT}>
              Learn More
            </Button>
          </div>
        </div>
        <h3 className={styles.hero_text_tagline}> <p>Featured</p> </h3>
        <Image
          src="/blogImgs/blog (12).jpg"
          alt="hero-bcg-image"
          fill={true}
          sizes="100"
          className={styles.hero_bcg_image}
        />
        <div className={styles.hero_bcg_overlay}></div>
      </div>
    );
}