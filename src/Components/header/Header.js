import Link from 'next/link';
// import '../../../styles/header.css'

export default function Header() {
  return (
    <nav>
      <div className="main-container">
        <div className="end">
          <Link href="/"><span>Home</span></Link>
          <Link href="/blog"><span>Blog</span></Link>
          <Link href="/profile"><span>Profile</span></Link>
          <Link href="/contact"><span>Contact</span></Link>
          <Link href="/products"><span>Products</span></Link>
        </div>
      </div>
    </nav>
  );
}
