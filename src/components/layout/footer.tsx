import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">법률서비스</h3>
            <p className="text-gray-600 mb-4">
              16년 경력의 전문 변호사가 제공하는 명도소송 및 부동산 법률 서비스
            </p>
            <p className="text-gray-500">사업자 등록번호: 123-45-67890</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">서비스</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-green-600"
                >
                  서비스 소개
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-green-600"
                >
                  비용 안내
                </Link>
              </li>
              <li>
                <Link
                  href="/cases"
                  className="text-gray-600 hover:text-green-600"
                >
                  성공 사례
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">정보</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 hover:text-green-600"
                >
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link
                  href="/policy"
                  className="text-gray-600 hover:text-green-600"
                >
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-green-600"
                >
                  이용약관
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">연락처</h4>
            <p className="text-gray-600 mb-2">서울특별시 강남구 테헤란로 123</p>
            <p className="text-gray-600 mb-2">이메일: info@lawservice.com</p>
            <p className="text-gray-600 mb-4">전화: 02-1234-5678</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-green-600">
                <span className="sr-only">카카오톡</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 5.51 2 9.95c0 3.32 2.67 6.15 6.35 7.43l-.06 3.56c0 .47.57.67.87.33l2.92-3.15c-.05 0 .07-.01.07-.01.65.05 1.21.08 1.85.08 5.52 0 10-3.51 10-7.95 0-4.44-4.48-7.95-10-7.95" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600">
                <span className="sr-only">네이버 블로그</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 3H8C5.239 3 3 5.239 3 8v8c0 2.761 2.239 5 5 5h8c2.761 0 5-2.239 5-5V8c0-2.761-2.239-5-5-5zm0 2c1.654 0 3 1.346 3 3v8c0 1.654-1.346 3-3 3H8c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3h8z" />
                  <path d="M9 8h2v8H9zM13 8h2v8h-2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>© {new Date().getFullYear()} 법률서비스. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
