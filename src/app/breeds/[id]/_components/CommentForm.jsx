"use client";

import { addComment } from "@/lib/services/actions/comments";
import { useRef } from "react";

export default function CommentForm({ breedId }) {
  const formRef = useRef(null);
  return (
    <form ref={formRef} className="mt-4">
      <textarea
        name="content"
        required
        className="w-full p-2 border rounded"
        placeholder="댓글을 입력하세요..."
        rows={3}
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        댓글 작성
      </button>
    </form>
  );
}
