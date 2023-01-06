import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { propTypesSelected } from "@material-tailwind/react/types/components/select";

function Star() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-yellow-600"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export function TestimonialCard(props) {
  return (
    <>
      <section className="px-2 py-8 lg:px-8 lg:py-20 ">
        <div className="container mx-auto">
          <Card
            color="transparent"
            shadow={false}
            className="grid items-center grid-cols-5"
          >
            <CardBody className="flex text-blue-900 col-span-full">
              <img
                className="inline-block w-10 h-10 rounded-full lg:w-24 lg:h-24 "
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              ></img>
              <div className="ml-4">
                <Typography className="mb-5 text-sm font-medium lg:text-xl">
                  {props.feedback}
                </Typography>
                <Typography variant="lead" className="text-xs font-normal">
                  &#8212; {props.client}
                </Typography>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </>
  );
}

export default TestimonialCard;
