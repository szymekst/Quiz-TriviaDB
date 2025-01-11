import CategorySection from "@/components/CategorySection";
import ButtonDefault from "@/components/ButtonDefault";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center pt-10 h-dvh">
            <p className="mb-16 font-semibold text-2xl text-black">
                Quizaz - Test your knowleade!
            </p>
            <CategorySection></CategorySection>
            <div className="flex justify-center mt-auto w-full bg-white py-5">
                <ButtonDefault text={"Start"} />
            </div>
        </div>
    );
}
