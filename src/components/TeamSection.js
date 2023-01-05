import {
    Card,
    CardBody,
    Avatar,
    IconButton,
    Typography,
  } from "@material-tailwind/react";
  
  function TeamCard({ img, name, title }) {
    return (
      <Card color="transparent" shadow={false}>
        <CardBody className="text-center">
          <Avatar
            src={img}
            alt={name}
            variant="circular"
            size="xxl"
            className="object-top mb-6"
          />
          <Typography variant="h5" color="blue-gray">
            {name}
          </Typography>
          <Typography color="blue" className="mb-2 font-normal">
            {title}
          </Typography>
          <div className="flex items-center justify-center">
            <IconButton variant="text" color="blue-gray">
              <i className="text-lg not-italic fa-brands fa-twitter" />
            </IconButton>
            <IconButton variant="text" color="blue-gray">
              <i className="text-lg not-italic fa-brands fa-linkedin" />
            </IconButton>
            <IconButton variant="text" color="blue-gray">
              <i className="text-lg not-italic fa-brands fa-dribbble" />
            </IconButton>
          </div>
        </CardBody>
      </Card>
    );
  }
  
  export function TeamSectionTwo() {
    const members = [
      {
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        name: "Lori Bryson",
        title: "Sequoia Capital",
      },
      {
        img: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        name: "Anaiah Whitten",
        title: "Valar Ventures",
      },
      {
        img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        name: "Noah Pierre",
        title: "New Enterprise Associates",
      },
      {
        img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        name: "Katherine Moss",
        title: "Blackbird Ventures",
      },
    ];
    return (
      <section className="px-8 py-8 lg:py-40">
        <div className="container mx-auto">
          <div className="mb-20 text-center">
            <Typography variant="h2" color="blue-gray" className="mb-4">
              Our Awesome Team
            </Typography>
            <Typography variant="lead" color="gray">
              This is the paragraph where you can write more details about your
              team.
            </Typography>
          </div>
          <div className="grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {members.map((props, key) => (
              <TeamCard key={key} {...props} />
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default TeamSectionTwo;