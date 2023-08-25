import styles from "@/styles/Home.module.css";
import Image from "next/image";
import img from "../public/1.jpg";

const Images = () => {
  return (
    <div className={styles.main}>
      <div className="images-container">
        <Image src={img} alt="" placeholder="blur" width="280" height="400" />
      </div>

      <div className="images-container">
        {["1", "2", "3", "4"].map((path) => (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt="" width="280" height="400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
