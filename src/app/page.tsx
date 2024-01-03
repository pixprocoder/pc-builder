import LatestProductPage from "./products/page";
import FeaturesProductPage from "./feature-products/page";
import Navbar from "@/components/shared/Navbar";
import Banner from "@/components/Banner";

function HomePage() {
  return (
    <section>
      <Navbar />
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <Banner />
        <FeaturesProductPage />
        <LatestProductPage />
      </div>
    </section>
  );
}

export default HomePage;
