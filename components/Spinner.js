import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    const style = {
      textAlign: 'center',
      padding: '50px 0',
    };

    return (
      <div className="sweet-loading" style={style}>
        <ClipLoader size={30} color={'#4e8df5'} loading={this.state.loading} />
      </div>
    );
  }
}

export default Spinner;
