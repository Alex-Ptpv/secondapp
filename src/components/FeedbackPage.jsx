import React, { useContext } from 'react';
import FeedbackList from "../components/FeedbackList";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackContext from "../context/FeedbackContext";


function FeedbackPage() {
  const {isLoading}  = useContext(FeedbackContext);

  return (
    <div className="container">
      {isLoading ? <div>Loading...</div> : 
        <>
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
        </>
      }
    </div>
  )
}

export default FeedbackPage;