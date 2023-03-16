import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-1xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/about.jpeg"
        className="mt-36 mb-4 md:mb-0 md:mt-0 flex-shrink-0 h-32 w-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />
      <div className="md:px-10 mt-6">
        <h4 className="text-1xl md:text-2xl font-semibold mb-4">
          私のストーリーを{' '}
          <span className="underline decoration-[#F7AB0A]">少しだけ</span>
        </h4>
        <p className="">
          Master
          Guildは第一フェーズとしてはwebの制作会社であり、第二フェーズでは事業開発などを行っている総勢20人ほどいる、フリーランスの集まりです。心から『仲間』と呼べるメンバーがいて、明確なミッション、ビジョンを共有し合える最高の環境を構築していけていることに幸せを感じています。今後のMaster
          Guildに是非とも期待してください！
        </p>
      </div>
    </motion.div>
  );
};

export default About;
