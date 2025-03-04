"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useUIStore } from "@/store/use-ui-store";

const Header = () => {
  const { isMobileMenuOpen, toggleMobileMenu } = useUIStore();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-green-600">법률서비스</span>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden lg:flex space-x-8">
          <Link
            href="#"
            className="font-medium text-gray-700 hover:text-green-600 transition-colors"
          >
            서비스소개
          </Link>
          <Link
            href="/pricing"
            className="font-medium text-gray-700 hover:text-green-600 transition-colors"
          >
            비용안내
          </Link>
          <Link
            href="/cases"
            className="font-medium text-gray-700 hover:text-green-600 transition-colors"
          >
            성공사례
          </Link>
          <Link
            href="/info"
            className="font-medium text-gray-700 hover:text-green-600 transition-colors"
          >
            유용한 정보
          </Link>
          <Link
            href="/services"
            className="font-medium text-gray-700 hover:text-green-600 transition-colors"
          >
            다른 서비스
          </Link>
        </nav>

        <div className="hidden lg:flex space-x-4">
          <Link
            href="/contact"
            className="px-4 py-2 rounded-full bg-white border border-green-600 text-green-600 hover:bg-green-50 transition-colors"
          >
            상담하기
          </Link>
          <Link
            href="/request"
            className="px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
          >
            의뢰하기
          </Link>
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="lg:hidden"
          onClick={toggleMobileMenu}
          aria-label="메뉴 토글"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-50 pt-20">
            <button
              className="absolute top-4 right-4"
              onClick={toggleMobileMenu}
              aria-label="메뉴 닫기"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="flex flex-col space-y-4 p-4">
              <Link
                href="/about"
                className="p-2 text-lg"
                onClick={toggleMobileMenu}
              >
                서비스소개
              </Link>
              <Link
                href="/pricing"
                className="p-2 text-lg"
                onClick={toggleMobileMenu}
              >
                비용안내
              </Link>
              <Link
                href="/cases"
                className="p-2 text-lg"
                onClick={toggleMobileMenu}
              >
                성공사례
              </Link>
              <Link
                href="/info"
                className="p-2 text-lg"
                onClick={toggleMobileMenu}
              >
                유용한 정보
              </Link>
              <Link
                href="/services"
                className="p-2 text-lg"
                onClick={toggleMobileMenu}
              >
                다른 서비스
              </Link>
              <Link
                href="/contact"
                className="p-2 text-lg bg-primary text-white rounded"
                onClick={toggleMobileMenu}
              >
                상담하기
              </Link>
              <Link
                href="/request"
                className="p-2 text-lg bg-secondary text-white rounded"
                onClick={toggleMobileMenu}
              >
                의뢰하기
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
