import React from "react"
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from "@material-ui/core"

import useStyles from "./styles"

const Main = () => {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered By Me" />
            <CardContent>
                <Typography align="center" variant="h5">
                    Total Balance $100
                </Typography>
                <Typography variant="subtitle1" style={{ lineHeight: "1.5em", marginTop: "20px" }}>
                    {/* InfoCard... */}
                    Try saying the expenditure
                </Typography>
                <Divider />
                {/* Form */}
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing="2">
                    <Grid item xs={12}>
                        {/* List */}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main