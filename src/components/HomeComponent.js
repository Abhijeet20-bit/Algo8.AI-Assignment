import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle } from 'reactstrap';

function RenderCard({ item }) {
    return (
        <Card>
            <CardImg top width="100%" src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle tag="h5">{item.name}</CardTitle>
                <CardText>Rs{item.cost}</CardText>
            </CardBody>
        </Card>
    );
}
function Home(props) {
    const phone = props.mobiles.map((phone) => {
        return (
            <div key={phone.id} className="col-12 col-md-5 m-1">
                <RenderCard item={phone} />
            </div>
        );
    });
    return (
        <div>
            <Jumbotron >
                <img width="100%" src="assets/images/A.png" alt="img" className="img-responsive d-none d-lg-block" />
            </Jumbotron>
            <div className="container">
                <div className="row">
                    {phone}
                </div>
            </div>
        </div>
    );
}

export default Home;