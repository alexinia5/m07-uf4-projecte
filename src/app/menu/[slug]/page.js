import { useParams } from 'next/navigation';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug;

  return <h1>Estás viendo el post: {slug}</h1>;
}