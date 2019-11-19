import css from "../styles/application.scss"
import Link from 'next/link';

const Hello = () => (
  <div>
    <Link href="/about">
      About
    </Link>
  </div>
)

export default Hello;
