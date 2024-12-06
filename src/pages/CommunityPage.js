import React, { useState } from 'react';
import '../styles/CommunityPage.css';

const CommunityPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'John Doe',
      profilePic: 'https://via.placeholder.com/50',
      timeAgo: 'vor 2 Stunden',
      content: 'Ich liebe es, mit dem Fahrrad zur Arbeit zu fahren! 🚴‍♂️🌿',
      likes: 5,
      comments: 2
    },
    {
      id: 2,
      username: 'Jane Smith',
      profilePic: 'https://via.placeholder.com/50',
      timeAgo: 'vor 1 Stunde',
      content: 'Die neue Buslinie ist super effizient! 🚌💨',
      likes: 8,
      comments: 3
    }
  ]);

  const [friends, setFriends] = useState([
    { id: 1, name: 'Alice', profilePic: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Bob', profilePic: 'https://via.placeholder.com/50' }
  ]);

  const [groups, setGroups] = useState([
    { id: 1, name: 'Velo Fans', active: true },
    { id: 2, name: 'Bus Enthusiasten', active: false }
  ]);

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    }));
  };

  const handleComment = (postId) => {
    // Implement comment functionality
    console.log('Comment on post', postId);
  };

  const handleShare = (postId) => {
    // Implement share functionality
    console.log('Share post', postId);
  };

  return (
    <div className="community-page">
      <button className="create-post-btn">Beitrag erstellen</button>
      <div className="activities-feed">
        {posts.map(post => (
          <div key={post.id} className="post">
            <img src={post.profilePic} alt={post.username} className="profile-pic" />
            <div className="post-content">
              <div className="post-header">
                <span className="username">{post.username}</span>
                <span className="time-ago">{post.timeAgo}</span>
              </div>
              <p>{post.content}</p>
              <div className="post-actions">
                <span onClick={() => handleLike(post.id)} className="like">❤️ {post.likes}</span>
                <span onClick={() => handleComment(post.id)} className="comment">💬 {post.comments}</span>
                <span onClick={() => handleShare(post.id)} className="share">🔗 Teilen</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="friends-list">
        <h3>Freunde</h3>
        <div className="friends-container">
          {friends.map(friend => (
            <div key={friend.id} className="friend">
              <img src={friend.profilePic} alt={friend.name} className="friend-pic" />
              <span className="friend-name">{friend.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="groups-list">
        <h3>Gruppen</h3>
        <div className="groups-container">
          {groups.map(group => (
            <div key={group.id} className={`group ${group.active ? 'active' : ''}`}>
              <span className="group-name">{group.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="community-comparison">
        <h3>Community Vergleich</h3>
        <div className="comparison-stats">
          <div className="stat">
            <span>CO₂ Einsparung</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: '70%' }}></div>
            </div>
            <span>70% besser als der Durchschnitt</span>
          </div>
          <div className="stat">
            <span>Geplante Routen</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: '50%' }}></div>
            </div>
            <span>50% mehr als der Durchschnitt</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
