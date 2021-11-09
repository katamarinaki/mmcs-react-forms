import React from 'react';

const Header = () => <div>123</div>;

export class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.length > 0 ? (
          <>
            <Header>
              <span>Title</span>
              <span>Length</span>
              <span>Genre</span>
            </Header>
            {movies.map((movie, index) => (
              <div key={index}>
                <span>{movie.title}</span>
                <span>{movie.length}</span>
                <span>{movie.genre}</span>
              </div>
            ))}
          </>
        ) : (
          <p>No movies :( </p>
        )}
      </div>
    );
  }
}
