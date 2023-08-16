import React from "react";
import classes from "./HomePage.module.css";
import video from "./video/videoplayback.webm";
import { Image } from "react-bootstrap";

const Dummy_Images = [
  {
    id: "1",
    src:
      "https://images.unsplash.com/photo-1586423702505-b13505519074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVsbWV0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    description: "FULL FACE HELMETS",
  },
  {
    id: "2",
    src:
      "https://media.istockphoto.com/photos/you-wanna-take-me-on-picture-id486421883?k=20&m=486421883&s=612x612&w=0&h=df5BZh2Hd5is7O3plBe2ijdVmArVnXyQqwRUb4p-k30=",
    description: "OFF ROAD HELMETS",
  },
  {
    id: "3",
    src: "https://cdn.visordown.com/field/image/84738.jpg",
    description: "JACKETS",
  },
  {
    id: "4",
    src:
      "https://mototravel.uk/wp-content/uploads/alpinestars-toucan-gore-tex-boots-1.jpg",
    description: "BOOTS",
  },
  {
    id: "5",
    src:
      "https://www.ktm.com/content/dam/websites/ktm-com/language-masters/en/racing/motogp/2021/374157_Miguel%20Oliveira_88_Red%20Bull%20KTM%20Factory%20Racing_MotoGP_Team%20Presentation_2021%20_70_.jpg",
    description: "FULL KIT",
  },
  {
    id: "6",
    src:
      "https://i.pinimg.com/originals/8c/cc/45/8ccc4579761e4bf37f1ddc21a4c455d1.jpg",
    description: "ACCESSORIES",
  },
];

function HomePage() {
  return (
    <div>
      <div className={classes.video}>
        <video
          autoPlay
          loop
          controls
          muted
          style={{
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <source src={video} type="video/webm"></source>
        </video>
      </div>
      <div className={classes.imageList}>
        {Dummy_Images.map((element) => {
          return (
            <div className={classes.imageContent} key={element.id}>
              <Image src={element.src} className={classes.image}></Image>
              <div className={classes.overlay}>
                <div className={classes.description}>
                  <p>{element.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.youtube}>
        <div className={classes.youtube_button}>
          <Image
            src="https://icon-library.com/images/youtube-play-icon/youtube-play-icon-0.jpg"
            width="150px"
          ></Image>
        </div>
      </div>
      <div className={`${classes.info} text-center`}>
        <h1>
          be safe. be updated.<br></br>
          <span>follow us on social media</span>
        </h1>
      </div>
    </div>
  );
}

export default HomePage;
