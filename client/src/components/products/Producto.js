import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

import ColorView from '../common/ColorView';
import ImageView from '../common/ImageView';
import Info from '../common/Info';
import SideMenu from '../common/SideMenu';

class Producto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: this.props.data.submenu[0]
    };
  }

  handleClick = (e, name) => {
    this.setState({
      selectedOption: name
    });
  };

  render() {
    const { images, colors, info } = this.props.data[this.state.selectedOption];

    let menu;
    if (this.props.data.submenu.length > 1) {
      menu = (
        <Grid item xs={12} md={3} lg={2}>
          <SideMenu
            selectedOption={this.state.selectedOption}
            options={this.props.data.submenu}
            handleClick={this.handleClick}
          />
        </Grid>
      );
    }

    return (
      <Grid container style={{ padding: 25 }}>
        {menu}
        <Grid item xs>
          <Grid container>
            <Grid item xs={12} md={4} lg={5}>
              <ImageView imageData={images} />
            </Grid>
            <Grid item xs={12} md style={{ marginLeft: 5 }}>
              <ColorView colorData={colors} />
            </Grid>
            <Grid item xs={12}>
              <Info infoData={info} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Producto;
