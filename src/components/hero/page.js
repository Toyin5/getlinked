import Image from "next/image";
import styles from "./page.module.css";
import { Montserrat } from "next/font/google";
import RegisterButton from "../register-button/button";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function Hero() {
  return (
    <div className={montserrat.variable}>
      <div className={styles.Hero}>
        <div className={styles.subHeading}>
          <h2>Igniting a Revolution in HR Innovation</h2>
          <div className={styles.subHeading__img}>
            <Image
              src="/vector4.svg"
              alt="vector img"
              width={219}
              height={17}
              priority
            />
          </div>
        </div>
        <section className={styles.hero__content}>
          <div className={styles.hero__content__text}>
            <h1>
              getlinked Te
              <span>
                c{" "}
                <Image
                  src="/bolb.svg"
                  alt="spark"
                  width={25}
                  height={25}
                  priority
                />
              </span>
              h Hackathon&nbsp;
              <span>
                {" "}
                1.0
                <Image
                  src="/chain.svg"
                  alt="chain"
                  width={29}
                  height={29}
                  priority
                />{" "}
              </span>
              <span>
                {" "}
                <Image
                  src="/spark.svg"
                  alt="spark"
                  width={25}
                  height={25}
                  priority
                />
              </span>
            </h1>
            <p>
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <div>
              <RegisterButton />
            </div>
            <h1>00h 00m 00s</h1>
          </div>
          <div className={styles.hero__content__img}>
            <div>
              <Image
                src="/man-wearing-smart-glasses.svg"
                alt="man-wearing-smart-glasses"
                width={23}
                height={23}
                priority
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
