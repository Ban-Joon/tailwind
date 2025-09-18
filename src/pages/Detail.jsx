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
            image="imgs/eat.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              식단 정보
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              전문 트레이너들이 개인마다 다른 체형과 체력, 생활패턴에 맞춰 운동
              종류와 강도, 식단 케어를 도와드리고 있습니다.
            </Typography>
          </CardContent>
          <CardActions>
            <a href="https://blog.naver.com/klfit7700/223982832275">
              <Button size="small">Learn More</Button>
            </a>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="imgs/health.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              운동 정보
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              과학적 근거와 전문 트레이너의 노하우로 만든 안전한 운동
              정보입니다. 부상 방지까지 고려한, 믿고 따라 할 수 있는 건강한 운동
              가이드입니다.
            </Typography>
          </CardContent>
          <CardActions>
            <a href="https://blog.naver.com/klfit7700/223970276352">
              <Button size="small">Learn More</Button>
            </a>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="imgs/cal.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              건강 칼럼
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              1:1 PT는 개인의 체형과 목표에 맞춰 맞춤형 운동을 제공합니다. 전문
              트레이너가 자세, 식단, 운동 루틴까지 세밀하게 관리합니다. 빠르고
              안전한 변화로 원하는 몸을 만들 수 있습니다.
            </Typography>
          </CardContent>
          <CardActions>
            <a href="https://blog.naver.com/klfit7700/224002450267">
              <Button size="small">Learn More</Button>
            </a>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

// pages/Detail.jsx
function Detail() {
  return (
    <>
      <ImgMediaCard />
    </>
  );
}

export default Detail;
