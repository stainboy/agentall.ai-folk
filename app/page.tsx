'use client';

import Image from "next/image";
import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import HeroCarouselItem from './components/HeroCarouselItem';
import GradientDivider from './components/GradientDivider';
import TransformAnimation from './components/TransformAnimation';
import DemoForm from './components/DemoForm';
import { IMAGES } from './utils/images';
import { useI18n } from './i18n/I18nContext';

export default function Home() {
  const { t } = useI18n();
  const [uxActiveIndex, setUxActiveIndex] = useState(0);
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  // Carousel data for Hero section
  const heroCarouselItems = [
    {
      id: 'hero-1',
      content: (
        <HeroCarouselItem
          image={IMAGES.HERO_1}
          title={t('carousel.hero1.title')}
          subtitle={t('carousel.hero1.subtitle')}
          metricValue={t('carousel.hero1.metric')}
          fullWidth={false}
          isActive={true}
          animationDelay={0}
          cardPosition={{ x: -150, y: 100, anchor: 'center' }}
          subtitlePosition={{ x: 260, y: -50, anchor: 'center' }}
        />
      )
    },
    {
      id: 'hero-2',
      content: (
        <HeroCarouselItem
          image={IMAGES.HERO_2}
          title={t('carousel.hero2.title')}
          subtitle={t('carousel.hero2.subtitle')}
          metricValue={t('carousel.hero2.metric')}
          fullWidth={false}
          isActive={false}
          animationDelay={200}
          cardPosition={{ x: 150, y: 100, anchor: 'center' }}
          subtitlePosition={{ x: -250, y: -80, anchor: 'center' }}
        />
      )
    },
    {
      id: 'hero-3',
      content: (
        <HeroCarouselItem
          image={IMAGES.HERO_3}
          title={t('carousel.hero3.title')}
          subtitle={t('carousel.hero3.subtitle')}
          metricValue={t('carousel.hero3.metric')}
          fullWidth={false}
          isActive={false}
          animationDelay={400}
          cardPosition={{ x: -200, y: 100, anchor: 'center' }}
          subtitlePosition={{ x: 250, y: -50, anchor: 'center' }}
        />
      )
    }
  ];

  return (
    <div className="min-h-screen h-screen">
      <Navigation onDemoClick={() => setIsDemoFormOpen(true)} />

      {/* Hero Section */}
      <section className="min-h-screen lg:min-h-0 lg:h-auto lg:max-h-5xl flex flex-col justify-between">
        <div className="w-full mx-auto pt-16 lg:pt-20 flex-1 flex flex-col justify-between">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-8 lg:pt-16 text-center space-y-4 lg:space-y-6">
            {/* Decorative dot */}
            <div className="flex justify-center">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>

            <h1 className="hero-title gradient-text">
              {t('hero.title').split('\n').map((line, i) => (
                <span key={i}>
                  {line}<br />
                </span>
              ))}
            </h1>

            <p className="text-base lg:text-lg text-black max-w-xl lg:max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <div className="flex justify-center space-x-4 pt-2">
              <button
                onClick={() => setIsDemoFormOpen(true)}
                className="bg-primary text-white px-4 py-3 text-sm lg:px-6 lg:py-4 lg:text-base hover:bg-primary/90 transition-colors cursor-pointer"
              >
                {t('hero.cta')}
              </button>
            </div>
          </div>

          {/* Bottom Carousel */}
          <Carousel
            items={heroCarouselItems}
            fullWidth={true}
            autoPlay={true}
            autoPlayInterval={5000}
            showNavigation={false}
            showDots={false}
            showProgressBar={false}
            infiniteScroll={true}
            height="h-auto"
          />
        </div>
      </section>

      {/* Gradient Divider */}
      <GradientDivider />

      {/* Video Showcase Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-b from-white via-purple-50/30 to-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="text-center space-y-6 lg:space-y-8 mb-8 lg:mb-12">
            <div className="group cursor-pointer space-y-6">
              <div className="flex justify-center">
                <div className="w-3 h-3 bg-red-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              </div>
              <h2 className="section-title text-foreground">
                {t('video.title')}
              </h2>
              <p className="text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto">
                {t('video.subtitle')}
              </p>
              <div className="flex justify-center">
                <div className="w-20 h-px bg-red-500 group-hover:w-40 transition-all duration-500"></div>
              </div>
            </div>
          </div>
          
          {/* Video Container */}
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border-2 border-purple-100">
              <video
                src="/videos/agentall-demo.mp4"
                title="Agentall AI Platform Demo"
                controls
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg opacity-50"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-lg opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg opacity-50"></div>
          </div>
          
          {/* Video CTA */}
          <div className="text-center mt-8 lg:mt-12">
            <button
              onClick={() => setIsDemoFormOpen(true)}
              className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 text-sm lg:px-8 lg:py-4 lg:text-base hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <span>{t('video.cta')}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Digital Workers Section */}
      <section className="py-12 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* 顶部居中大标题 */}
          <div className="text-center space-y-6 lg:space-y-9 mb-8 lg:mb-16">
            <div className="group cursor-pointer space-y-9">
              <div className="flex justify-center">
                <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              </div>
              <h2 className="section-title text-foreground">
                {t('digitalWorkers.title')}
              </h2>
              <p className="text-base lg:text-lg text-foreground/70">
                {t('digitalWorkers.subtitle')}
              </p>
              <div className="flex justify-center">
                <div className="w-30 h-px bg-primary group-hover:w-60 transition-all duration-500"></div>
              </div>
            </div>
          </div>

          {/* 内容区域 */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-9">
            <div className="w-full lg:flex-1 lg:max-w-lg space-y-4 lg:space-y-6 py-4 lg:py-8">
              <h2 className="section-title text-foreground">{t('digitalWorkers.sectionTitle')}</h2>
              <div className="group cursor-pointer">
                <p className="text-lg text-black leading-relaxed">
                  <span className="relative inline-block break-words lg:whitespace-nowrap group-hover:before:animate-highlight-1">{t('digitalWorkers.description1')}</span><br />
                  <span className="relative inline-block break-words lg:whitespace-nowrap group-hover:before:animate-highlight-2">{t('digitalWorkers.description2')}</span><br />
                  <span className="relative inline-block break-words lg:whitespace-nowrap group-hover:before:animate-highlight-3">{t('digitalWorkers.description3')}</span><br />
                  <span className="relative inline-block break-words lg:whitespace-nowrap group-hover:before:animate-highlight-4">{t('digitalWorkers.description4')}</span><br />
                  <span className="relative inline-block break-words lg:whitespace-nowrap group-hover:before:animate-highlight-5">{t('digitalWorkers.description5')}</span>
                </p>
              </div>
            </div>
            <div className="w-full lg:flex-1 flex flex-col items-center space-y-4 lg:space-y-6 p-6">
              <video
                src={IMAGES.DIGITAL_WORKERS_VIDEO}
                autoPlay
                loop
                muted
                playsInline
                controls
                className="card-shadow flex-1"
              >
                Your browser does not support the video tag.
              </video>
              <div className="flex flex-col gap-2 text-center">
                <span className="relative text-lg inline-block break-words lg:whitespace-nowrap group-hover:before:animate-highlight-1">{t('digitalWorkers.videoTitle')}</span>
                <span className="relative inline-block break-words lg:whitespace-nowrap group-hover:before:animate-highlight-1">{t('digitalWorkers.videoSubtitle')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-8 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            <div className="w-full flex-1 flex flex-col items-center space-y-4 lg:space-y-6 p-6">
              <video
                src={IMAGES.ANALYTICS_VIDEO}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg lg:rounded-2xl card-shadow flex-1"
              >
                Your browser does not support the video tag.
              </video>
              <div className="flex flex-col gap-2 text-center">
                <span className="relative text-lg inline-block break-words lg:whitespace-nowrap group-hover:before:animate-highlight-1">{t('analytics.videoTitle')}</span>
              </div>
            </div>
            <div className="flex-2 space-y-6 lg:space-y-9 py-4 lg:py-8">
              <div className="group cursor-pointer space-y-9">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                </div>
                <h2 className="section-title text-foreground">{t('analytics.title')}</h2>
                <div className="w-30 h-px bg-primary group-hover:w-40 transition-all duration-500"></div>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-black relative inline-block hover:text-xl hover:before:animate-highlight-1 cursor-pointer transition-all duration-300">{t('analytics.feature1')}</p>
                <p className="text-lg text-black relative inline-block hover:text-xl hover:before:animate-highlight-1 cursor-pointer transition-all duration-300">{t('analytics.feature2')}</p>
                <p className="text-lg text-black relative inline-block hover:text-xl hover:before:animate-highlight-1 cursor-pointer transition-all duration-300">{t('analytics.feature3')}</p>
                <p className="text-lg text-black relative inline-block hover:text-xl hover:before:animate-highlight-1 cursor-pointer transition-all duration-300">{t('analytics.feature4')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Experience Section */}
      <section className="py-12 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center space-y-6 lg:space-y-9">
            <div className="group cursor-pointer space-y-9">
              <div className="flex justify-center">
                <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              </div>
              <h2 className="section-title text-foreground">{t('ux.title')}</h2>
              <div className="flex justify-center">
                <div className="w-30 h-px bg-primary group-hover:w-60 transition-all duration-500"></div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-0">
              <div className="flex-1 space-y-6 lg:space-y-12 text-left">
                <div className={`backdrop-blur-sm p-4 lg:p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer group ${uxActiveIndex === 0
                  ? 'bg-purple-200/30 card-shadow-small hover:bg-purple-300/40'
                  : 'bg-white/50 card-shadow-white hover:bg-purple-100/50'
                  }`}>
                  <p className="text-lg lg:text-xl text-black group-hover:text-purple-700 transition-colors duration-300">
                    <span className="font-serif-display text-2xl lg:text-3xl group-hover:text-purple-800 transition-colors duration-300">{t('ux.card1.title')} </span>
                    {t('ux.card1.desc')}
                  </p>
                  <div className="w-0 group-hover:w-full h-0.5 bg-purple-600 transition-all duration-500 mt-4"></div>
                </div>
                <div className={`backdrop-blur-sm p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer group ${uxActiveIndex === 1
                  ? 'bg-purple-200/30 card-shadow-small hover:bg-purple-300/40'
                  : 'bg-white/50 card-shadow-white hover:bg-purple-100/50'
                  }`}>
                  <p className="text-xl text-black group-hover:text-purple-700 transition-colors duration-300">
                    <span className="font-serif-display text-3xl group-hover:text-purple-800 transition-colors duration-300">{t('ux.card2.title')} </span>
                    {t('ux.card2.desc')}
                  </p>
                  <div className="w-0 group-hover:w-full h-0.5 bg-purple-600 transition-all duration-500 mt-4"></div>
                </div>
                <div className={`backdrop-blur-sm p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer group ${uxActiveIndex === 2
                  ? 'bg-purple-200/30 card-shadow-small hover:bg-purple-300/40'
                  : 'bg-white/50 card-shadow-white hover:bg-purple-100/50'
                  }`}>
                  <p className="text-xl text-black group-hover:text-purple-700 transition-colors duration-300">
                    <span className="font-serif-display text-3xl group-hover:text-purple-800 transition-colors duration-300">{t('ux.card3.title')} </span>
                    {t('ux.card3.desc')}
                  </p>
                  <div className="w-0 group-hover:w-full h-0.5 bg-purple-600 transition-all duration-500 mt-4"></div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center space-y-6">
                <Carousel
                  items={[
                    {
                      id: 'ux-1',
                      content: (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <video
                            src={IMAGES.UX_VIDEO_1}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="rounded-2xl h-[800px] w-auto object-contain"
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      )
                    },
                    {
                      id: 'ux-2',
                      content: (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <video
                            src={IMAGES.UX_VIDEO_2}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="rounded-2xl h-[800px] w-auto object-contain"
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      )
                    },
                    {
                      id: 'ux-3',
                      content: (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={IMAGES.UX_IMAGE_3}
                            alt="User Experience Interface 3"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="rounded-2xl h-[722px] w-auto object-contain"
                          />
                        </div>
                      )
                    }
                  ]}
                  autoPlay={true}
                  autoPlayInterval={8000}
                  showNavigation={false}
                  showDots={false}
                  showProgressBar={true}
                  fullWidth={true}
                  infiniteScroll={false}
                  height="h-[400px] lg:h-[800px]"
                  onIndexChange={setUxActiveIndex}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform SMBs Section */}
      <section className="py-12 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center space-y-6 lg:space-y-9 pb-16 lg:pb-32">
            <div className="group cursor-pointer space-y-9">
              <div className="flex justify-center">
                <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              </div>
              <h2 className="section-title text-foreground">
                {t('transform.title')}
              </h2>
              <p className="text-base lg:text-lg text-foreground/70">
                {t('transform.subtitle')}
              </p>
              <div className="flex justify-center">
                <div className="w-30 h-px bg-primary group-hover:w-60 transition-all duration-500"></div>
              </div>
            </div>

            <div className="flex justify-center px-0">
              <div className="flex-1 space-y-8">
                <TransformAnimation className="w-full" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 text-left">
                  <div className="bg-pink-200/30 p-6 lg:p-8 space-y-3 lg:space-y-4 transition-all duration-500 hover:bg-pink-300/40 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 cursor-pointer group">
                    <h3 className="text-2xl lg:text-3xl font-serif-display text-black group-hover:text-pink-800 transition-colors duration-300">
                      {t('transform.card1.title').split('\n').map((line) => (
                        <>
                          {line}<br />
                        </>
                      ))}
                    </h3>
                    <p className="text-base lg:text-lg text-black group-hover:text-pink-700 transition-colors duration-300">
                      {t('transform.card1.desc')}
                    </p>
                    <div className="w-0 group-hover:w-full h-0.5 bg-pink-600 transition-all duration-500 mt-4"></div>
                  </div>
                  <div className="bg-purple-200/30 p-6 lg:p-8 space-y-3 lg:space-y-4 transition-all duration-500 hover:bg-purple-300/40 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer group">
                    <h3 className="text-2xl lg:text-3xl font-serif-display text-black group-hover:text-purple-800 transition-colors duration-300">
                      {t('transform.card2.title')}
                    </h3>
                    <p className="text-base lg:text-lg text-black group-hover:text-purple-700 transition-colors duration-300">
                      {t('transform.card2.desc')}
                    </p>
                    <div className="w-0 group-hover:w-full h-0.5 bg-purple-600 transition-all duration-500 mt-4"></div>
                  </div>
                  <div className="bg-orange-200/30 p-6 lg:p-8 space-y-3 lg:space-y-4 transition-all duration-500 hover:bg-orange-300/40 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 cursor-pointer group">
                    <h3 className="text-2xl lg:text-3xl font-serif-display text-black group-hover:text-orange-800 transition-colors duration-300">
                      {t('transform.card3.title')}
                    </h3>
                    <p className="text-base lg:text-lg text-black group-hover:text-orange-700 transition-colors duration-300">
                      {t('transform.card3.desc')}
                    </p>
                    <div className="w-0 group-hover:w-full h-0.5 bg-orange-600 transition-all duration-500 mt-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <GradientDivider />

      <Footer />

      {/* Demo Form Modal */}
      <DemoForm
        isOpen={isDemoFormOpen}
        onClose={() => setIsDemoFormOpen(false)}
      />
    </div>
  );
}
