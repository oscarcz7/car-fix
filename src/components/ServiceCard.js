import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

function ServiceCard(props) {
  return (
    <section className="grid lg:p-4 place-items-center">
      <Card className="w-auto max-w-[24rem] shadow-2xl">
        <CardBody className="flex items-center pt-1 text-blue-900">
          <img src={props.source} alt="image service description" height="200"/>
          <div className="ml-4">
            <Typography  className="text-xl font-medium">
              {props.title}
            </Typography>
            <Typography className="pt-2 font-thin" variant="small">
              {props.description}
            </Typography>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}

export default ServiceCard;
