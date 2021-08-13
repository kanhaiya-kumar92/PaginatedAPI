import { Card, Avatar, Grid } from "@material-ui/core";

export default function UserDetail({ user }) {
  return (
    <div>
      <Card className="userCard">
        <Grid container justifyContent="space-between">
          <Grid item xs={2}>
            <img alt="user" src={user.avatar} />
          </Grid>
          <Grid item xs={6}>
            <h3>
              {user.first_name} {user.last_name}
            </h3>
            Email : {user.email}
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
