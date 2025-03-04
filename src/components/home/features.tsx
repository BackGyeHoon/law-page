"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Features = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
            주요 서비스
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            법률적 문제 해결을 위한 전문 서비스를 제공합니다
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="p-6 rounded-lg" variants={itemVariants}>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-green-600 font-bold">01</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              명도소송 대행
            </h3>
            <p className="text-gray-700">
              세입자 퇴거 문제를 법적으로 해결하여 재산권을 보호해 드립니다.
            </p>
          </motion.div>

          <motion.div className="p-6 rounded-lg" variants={itemVariants}>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-green-600 font-bold">02</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              임대차 분쟁 해결
            </h3>
            <p className="text-gray-700">
              임대차 계약 관련 분쟁을 전문적으로 중재하고 해결책을 제시합니다.
            </p>
          </motion.div>

          <motion.div className="p-6 rounded-lg" variants={itemVariants}>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-green-600 font-bold">03</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              법률 자문
            </h3>
            <p className="text-gray-700">
              부동산 관련 법률 자문을 통해 위험 요소를 사전에 예방합니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
