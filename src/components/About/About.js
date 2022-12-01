import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class About extends Component {
    render() {
        return (
            <section class="home-info-grey">
                <div class="container">
                     <div class="row"> 
                     <div class="col-md-7">
                         <h2>What We Believe</h2> 
                         <p>It's  a dummy react website of wallet App. It provides you to create your own e wallet and save your money . You can transfer and view your transactions . If user want to delete their account they can . Thankyou for choosing this website.  </p>
                                                   </div> <div class="col-md-5 drop-cap-text">
                             <span class="drop-cap">
                                <span class="drop-cap-letter">A</span></span> re you look to expand .<br></br><br></br>
                                It is a long established<br></br><br></br> fact that a reader will be <br></br> distract </div> </div> </div> </section>
        )
    }
}
export default About;