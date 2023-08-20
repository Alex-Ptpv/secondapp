import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();
const API_BASE_URL = "http://localhost:5000/posts/";

export const FeedbackProvider = ({ children }) => {

  // const [posts, setPosts] = useState([]);
  // const [newPost, setNewPost] = useState({ rating: 0, text: '' });
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackEdit, setFeedbackEdit] = useState({ edit: false });
  useEffect(() => {
    // Fetch all posts on component mount
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(API_BASE_URL);
      const data = await response.json();
      setFeedback(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Error fetching posts:', error);
    }
  };
  
  const editFeedback = (item) => {
    setFeedbackEdit({ ...item, edit: true });
  };

  const updateFeedback = (id, newFeedback) => {
    console.log(newFeedback)
    fetch(`${API_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setFeedback((feedback) =>
          feedback.map((item) => (item.id === feedbackEdit.id ? data : item))
        );
      })
      .catch((error) => console.error('Error updating post:', error));
  };

  const deleteFeedback = (id) => {
    fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        if (window.confirm("Are you sure you want to delete the feedback?")) {
          setFeedback(feedback.filter((item) => item.id !== id));
        }
      })
      .catch((error) => console.error('Error deleting post:', error));
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = feedback.length + 1;
    fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })
      .then((response) => response.json())
      .then((data) => {
        setFeedback([newFeedback, ...feedback]);
      })
      .catch((error) => console.error('Error creating post:', error));
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        isLoading
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
