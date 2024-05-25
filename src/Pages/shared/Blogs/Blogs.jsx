import React from 'react';
import NavbarLayout from '../../../Layout/NavbarLayout/NavbarLayout';
import Footer from '../Footer/Footer';
import { Button, Container } from 'react-bootstrap';
import { Page, Text, View, Document } from '@react-pdf/renderer';

function Blogs() {
    const handlepdf = () => {
        <Document>
            <Page size="A4">
                <View>
                    <Text>Section #1</Text>
                </View>
                <View>
                    <Text>Section #2</Text>
                </View>
            </Page>
        </Document>

    }
    return (

        <div>
            <Container className='my-5'>
                <NavbarLayout></NavbarLayout>
                <h2 className='text-center my-5'>Blogs</h2>

                <h4 className='mb-4'>1. What is the differences between uncontrolled and controlled components?</h4>
                <p className='ms-4'>Ans: In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p><h4 className='mb-4'>2. How to validate react props using PropsTypes?</h4>
                <p className='ms-4'>Ans: The propTypes can be of any data type, A Boolean, a Number , a String, a Function, an Arry.</p>
                <h4 className='mb-4'>3. What is the differentce between nodejs and expressjs ?</h4>
                <p className='ms-4'>Ans: Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</p>
                <h4>4. What is a custom Hook , and why you will create a custom hook?</h4>
                <p className='ms-4'>Ans: Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>

                <h4>Here Is pdf</h4>
                <Button onClick={handlepdf}>PDF download</Button>


            </Container>
            <Footer></Footer>
        </div>
    );
}

export default Blogs;