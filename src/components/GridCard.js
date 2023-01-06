import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Button,
  } from "@material-tailwind/react";
  
  function BlogPostCard({ img, tag, title, desc, author, date }) {
    return (
      <Card>
        <CardHeader className="h-64">
          <img src={img} alt={title} className="object-cover w-full h-full" />
        </CardHeader>
        <CardBody>
          <Typography variant="small" color="blue" className="mb-1 font-semibold">
            {tag}
          </Typography>
          <a
            href="#"
            className="grid items-start grid-cols-6 gap-2 mb-1 transition-colors text-blue-gray-900 hover:text-blue-500"
          >
            <div className="col-span-5">
              <Typography variant="h5" className="normal-case">
                {title}
              </Typography>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-auto -mt-0.5 h-7 w-7 rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 11l5-5m0 0l5 5m-5-5v12"
              />
            </svg>
          </a>
          <Typography color="gray" className="mb-8 font-normal">
            {desc}
          </Typography>
          <div className="flex items-center gap-3">
            <Avatar
              variant="circular"
              size="sm"
              src={author?.img}
              alt={author?.name}
            />
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-semibold"
              >
                {author?.name}
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-xs font-normal"
              >
                {date}
              </Typography>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
  
  export function BlogSectionOne() {
    const posts = [
      {
        img: "https://images.unsplash.com/photo-1486728297118-82a07bc48a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2429&q=80",
        tag: "Management",
        title: "Katie's management lessons",
        desc: "Finding temporary housing for your dog should be as easy as renting an Airbnb.",
        date: "17 Jan 2022",
        author: {
          img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
          name: "Alec Whitten",
        },
      },
      {
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRlYW0lMjB3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        tag: "Product",
        title: "Rover raised to $65 million",
        desc: "That’s the idea behind Rover, which raised $65 million to expand its products sitting.",
        date: "16 Jan 2022",
        author: {
          img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
          name: "Demi Wilkinson",
        },
      },
      {
        img: "https://images.unsplash.com/photo-1548611716-3000815a5803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRlc2slMjBzZXR1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        tag: "Design",
        title: "What is Prototyping?",
        desc: "If you've ever wanted to train a machine learning model and integrate it with IFTTT.",
        date: "15 Jan 2022",
        author: {
          img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
          name: "Candice Wu",
        },
      },
      {
        img: "https://images.unsplash.com/photo-1557425955-df376b5903c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        tag: "Strategy",
        title: "US venture investment tricks",
        desc: "Venture investment in U.S. startups rose sequentially in the second quarter boosted.",
        date: "14 Jan 2022",
        author: {
          img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
          name: "Natali Craig",
        },
      },
      {
        img: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        tag: "Development",
        title: "MLabs mixes machine learning",
        desc: "MateVerse, a platform where novices can spin out machine learning and few outsized.",
        date: "13 Jan 2022",
        author: {
          img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
          name: "Alec Whitten",
        },
      },
      {
        img: "https://images.unsplash.com/photo-1630090896228-88e5ea707294?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        tag: "Customer Support",
        title: "5 Ways to improve your App",
        desc: "Create first, edit second. Never do them at the same time.",
        date: "12 Jan 2022",
        author: {
          img: "https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
          name: "Orlando Diggs",
        },
      },
    ];
  
    return (
      <section>
        <div className="container grid items-start grid-cols-1 px-8 pt-20 pb-16 mx-auto gap-y-24 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(({ img, tag, title, desc, date, author }) => (
            <BlogPostCard
              key={title}
              img={img}
              tag={tag}
              title={title}
              desc={desc}
              date={date}
              author={{
                img: author?.img,
                name: author?.name,
              }}
            />
          ))}
        </div>
        <div className="px-12 pb-20 text-center">
          <Button variant="text" className="inline-flex items-center pl-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 13l-5 5m0 0l-5-5m5 5V6"
              />
            </svg>
            load more
          </Button>
        </div>
      </section>
    );
  }
  
  export default BlogSectionOne;