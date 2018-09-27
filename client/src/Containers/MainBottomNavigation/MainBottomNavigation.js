import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Icon from "@material-ui/core/Icon";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import color from "../../../node_modules/@material-ui/core/colors/deepPurple";

const styles = {
  root: {
    position: "fixed",
    bottom: "0px",
    left: "0px",
    width: "100%",
    height: "56px"
  }
};

class MainBottomNavigation extends React.Component {
  state = {
    value: "home"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        className="bottomNav"
        value={value}
        onChange={this.handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Todos"
          value="todos"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Search"
          value="search"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Log Out"
          value="log out"
          icon={<Icon>folder</Icon>}
        />
      </BottomNavigation>
    );
  }
}

MainBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainBottomNavigation);
