import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ImgMediaCard() {
  return (
    <div className="container mx-auto px-3 py-3">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-4 pt-100 md:pt-100 xl:pt-32 justify-items-center">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="imgs/pila.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              PILATES
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              필라테스는 몸의 중심을 바로 잡고 코어를 강화해 균형 잡힌 몸을
              만들어 줍니다. 유연성을 높이고 자세를 교정해 건강한 일상을 되찾을
              수 있습니다. 부상 예방까지 챙기며, 바른 체형으로 자신감을
              키워보세요.
            </Typography>
          </CardContent>
          <CardActions>
            <a href="https://blog.naver.com/klfit7700/223728965428">
              <Button size="small">Learn More</Button>
            </a>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="imgs/ems.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              EMS
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              EMS 트레이닝은 단 20분으로 전신 근육을 깊이 자극해 운동 효과를
              극대화합니다. 짧은 시간에 지방을 연소하고 체력을 빠르게
              끌어올립니다. 바쁜 직장인도 부담 없이 꾸준히 할 수 있는 스마트
              운동입니다.
            </Typography>
          </CardContent>
          <CardActions>
            <a href="https://blog.naver.com/klfit7700/222502743456">
              <Button size="small">Learn More</Button>
            </a>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="imgs/pt.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              PERSONAL TRAINING
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              1:1 PT는 개인의 체형과 목표에 맞춰 맞춤형 운동을 제공합니다. 전문
              트레이너가 자세, 식단, 운동 루틴까지 세밀하게 관리합니다. 빠르고
              안전한 변화로 원하는 몸을 만들 수 있습니다.
            </Typography>
          </CardContent>
          <CardActions>
            <a href="https://blog.naver.com/klfit7700/223950969771">
              <Button size="small">Learn More</Button>
            </a>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

// pages/Write.jsx
function Write() {
  return (
    <>
      <ImgMediaCard />
    </>
  );
}

export default Write;
