"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="pt-32 pb-20 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-3xl"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
          >
            빠르고 확실한 명도
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800"
          >
            월세 미납과 과도한 이사비 요구
            <br />더 이상 참지 마세요
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-12 text-gray-700"
          >
            보증금이 소진되기 전에 명도소송을 시작하세요.
            <br />
            16년 경력의 변호사가 확실히 해결합니다.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-green-600 font-medium rounded-full border border-green-600 text-center hover:bg-green-50 transition"
            >
              카카오톡으로 상담하기
            </Link>
            <Link
              href="/request"
              className="px-6 py-3 bg-green-600 font-medium rounded-full text-white text-center hover:bg-green-700 transition"
            >
              지금 명도소송 의뢰하기
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 mt-16 text-gray-800"
          >
            <div className="text-center">
              <p className="text-3xl font-bold">16년+</p>
              <p className="text-sm mt-1">전문 변호사 경력</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">1000건+</p>
              <p className="text-sm mt-1">누적 성공사례</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">200일</p>
              <p className="text-sm mt-1">평균 소요 기간</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
