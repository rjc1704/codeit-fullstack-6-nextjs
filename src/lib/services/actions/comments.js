"use server";

import { revalidatePath } from "next/cache";

export async function addComment({ breedId, content }) {
  try {
    const response = await fetch("http://localhost:4000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        breedId,
        content,
        createdAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error("댓글 작성에 실패했습니다");
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// 댓글 목록 조회 함수도 같은 파일에서 관리
export async function getComments(breedId) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(
    `http://localhost:4000/comments?breedId=${breedId}&_sort=createdAt&_order=desc`,
  );
  return response.json();
}

export async function deleteComment(commentId) {
  const response = await fetch(`http://localhost:4000/comments/${commentId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("댓글 삭제에 실패했습니다");
  }
  return { success: true };
}
