"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <section className="py-20 bg-green-50" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            지금 시작하세요
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            경험 많은 변호사와 함께 명도소송을 진행하세요. 빠르고 확실한
            해결책을 제공합니다.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="bg-white text-green-600 font-semibold py-3 px-8 rounded-full border border-green-600 hover:bg-green-50"
            >
              상담 예약하기
            </Link>
            <Link
              href="/info"
              className="bg-green-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-700"
            >
              더 알아보기
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
