import PageContainer from "@/components/ui/PageContainer";
import CatDetail from "@/components/ui/CatDetail";
import { getCatById } from "@/lib/services/catApi";
import BreedDetailHeader from "@/app/breeds/[id]/_components/BreedDetailHeader";

export default async function CatBreedPage({ params }) {
  console.log("SSR-CatBreedPage");
  const { id } = await params;

  // TODO: 실습:
  // 직접 api 함수 호출하는 대신
  // /api/cat-breed-list/[id] 경로로 route handler 에서 호출되도록 구현해 보세요.
  const cats = await getCatById(id);
  const cat = cats[0];

  return (
    <PageContainer title={cat.breeds[0].name}>
      <BreedDetailHeader breed={cat.breeds[0]} />
      <CatDetail cat={cat} />
    </PageContainer>
  );
}
