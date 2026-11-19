import './Lesson07Styles.css';
import { getSinglePost } from './api';
import { useState } from 'react';

export default function FetchOnClick() {
  const [clickPost, setClickPost] = useState();
  const [loading, setLoading] = useState(false);

  async function loadPost(id) {
    try {
      setLoading(true);
      const data = await getSinglePost(id);
      setClickPost(data);
    } catch (error) {
      console.log(error.message);
      setClickPost();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" disabled={loading} onClick={() => loadPost(1)}>
        Get post
      </button>

      <div className="content">
        {clickPost && (
          <>
            <h2>{clickPost.title}</h2>
            <p>{clickPost.body}</p>
          </>
        )}
      </div>
    </div>
  );
}
