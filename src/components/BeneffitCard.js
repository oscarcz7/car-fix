import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

function BenefitCard(props) {
  return (
    <section className="grid p-4 place-items-center">
      <Card className="w-auto max-w-[24rem] shadow-2xl">
        <CardBody className="flex items-center pt-3">
          <Avatar src={props.src} alt="avatar" variant="circular" />
          <div className="ml-10">
            <Typography className="text-2xl font-semibold text-blue-900">
              {props.title}
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="flex items-center pt-1">
          <Typography className="text-blue-900">{props.description}</Typography>
        </CardFooter>
      </Card>
    </section>
  );
}

export default BenefitCard;
