import React from 'react';
import {Container, Col, Row, Jumbotron, Button} from 'react-bootstrap';



const QuoteBox = props => {
    const {quote,author, genQuote, bg_color} = props;

    return(
        <Container id = "quote-box">
            <Jumbotron>
                <Row>
                    <Col><h2 id = 'text'>"{quote}"</h2></Col>
                </Row>

                <Row>
                    <Col md={{span: 3, offset: 10}}><p id = 'author'>- {author}</p></Col>
                </Row>

                <Row>
                    <Col md = {{span: 2, offset: 10}}><Button variant = 'dark' id = 'new-quote' onClick = {genQuote} color = {bg_color}>NEW</Button></Col>
                    <Col md = {{span:2, offset:0}}>
                        <a id = 'tweet-quote'
                        class='twitter-share-button'
                        href = 'https://www.twitter.com/intent/tweet' 
                        data-text= {quote}
                        data-related='twitterapi,twitter'>Tweet this Quote</a>
                        </Col>
                </Row>
            </Jumbotron>
            <footer><p style={{fontSize: '12px', textAlign: 'center'}}>Created by Sarenna Roeung</p></footer>
        </Container>


    );
};

export default QuoteBox;