"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import PageContainer from "@/components/common/PageContainer";
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
        // const cats = await getCatByIdClient(id);
        const cats = await fetch(`/api/cat-breed-list/${id}`).then((res) =>
          res.json(),
        );
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
