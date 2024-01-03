import Banner from "@/components/Banner";
import FeaturesProductPage from "./feature-products/page";
import LatestProductPage from "./products/page";

function HomePage() {
  return (
    <section>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <Banner />
        <FeaturesProductPage />
        <LatestProductPage />
      </div>
    </section>
  );
}

export default HomePage;
