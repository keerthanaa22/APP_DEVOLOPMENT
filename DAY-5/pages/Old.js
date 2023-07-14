import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './query.css';
import cook from "./m.jpg";
import modi from "./modi.jpg"

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard5() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='alignquery'>
    
    <Card sx={{ maxWidth: 545 }} style={{marginLeft:'300px'}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Keerthanaa"
        subheader="September 14, 2016"
      />
      <div className='mediaquery'>
      <CardMedia
        component="img"
        style={{width:'120%'}}
        height="194"
        image={cook}
        
      />
      </div>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Yummy......</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    <br></br>
    <Card sx={{ maxWidth: 545 }} style={{marginLeft:'300px'}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Abisree"
        subheader="July 13, 2023"
      />

      <CardMedia
        component="img"
        style={{width:'100%'}}
        
        height="194"
        image={modi}
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Modi will visit France at the invitation of President Emmanuel Macron from July 13-14,
         and will be the guest of honour at the Bastille Day Parade on July 14
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>India🏳️‍⚧️To🏳️‍⚧️France</Typography>
          <Typography paragraph>
          Macron and Modi will hold formal talks, and the French president will host a state 
          banquet and a private dinner for the prime minister, the external affairs ministry said.
          </Typography>
          <Typography paragraph>
          Modi is visiting France at the invitation of Macron during July 13-14. 
          Being the chief guest at the military parade is considered a signal honour, 
          and the last foreign leader to be invited by France was former US president 
          Donald Trump in 2017. A 269-member Indian tri-services contingent will participate 
          in the parade and three French-origin Rafale combat jets of the Indian Air Force (IAF) 
          will join a flypast.
          </Typography>
          <Typography paragraph>
          Modi is also scheduled to meet his French counterpart Élisabeth Borne and the presidents
           of the Senate and the National Assembly. He will also interact with the Indian diaspora 
           in France, CEOs of Indian and French companies, and prominent French personalities.
          </Typography>
        
        </CardContent>
      </Collapse>
    </Card>
    <br></br>
    <Card sx={{ maxWidth: 545 }} style={{marginLeft:'300px'}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Ajay_Navaneeth"
        subheader="September 23, 2016"
      />
      <CardMedia
        component="img"
        style={{width:'100%'}}
        height="800"
        image="https://media4.giphy.com/media/26tOY3KjQUL9YhRT2/giphy.webp?cid=ecf05e470vn0rdvehjc09nkclcciavcrgsok1ij2yswa4skl&ep=v1_gifs_search&rid=giphy.webp&ct=g.gif"
    
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Apple Watch is rated water resistant to 50 metres. 1 Perfect for swimming, 
        surfing or water balloon fights. Quick, duck! Only on Ultra Apple Watch Ultra. 
        Adventure awaits!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>WATCHit😎⌚🤞</Typography>
          <Typography paragraph>
          Apple Watch is a wearable smartwatch that allows users to accomplish a variety of tasks,
           including making phone calls, sending text messages and reading email. Apple released 
           the Apple Watch on April 24, 2015.
          </Typography>
          <Typography paragraph>
          Apple initially designed the watch to replace phones and reduce the time users 
          spend looking at phone screens. However, the Apple Watch became popular in part 
          for its innovations in fitness tracking and health monitoring, as well as its 
          ability to be used with internet of things (IoT) devices.
          </Typography>
          <Typography paragraph>
          Since its release, the Apple Watch has added several new features, 
          including water resistance, blood oxygen and electrocardiogram (ECG) 
          readings, a body temperature sensor and an emergency SOS that can detect 
          when a user falls or has some other accident and contact emergency services.
           The watches can be synced with a user's iPhone, Mac laptop and AirPods. 
           Apple Watches accounted for 43% of smartwatch shipments in the fourth 
           quarter of 2022, dominating that market, according to research firm Counterpoint.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>







    <br></br>
    <Card sx={{ maxWidth: 545 }} style={{marginLeft:'300px'}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Harshid_r"
        subheader="January 03, 2020"
      />
      <CardMedia
        component="img"
        style={{width:'100%'}}
        height="300"
        image="https://media3.giphy.com/media/dVuyBgq2z5gVBkFtDc/200w.webp?cid=ecf05e4744jgx1rbl5j3tjrttrm3q8awqq78uvbr7yrmlm7j&ep=v1_gifs_search&rid=200w.webp&ct=g.gif"
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Alert!

If you have developed any symptoms of coronavirus (COVID-19),
 please call the Govt. of India helpline 1075 or state helpline numbers.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>What ???😮😮😮:</Typography>
          <Typography paragraph>
          The COVID-19 pandemic, also known as the coronavirus pandemic, 
          is an ongoing pandemic of coronavirus disease 2019 (COVID-19) 
          caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). 
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>



    </div>
  );
}