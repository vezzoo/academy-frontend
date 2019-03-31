import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import People from "@material-ui/icons/People";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.jpg";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.nome = "";
        this.username = "";
        this.password = "";

        this.state = {
            cardAnimaton: "cardHidden"
        };
    }

    componentDidMount() {
        setTimeout(
            function () {
                this.setState({cardAnimaton: ""});
            }.bind(this),
            700
        );
    }

    render() {
        const {classes, ...rest} = this.props;
        return (
            <div>
                <div
                    className={classes.pageHeader}
                    style={{
                        backgroundImage: "url(" + image + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "top center"
                    }}
                >
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                                <Card className={classes[this.state.cardAnimaton]}>
                                    <form className={classes.form}>
                                        <CardHeader color="info" className={classes.cardHeader}>
                                            <h2>Login</h2>
                                        </CardHeader>
                                        <CardBody>
                                            <CustomInput
                                                labelText="Nome"
                                                id="nome"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "text",
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <People className={classes.inputIconsColor}/>
                                                        </InputAdornment>
                                                    )
                                                }}
                                                onChange={(e) => {
                                                    this.nome = e.target.value;
                                                }}
                                            />
                                            <CustomInput
                                                labelText="Username"
                                                id="username"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "text",
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <People className={classes.inputIconsColor}/>
                                                        </InputAdornment>
                                                    )
                                                }}
                                                onChange={(e) => {
                                                    this.username = e.target.value;
                                                }}
                                            />
                                            <CustomInput
                                                labelText="Password"
                                                id="password"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "password",
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <Icon className={classes.inputIconsColor}>
                                                                lock_outline
                                                            </Icon>
                                                        </InputAdornment>
                                                    )
                                                }}
                                                onChange={(e) => {
                                                    this.password = e.target.value;
                                                }}
                                            />
                                        </CardBody>
                                        <CardFooter className={classes.cardFooter}>
                                            <Button simple color="info" size="lg" onClick={() => {
                                                fetch("/utenti/sign-up", {
                                                    method: "POST",
                                                    headers: new Headers({
                                                        "Content-Type": "application/json"
                                                    }),
                                                    body: JSON.stringify({
                                                        nome: this.nome,
                                                        username: this.username,
                                                        password: this.password
                                                    })
                                                })
                                                    .then((responsesignup) => {
                                                        console.log(responsesignup)

                                                        if (responsesignup.statusText === "OK")
                                                            fetch("/login", {
                                                                method: "POST",
                                                                headers: new Headers({
                                                                    "Content-Type": "application/json"
                                                                }),
                                                                body: JSON.stringify({
                                                                    username: this.username,
                                                                    password: this.password
                                                                })
                                                            })
                                                                .then((responselogin) => console.log(responselogin))
                                                    })
                                            }}>
                                                Login
                                            </Button>
                                        </CardFooter>
                                    </form>
                                </Card>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        );
    }
}

//nome: "Logistica Galbanino",
//username: "logistic@galbanino.it",
//password: "ciaociao123"

export default withStyles(loginPageStyle)(LoginPage);
