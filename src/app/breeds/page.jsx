import CatCardList from "@/components/ui/CatCardList";
import PageContainer from "@/components/common/PageContainer";
import { getCatBreeds } from "@/lib/services/catApi";

export default async function CatBreeds() {
  const breeds = await getCatBreeds();
  console.log("breeds", breeds);
  return (
    <PageContainer title="고양이 품종 리스트">
      <CatCardList
        items={breeds}
        getImageUrl={(breed) => breed.image?.url}
        getName={(breed) => breed.name}
        getHref={(breed) => `/breeds/${breed.id}`}
        gridClassName="grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
      />
    </PageContainer>
  );
}
