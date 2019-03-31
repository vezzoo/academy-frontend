import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/christian.jpg";

import bg404 from "assets/img/bg404.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    return (
      <div>
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={bg404} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Galbanino</h3>
                      <h6>AZIENDA</h6>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                    Galbanino è il buon formaggio dolce e versatile, che stimola la tua fantasia in cucina. Grazie al suo gusto delicato che piace a tutti e alla sua consistenza morbida e filante che non rilascia acqua, Galbanino è ottimo accompagnato ad altri ingredienti e perfetto per personalizzare qualsiasi tua ricetta. Dai piatti più elaborati ai più semplici, è ottimo al forno e alla piastra ma anche mangiato fresco accompagnato da ciò che più ti piace. Grazie alla tua fantasia ti accompagnerà anche negli spuntini più golosi e in stuzzicanti aperitivi.
                    Galbanino è fatto con tanto buon latte e senza conservanti e la sua lunga durata è garantita dalla cera protettiva.

                    E' disponibile in tre comodi formati da 230g, 270g, 550g e nei "formati famiglia" da 850g e 930g per incontrare ogni tua esigenza.

                    Conservare a temperatura max + 4 °C
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
