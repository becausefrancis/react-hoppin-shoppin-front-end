import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as hopshopService from '../../services/hopshopService';
import CommentForm from '../CommentForm/CommentForm';

const HopshopDetails = (props) => {
    const { hopshopId } = useParams();
    const [hopshop, setHopshop] = useState(null);
    const [submittedItems, setSubmittedItems] = useState([]);

    useEffect(() => {
        const fetchHopshop = async () => {
          const hopshopData = await hopshopService.show(hopshopId);
          setHopshop(hopshopData);
        };
        fetchHopshop();
    }, [hopshopId]);

    const handleAddComment = async (commentFormData) => {
        const newItems = commentFormData.text.split(',').map(item => item.trim());
        setSubmittedItems((prevItems) => [...prevItems, ...newItems]);
        const newComment = await hopshopService.createComment(hopshopId, commentFormData);
        setHopshop({ ...hopshop, comments: [...hopshop.comments, newComment] });
    };

    if (!hopshop) return <main>Loading...</main>;    
    return (
        <main>
          <header>
            <p>{hopshop.category.toUpperCase()}</p>
            <h1>{hopshop.title}</h1>
          </header>
          <p>{hopshop.text}</p>
          <section>
            <h2>Items</h2>
            <CommentForm handleAddComment={handleAddComment} />

            {!hopshop.comments.length && <p>Time to add items to your shopping list!</p>}

            {hopshop.comments.map((comment) => (
                <article key={comment._id}>
                    <p>{comment.text}</p>
                </article>
            ))}
          </section>
        </main>
    );
};
  
export default HopshopDetails;