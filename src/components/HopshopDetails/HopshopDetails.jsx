import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as hopshopService from '../../services/hopshopService';

const HopshopDetails = (props) => {
    const { hopshopId } = useParams();
    const [hopshop, setHopshop] = useState(null);

    useEffect(() => {
        const fetchHopshop = async () => {
          const hopshopData = await hopshopService.show(hopshopId);
          setHopshop(hopshopData);
        };
        fetchHopshop();
    }, [hopshopId]);

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

            {!hopshop.comments.length && <p>There are no comments.</p>}

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