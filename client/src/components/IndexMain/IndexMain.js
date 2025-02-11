import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import AuctionPreview from "./AuctionPreview";
import GalleryPreview from "./GalleryPreview";

function IndexMain() {
  return (
    <div className="App" style={{ backgroundColor: '#252525', width: '1200px', margin: '0 auto' }}>
      <Header />
      <Navbar />
      <div style={{ margin: '20px', height: '550px' }}>
        <div style={{ position: 'relative', left: '-200px', top: '80px' }}>
          <GalleryPreview />
        </div>
        <div style={{ position: 'relative', right: '-870px', top: '-350px' }} >
          <AuctionPreview />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default IndexMain;