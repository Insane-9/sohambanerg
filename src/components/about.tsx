import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

// Service Card
const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About
export const About = () => {
  return (
    <SectionWrapper idName="about">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        {/* Body */}
        <motion.p
          variants={fadeIn(undefined, undefined, 0.1, 1)}
          className="empty-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Hi there! I’m Soham Banerjee, a systems-oriented Full Stack Solana Developer dedicated to building high-performance decentralized infrastructure. With over 4 years of expertise across Ethereum and the Solana Virtual Machine (SVM), I specialize in bridging the gap between rigorous on-chain engineering and seamless Web3 user experiences. My development philosophy is "Systems-First," focusing on the complexities of high-concurrency architecture, PDA derivation, and atomic Cross-Program Invocations (CPI) to ensure every transaction is secure and optimized.
          I don’t just build dApps; I architect the entire stack—from writing secure Rust/Anchor programs and Token-2022 standards to engineering responsive Next.js frontends that decode on-chain data in real-time. My technical edge is sharpened by an academic background featuring 5 patents and 10 research papers in blockchain scaling and cryptography. Whether I am developing a DAO Governance Engine with custom treasury vaults or a trustless Escrow protocol, I leverage my full-stack arsenal to create robust, decentralized solutions that push the boundaries of Solana’s composability.        
        </motion.p>
        
        {/* Service Card */}
        <div className="mt-20 flex flex-wrap gap-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
