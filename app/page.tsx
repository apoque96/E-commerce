import Image from "next/image";
import DiscountSection from "@/components/DiscountSection"; // Import for "Discount Section"

export default function Home() {
  return (
    <div>
      <main>

        {/* Here we render the component */}
        <DiscountSection />

      </main>
    </div>
  );
}
