"use client"

import Image from 'next/image'
import styles from './blog_card.module.sass'
import Button from '../Button/Button';
import { useEffect, useRef, useState } from 'react';
import ConditionalRenderer from '../ConditionalRenderer';
import getProductCategory from '@/app/helpers/getProductCategory';

const BlogCard = (props) => {
  const containerRef = useRef(null);
  const [wrap, setWrap] = useState(null)

  useEffect(()=> {
    const checkContainerSize = ()=> {
      const container = containerRef?.current;
      if (container.clientWidth <= "700") {
        return setWrap(true);
      }
      return setWrap(false);
    }
    
    checkContainerSize();
    window.addEventListener("resize", checkContainerSize);
  
    return () => {
      window.removeEventListener("resize", checkContainerSize);
    };
  }, [])


  return (
    <article className={`${styles.card_container} ${props.className || ""}`}>
      <div
        className={styles.card}
        ref={containerRef}
        style={{ flexDirection: wrap ? "column" : "row" }}
      >
        <div className={styles.card_imageBox}>
          <div className={styles.card_image}>
            <Image src={props.image} alt="blog-image" fill={true} sizes='100'/>
          </div>
        </div>
        <div
          className={styles.card_content}
          style={{ padding: wrap ? "0 30px 30px" : "30px 30px 30px 0" }}
        >
          <ConditionalRenderer condition={props.label}>
            <div
              className={`${styles.card_label} h6 c-${getProductCategory(props.label)} mb-10`}
              style={{ fontSize: wrap ? "16px" : "18px" }}
            >
              {props.label}
            </div>
          </ConditionalRenderer>
          <ConditionalRenderer condition={props.title}>
            <div
              className={`${styles.card_title} h3 mb-20`}
              style={{ fontSize: wrap ? "24px" : "1.888rem" }}
            >
              {props.title}
            </div>
          </ConditionalRenderer>
          <ConditionalRenderer condition={props.summary}>

            <p
              className={`${styles.card_summary} fw-500`}
              style={{ display: wrap ? "none" : "block" }}
            >
              {props.summary}
            </p>
          </ConditionalRenderer>
          <ConditionalRenderer condition={props.href}>
            <Button href={props.href} icon={props.btnIcon}>
              {props.btnLabel || "Read More"}
            </Button>
          </ConditionalRenderer>
        </div>
      </div>
    </article>
  );
}

export default BlogCard