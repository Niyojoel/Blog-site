import Image from "next/image";
import Button, { IconType } from "../Button/Button";
import styles from "./header.module.sass"
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <nav className="container">
        <div className={styles.header_row}>
          <Socials style={styles.header_socials_sm} />
          <Link href="/" className={styles.header_logo}>
            <Image src="/logo_black.png" alt="logo" width={50} height={50} />
            <span className="fw-500">AUTOBLOG</span>
          </Link>
          <div className={styles.header_navs}>
            <Button
              href="/subscribe"
              className={styles.header_subscribeBtn}
              icon={IconType.SUBSCRIBE}>
              Subscribe
            </Button>
            <Socials style={styles.header_socials_lg} />
          </div>
        </div>
      </nav>
    </header>
  );
};

const Socials =(props)=> {
  return (
    <div className={`${styles.header_socials} ${props.style}`}>
      <Link href="/">
        <AiOutlineTwitter />
      </Link>
      <Link href="/">
        <AiFillLinkedin />
      </Link>
      <Link href="/">
        <AiFillInstagram />
      </Link>
      <Link href="/">
        <AiFillFacebook />
      </Link>
    </div>
  );
}

export default Header;
