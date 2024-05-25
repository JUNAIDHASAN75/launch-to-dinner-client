import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import NavbarLayout from '../../../Layout/NavbarLayout/NavbarLayout';
import Footer from '../Footer/Footer';
import { useLoaderData, useParams } from 'react-router-dom';
import './details.css'
import Recipe from '../Recipe/Recipe';




const Details = () => {
    const { id } = useParams();
    // console.log(id)
    const ids = parseInt(id)


    const chefDetails = useLoaderData();
    const [chefId, setChefId] = useState([]);
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch('https://food-recipe-server-junaidhasan75.vercel.app/recipe')
            .then(res => res.json())
            .then(data => setRecipes(data))

    }, [])
    useEffect(() => {
        fetch('https://food-recipe-server-junaidhasan75.vercel.app/chef')
            .then(res => res.json())
            .then(data => {
                const v = data.find(d => d.id === ids);
                setChefId(v)
                // console.log(v)
            })

    }, [id])
    // console.log(chefId)
    // console.log(chefDetails)
    return (
        <div>
            <Container>

                <NavbarLayout></NavbarLayout>


                <Card className='h-100 my-5  height-card'>
                    <Card.Img className='w-100 h-25' src={chefId.picture} />
                    <Card.Body>
                        <h2>{chefId.name}</h2>
                        <h5>Recipes: {chefId.recipes}</h5>
                        <h5>Year Of Experiece: {chefId.experience} years</h5>
                        <Card.Text>
                            {chefId.details}
                        </Card.Text>
                    </Card.Body>
                </Card>


            </Container>
            <Container>
                <Row sm={1} lg={3} className="g-4">
                    {
                        recipes.map(recipe=><Recipe
                        key={recipe.id}
                        recipe={recipe}
                        
                        >

                        </Recipe>)
                    }
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Details;