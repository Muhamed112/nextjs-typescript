type Params = {
  params: { id: string };
};

export default function SingleBlog({ params }: Params) {
  return <h1>My Blog: {params.id}</h1>;
}
