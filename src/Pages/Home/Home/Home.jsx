import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Chef from '../../shared/Chef/Chef';

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://food-recipe-server-junaidhasan75.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <Container>
            <h2 className='text-center my-5'>Chef</h2>

            <Row sm={1} lg={3} className="g-4">
                {
                    chefs.map(chef => <Chef
                        key={chef.id}
                        chef={chef}

                    ></Chef>)
                }
            </Row>
        </Container>
    );
};

export default Home;




