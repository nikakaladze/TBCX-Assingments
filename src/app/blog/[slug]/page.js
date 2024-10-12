// Generate static params for static generation of each post
export async function generateStaticParams() {
  const response = await fetch('https://dummyjson.com/posts');
  const data = await response.json();

  return data.posts.map((post) => ({
    slug: post.id.toString(),  // Generate slug for each post
  }));
}

// Server-side component for rendering post details
export default async function PostDetail({ params }) {
  const { slug } = params;

  // Fetch the post details from the API
  const response = await fetch(`https://dummyjson.com/posts/${slug}`);
  const post = await response.json();

  return (
    <div className="container">
      <h1 className="title">{post.title}</h1>
      <p className="body">{post.body}</p>

      {/* Display reactions */}
      <div className="reactions">
        <span>Likes: {post.reactions.likes}</span>
        <span>Dislikes: {post.reactions.dislikes}</span>
      </div>

      {/* Display views and tags */}
      <p className="views">Views: {post.views}</p>
      <ul className="tags">
        {post.tags.map((tag, index) => (
          <li key={index}>#{tag}</li>
        ))}
      </ul>
    </div>
  );
}

