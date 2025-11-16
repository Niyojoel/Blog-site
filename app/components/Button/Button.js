import Link from 'next/link';
import styles from './button.module.sass'
import {ArrowRight, MailIcon} from "lucide-react"

export const IconType = {
  ARROW_RIGHT: 'ARROW_RIGHT',
  SUBSCRIBE: "SUBSCRIBE"
};

const Button = (props) => {
  const btnUniqueStyle = props.className || styles.articleBtn;
  if(props.href) {
    return (
      <Link href={props.href} className={`${btnUniqueStyle} ${styles.button}`}>
        {props.children}
        <ButtonIcon IconType={props.icon} />
      </Link>
    );
  }
  
  return (
    <button className={styles.button}>
      {props.children}
      <ButtonIcon IconType={props.icon}/>
    </button>
  );
}

const ButtonIcon = ({IconType})=> {
  if(IconType === "ARROW_RIGHT") {
    return <ArrowRight width="1.11rem" height="1.11rem" />;
  }

  if(IconType === "SUBSCRIBE") {
    return <MailIcon width="1.11rem" height="1.11rem" />;
  }
  return null;
};

export default Button