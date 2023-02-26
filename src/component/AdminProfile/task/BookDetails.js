import React, { useContext } from "react";
import { ItemCont } from "../Items";
import { useParams } from "react-router-dom";
import { LastName } from "../LeftSideBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function BookDetails() {
  const { formRecords } = useContext(LastName);
  const { id } = useParams();
  const singleUser = formRecords.find((item, index) => index === Number(id));

  return (
    <ItemCont className="col-10 itemCont">
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h5>Book Detail</h5>
        <Card
          sx={{
            maxWidth: 500,
            boxShadow: "2px 2px 2px 4px rgb(155, 152, 152) ",
          }}
        >
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Book Name :{singleUser.bookname}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Author Name :{singleUser.authorname}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Edition :{singleUser.edition}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Serial Number :{singleUser.serialnumber}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </ItemCont>
  );
}

export default BookDetails;
