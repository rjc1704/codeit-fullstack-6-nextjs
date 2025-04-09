"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import PageContainer from "@/components/ui/PageContainer";
import CatDetail from "@/components/ui/CatDetail";
import Loading from "@/components/ui/Loading";
import ErrorDisplay from "@/components/ui/ErrorDisplay";
import { getCatByIdClient } from "@/lib/services/catApi";
import BreedDetailHeader from "./_components/BreedDetailHeader";

export default function CSRCatBreedPage() {
  console.log("CSR-CatBreedPage");
  const { id } = useParams();
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCat() {
      try {
        // TODO: 실습:
        // 직접 api 함수 호출하는 대신
        // /api/cat-breed-list/[id] 경로로 route handler 에서 호출되도록 구현해 보세요.
        const cats = await getCatByIdClient(id);
        setCat(cats[0]);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    loadCat();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <ErrorDisplay message={error} />;
  if (!cat) return <ErrorDisplay message="고양이 정보를 찾을 수 없습니다." />;

  return (
    <PageContainer title={cat.breeds[0].name}>
      <BreedDetailHeader breed={cat.breeds[0]} />
      <CatDetail cat={cat} />
    </PageContainer>
  );
}
