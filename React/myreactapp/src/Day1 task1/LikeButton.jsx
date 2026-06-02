// Like Button Component
// Problem Statement
// Create a React component called LikeButton.
// The component should display:
// 1.a button with text Like
// 2.a count of total likes
 
// Requirements
// Initial like count should be 0
// Every time user clicks the Like button, the count should increase by 1
// Show text like:
// Likes: 0
// Likes: 1
// Likes: 2

import { useState } from 'react';

export function LikeCount()
{
    const [likeCount, setLikeCount] = useState(0);
    return (
       <div>
            <p>Likes: {likeCount}</p>
            <button className="button" onClick={() => setLikeCount(likeCount + 1)}>Like</button>
        </div>
    );
}