import Image from "next/image";
import DiscountSection from "@/components/DiscountSection"; // Import for "Discount Section"
import SubcategoriesSection from "@/components/SubcategoriesSection";
import NewsletterSection from "@/components/NewsletterSection";


export default function Home() {
  return (
    <div>
      <main>

        {/* Here we render the component */}
        <SubcategoriesSection />
        <DiscountSection />
        <NewsletterSection />

      </main>
    </div>
  );
}
