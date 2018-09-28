import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Icon from "@material-ui/core/Icon";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SearchIcon from "@material-ui/icons/Search";

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
      <div>
        <BottomNavigation
          className="bottomNav"
          value={value}
          onChange={this.handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            label="Home"
            value="home"
            icon={<HomeIcon />}
          />

          <BottomNavigationAction
            label="Todos"
            value="todos"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Search"
            value="search"
            icon={<SearchIcon />}
          />
          <BottomNavigationAction
            label="Log Out"
            value="logout"
            icon={<Icon>lock</Icon>}
          />
        </BottomNavigation>
      </div>
    );
  }
}

MainBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainBottomNavigation);
