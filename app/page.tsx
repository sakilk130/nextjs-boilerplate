"use client";

import { Button, message } from "antd";

import { QUERY_KEY } from "@/constants/query-key";
import { useFetch, usePost } from "@/hooks/use-api-call";
import { IPost } from "@/interfaces/post";
import { createPost, getPosts } from "@/services/example";
import Metadata from "@/providers/metadata";

export default function Home() {
  const create = usePost(createPost);
  const { data, isLoading, isError } = useFetch([QUERY_KEY.POSTS], getPosts);
  const onSubmit = () => {
    const createData: any = {
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    };
    create.mutate(createData, {
      onSuccess: (success) => {
        console.log(success);
        message.success("Success");
        message.destroy;
      },
    });
  };

  return (
    <main>
      <Metadata seoTitle={"Welcome"} seoDescription={""} />
      <h1>Welcome to Next.js!</h1>
      <Button
        type="primary"
        htmlType="button"
        onClick={onSubmit}
        loading={create.isPending}
      >
        POST
      </Button>
      {isLoading && <>Loading...</>}
      {isError && <>Something went wrong</>}
      {data?.map((item: IPost) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </main>
  );
}
