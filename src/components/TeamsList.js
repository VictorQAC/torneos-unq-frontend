import React, { Component } from 'react';
import '../css/style.css';
import '../fonts/icomoon/style.css';
import '../css/bootstrap.min.css';
import '../css/magnific-popup.css';
import '../css/owl.theme.default.min.css';
import '../css/aos.css';
import '../css/style.css';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class TeamsList extends React.Component {

	constructor(props) {
        super(props);

        this.state = {
            teams: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/teams')
            .then(response => response.json())
            .then(data => this.setState({teams: data}));
    }

    render() {

    	const {teams} = this.state;

    	return (
      <div>
      <Header/>

     <div className="site-section">
       <div className="container">
       <h2 className="text-black">Equipos</h2>
         <div className="row text-center">
         
         {teams.map((team) =>

         	<div className = "row">
         	<li></li>
         	<div className="col-lg-3 col-md-6 mb-4">{team.name}
         	</div>
         	<div className="col-lg-3 col-md-6 mb-4">
         		<Link to= {"/teamsBy/" + team.id + "/" + team.name} className="btn btn-primary">Ver plantilla</Link>
         	</div>
         	</div>
         )}

         </div>

       </div>
     </div>
     <Footer/>
   </div>

    );
	}
}export default TeamsList;