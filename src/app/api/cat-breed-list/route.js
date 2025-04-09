import { getCatBreeds } from "@/lib/services/catApi";

export async function GET() {
  try {
    const breeds = await getCatBreeds();
    return Response.json(breeds);
  } catch (error) {
    return Response.json(
      { error: "고양이 품종 데이터를 가져오는데 실패했습니다" },
      { status: 500 },
    );
  }
}
