import React from 'react';
import { connect } from 'react-redux';
import  getMovieDetail  from '../../actions/getMovieDetail ';

import './Movie.css';

class Movie extends React.Component {
    componentDidMount () {
        this.props.getMovieDetail(this.props.match.params.id)
    }


    render() {
        return (
            <div className="movie-detail">
                <p>Title : {this.props.movieDetail}</p> 
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movieDetail : state.movieDetail.Title
    }
}


export default connect(mapStateToProps, {getMovieDetail})(Movie);