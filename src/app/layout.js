
import Header from '../Components/header/Header'
import Footer from '../Components/header/Header'

import '../../styles/header.css';
import '../../styles/footer.css';
import '../../styles/blog.css';
import '../../styles/contact.css';
import '../../styles/ProductListAssignments.css';
import '../../styles/products.css';
import '../../styles/profile.css';
import '../../styles/ProfileCardContainer.css';
import '../../styles/productCardContainer.css';
import '../../styles/postDetails.css';
import '../../styles/productsDetails.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
