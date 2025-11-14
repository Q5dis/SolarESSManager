import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import turnon from '../../img/yellow_gray.png';

function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState(0);
  const sectionsCount = 7;

  useEffect(() => {
    let accumulatedDelta = 0;
    let isScrolling = false;
    const threshold = 50;

    const handleWheel = (e) => {
      if (isScrolling) return;
      e.preventDefault();

      accumulatedDelta += e.deltaY;

      if (Math.abs(accumulatedDelta) > threshold) {
        isScrolling = true;
        if (accumulatedDelta > 0 && currentSection < sectionsCount - 1) {
          setDirection(1);
          setCurrentSection(prev => prev + 1);
        } else if (accumulatedDelta < 0 && currentSection > 0) {
          setDirection(-1);
          setCurrentSection(prev => prev - 1);
        }
        accumulatedDelta = 0;
        setTimeout(() => { isScrolling = false; }, 800);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSection]);

  const fadeInUpSlow = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.6, ease: "easeIn" }
    }
  };

  const slideVariants = {
    enter: (dir) => ({
      y: dir > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    exit: (dir) => ({
      y: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.8, ease: "easeIn" }
    })
  };

  const sections = [
    {
      id: 0,
      content: (
        <div style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <motion.h1
            key="title-0"
            initial="hidden"
            animate="visible"
            variants={fadeInUpSlow}
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              marginBottom: '40px',
              color: '#333',
              textAlign: 'center'
            }}
          >
            What is <span style={{ color: '#FFD900' }}>Solar ESS Manager?</span>
          </motion.h1>
          <motion.img
            key="img-0"
            initial="hidden"
            animate="visible"
            variants={fadeInUpSlow}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            src={turnon}
            alt="yellow_gray"
            style={{ width: '400px', height: 'auto', maxWidth: '80%', cursor: 'pointer' }}
          />
        </div>
      )
    },
    {
      id: 1,
      content: (
        <div style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h2 style={{ fontSize: '64px', fontWeight: 'bold', textAlign: 'center', color: '#333' }}>
            INTRODUCING <span style={{ color: '#FFD900' }}>S.E.M</span>
          </h2>
        </div>
      )
    },
    {
      id: 2,
      content: (
        <div style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{ width: '90%', maxWidth: '800px', padding: '60px 40px', border: '2px solid #333', cursor: 'pointer' }}>
            <h3 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center', color: '#333' }}>프로젝트 개요</h3>
            <p style={{ fontSize: '20px', lineHeight: '1.8', textAlign: 'center', color: '#666' }}>
              Solar ESS Manager(S.E.M)는 태양광 에너지 저장 시스템을 효율적으로 관리하는
              스마트 플랫폼입니다. 실시간 모니터링과 최적화 기능을 제공합니다.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      content: (
        <div style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{ width: '90%', maxWidth: '800px', padding: '60px 40px', border: '2px solid #333', cursor: 'pointer' }}>
            <h3 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center', color: '#333' }}>진행 과정 및 기술 스택</h3>
            <p style={{ fontSize: '20px', lineHeight: '1.8', textAlign: 'center', color: '#666' }}>
              초기 기획 → 데이터 수집 → 알고리즘 개발 → 프론트/백 통합 → 테스트 & 배포<br />
              사용 기술: React, Node.js, MongoDB
            </p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      content: (
        <div style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{ width: '90%', maxWidth: '800px', padding: '60px 40px', border: '2px solid #333', cursor: 'pointer' }}>
            <h3 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center', color: '#333' }}>팀 소개 | Watt's Up?</h3>
            <p style={{ fontSize: '20px', lineHeight: '1.8', textAlign: 'center', color: '#666' }}>
              What's Up? 이라는 문장과 전력단위인 Watt를 더한
              재치있는 말장난으로, 전력관리의 효율성을 잡겠다는
              패기가 담긴 이름입니다.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      content: (
        <div style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{ width: '90%', maxWidth: '800px', padding: '60px 40px', border: '2px solid #333', cursor: 'pointer' }}>
            <h3 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center', color: '#333' }}>팀원소개 / 연락처</h3>
            <p style={{ fontSize: '20px', lineHeight: '1.8', textAlign: 'center', color: '#666' }}>
              팀장/프론트: 오왕경 (hong@example.com)<br />
              머신러닝: 안태현 (kim@example.com)<br />
              백엔드: 이민정 (lee@example.com)<br />
              아두이노: 윤태훈 (lee@example.com)<br />
              아두이노: 최하연 (lee@example.com)
            </p>
          </div>
        </div>
      )
    },
    {
      id: 6,
      content: (
        <div style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{ width: '90%', maxWidth: '800px', padding: '60px 40px', border: '2px solid #333', cursor: 'pointer' }}>
            <h3 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center', color: '#333' }}>깃허브 레포지토리</h3>
            <p style={{ fontSize: '20px', lineHeight: '1.8', textAlign: 'center', color: '#666' }}>
              <a href="https://github.com/example/Solar-ESS-Manager" target="_blank" rel="noreferrer" style={{ color: '#FFD900', textDecoration: 'none' }}>
                https://github.com/example/Solar-ESS-Manager
              </a>
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {currentSection === 0 ? (
        // 첫 섹션은 기존 천천한 fadeInUpSlow 유지
        sections[0].content
      ) : (
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentSection}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ position: 'absolute', width: '100%', height: '100%' }}
          >
            {sections[currentSection].content}
          </motion.div>
        </AnimatePresence>
      )}

      {/* 페이지 인디케이터 */}
      <div style={{
        position: 'fixed',
        right: '30px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        zIndex: 1000
      }}>
        {sections.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentSection(i)}
            style={{
              width: '12px',
              height: '12px',
              border: '2px solid #333',
              backgroundColor: currentSection === i ? '#FFD900' : 'transparent',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
