"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            고객 후기
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            실제 고객들의 경험을 확인하세요
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="bg-gray-50 p-6 rounded-2xl"
            variants={itemVariants}
          >
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">
                  K
                </div>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">김지훈</h4>
                <p className="text-gray-500 text-sm">서울, 강남구</p>
              </div>
            </div>
            <p className="text-gray-700">
              "명도소송 진행이 처음이라 막막했는데, 변호사님의 명확한 설명과
              빠른 진행으로 한 달 만에 해결되었습니다. 정말 감사합니다."
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-6 rounded-2xl"
            variants={itemVariants}
          >
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">
                  L
                </div>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">이수진</h4>
                <p className="text-gray-500 text-sm">부산, 해운대구</p>
              </div>
            </div>
            <p className="text-gray-700">
              "임차인이 나가지 않아 고민이었는데, 전문적인 법률 조언과 체계적인
              소송 진행으로 무사히 해결했습니다. 전문가의 도움이 정말 중요하다는
              것을 깨달았습니다."
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-6 rounded-2xl"
            variants={itemVariants}
          >
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">
                  P
                </div>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">박민수</h4>
                <p className="text-gray-500 text-sm">인천, 연수구</p>
              </div>
            </div>
            <p className="text-gray-700">
              "여러 변호사를 알아봤지만 이곳의 설명이 가장 명확했고, 예상보다
              빠르게 문제가 해결되었습니다. 비용도 합리적이어서 더욱
              만족스러웠습니다."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
