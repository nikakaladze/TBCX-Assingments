'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
// import Header from '../../Components/header/Header'
// import Footer from '../../Components/header/Header'

const POSTS_PER_PAGE = 9;

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [animate, setAnimate] = useState(false);
 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/posts?limit=${POSTS_PER_PAGE}&skip=${(currentPage - 1) * POSTS_PER_PAGE}`);
        const data = await res.json();
        setPosts(data.posts || []);
        setTotalPosts(data.total || 0);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError(error);
      } finally {
        setLoading(false);
        setAnimate(true);
        setTimeout(() => setAnimate(false), 300);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  if (loading) return (
    <div className="loading-screen">
      <div className="spinner"></div>
    </div>
  );
  
  if (error) return <p>Error loading posts: {error.message}</p>;

  return (
    <div>
      {/* <Header/> */}
      <div className="main-title">
        <h1>News Page</h1>
      </div>
      <div className={`grid-container ${animate ? 'fade-in' : ''}`}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link className="grid-card" key={post.id} href={`/blog/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <div className="card-footer">
                <span className="likes">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  {post.reactions.likes} Likes
                </span>
                <span className="views">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M12 4.5C7 4.5 2.73 8.11 1 12c1.73 3.89 6 7.5 11 7.5s9.27-3.61 11-7.5c-1.73-3.89-6-7.5-11-7.5zm0 11.25c-2.35 0-4.25-1.9-4.25-4.25S9.65 7.25 12 7.25 16.25 9.15 16.25 12 14.35 15.75 12 15.75zm0-6.5A2.25 2.25 0 109 12a2.25 2.25 0 003-2.25z" />
                  </svg>
                  {post.views} Views
                </span>
              </div>
            </Link>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
      <div className='pagination_Container'>
      <div className="pagination">
        <div className="Button_cont">
    <button onClick={handlePreviousPage} disabled={currentPage === 1} className="prev-button">
    ←
  </button>
  <button onClick={handleNextPage} disabled={currentPage === totalPages} className="next-button">
    Next page →
  </button>
  </div>
  <div className="page-info">
    <span>Page</span>
    <input
      type="text"
      value={currentPage}
      readOnly
      className="page-input"
    />
    <span>of {totalPages}</span>
  </div>
</div>
</div>
    </div>
  );
};

export default Blog;
