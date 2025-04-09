import CatCard from "@/components/ui/CatCard";
import PageContainer from "@/components/ui/PageContainer";
import { getCats } from "@/lib/services/catApi";
import CatCardList from "@/components/ui/CatCardList";

export default async function Home() {
  const cats = await getCats();
  console.log("cats", cats);
  return (
    <PageContainer title="The Cat API">
      {/* 
        TODO: 아래 주석 해제하고 placeholder=”blur” 처리해 보세요.
        src 에 할당될 이미지는 반드시 import 된 이미지여야 합니다.
        public/sampleCat.jpg 이미지를 사용해 보세요.
      */}
      {/* <div className="relative mx-auto w-[300px] h-[300px] flex justify-center items-center mb-4">
        <Image
          src={staticCat}
          alt="The Cat API"
          fill
          placeholder="blur"
          className="object-cover"
        />
      </div> */}
      <CatCardList items={cats} linkable={false} />
    </PageContainer>
  );
}
