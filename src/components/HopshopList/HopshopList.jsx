import { Link } from 'react-router-dom';

const HopshopList = (props) => {
    return (
        <main>
          {props.hopshops.map((hopshop) => (
            <Link key={hopshop._id} to={`/hopshops/${hopshop._id}`}>
              <article>
                <header>
                  <h2>{hopshop.title}</h2>
                  <p>
                    This list was created on{' '}
                    {new Date(hopshop.createdAt).toLocaleDateString()}{'.'}
                    {hopshop.updatedAt && 
                        new Date(hopshop.createdAt).toLocaleDateString() 
                        !== new Date(hopshop.updatedAt).toLocaleDateString() 
                        && (
                        <> 
                            and updated on {new Date(hopshop.updatedAt).toLocaleDateString()}
                        </>
                    )}
                  </p>
                </header>
                <p>{hopshop.text}</p>
              </article>
            </Link>
          ))}
        </main>
    );
};
  
export default HopshopList;