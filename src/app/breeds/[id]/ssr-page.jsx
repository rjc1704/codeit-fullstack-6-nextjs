import PageContainer from "@/components/common/PageContainer";
import CatDetail from "@/components/ui/CatDetail";
import { getCatById } from "@/lib/services/catApi";
import BreedDetailHeader from "@/app/breeds/[id]/_components/BreedDetailHeader";

export default async function CatBreedPage({ params }) {
  console.log("SSR-CatBreedPage");
  const { id } = await params;
  //   const cats = await getCatById(id);
  const cats = await fetch(
    `http://localhost:3000/api/cat-breed-list/${id}`,
  ).then((res) => res.json());
  const cat = cats[0];

  return (
    <PageContainer title={cat.breeds[0].name}>
      <BreedDetailHeader breed={cat.breeds[0]} />
      <CatDetail cat={cat} />
    </PageContainer>
  );
}
