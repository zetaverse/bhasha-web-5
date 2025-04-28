import React, { useEffect, useState } from 'react';
import Image from "next/legacy/image";
import { languages, articleList } from '../utilities/utilities';
import Link from 'next/link';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });

function LearningGuide({ cardCount, showViewAll = true }) {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const updateMedia = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1024);
        };

        updateMedia();
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, []);

    const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    const subCategory = 'Learning Guides';

    const uniqueLanguages = Array.from(
        new Set(articleList.filter(article => article.subCategory === subCategory).map(article => article.category))
    ).slice(0, cardCount);

    const fontSize = isMobile ? '20px' : '30px';
    const lineHeight = isMobile ? '24px' : '36px';

    return (
        <div className="!my-12">
            <div className={`!flex !justify-between !items-center !mb-6 ${inter.className}`}>
                <h2 className="!mb-0" style={{ padding: '0.25rem 0', fontWeight: 700 }}>
                    {subCategory}
                </h2>
                {showViewAll && (
                    <Link
                        className="text-[#4B2AAD] !text-xl/7.5 !mt-1"
                        style={{ textDecoration: 'none', fontWeight: 700 }}
                        href={`/resources/${subCategory.split(' ').join('').toLowerCase()}`}
                    >
                        View all
                    </Link>
                )}
            </div>
            <div
                className={`!grid-container`}
                style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile || isTablet ? 'repeat(2, 1fr)' : 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: isMobile || isTablet ? '2rem' : (uniqueLanguages.length >= 5 ? '2rem' : '4rem'),
                    padding: isTablet ? '0 20px' : '0',
                }}
            >
                {uniqueLanguages.map((language, index) => {
                    const cardWidth = isMobile ? '90%' : (isTablet ? '200px' : '100%');
                    const cardHeight = isMobile ? `${parseFloat(cardWidth) * 2}px` : '300px';

                    return (
                        <Link
                            key={index}
                            href={`/resources/${subCategory.split(' ').join('').toLowerCase()}/${capitalizeFirstLetter(language).split(' ').join('').toLowerCase()}`}
                        >
                            <div style={{
                                width: cardWidth,
                                height: cardHeight,
                                margin: isMobile ? '0 auto' : '0',
                                position: 'relative',
                                overflow: 'hidden',
                            }}>
                                <div className="!relative card" style={{
                                    width: '100%',
                                    height: '100%',
                                    boxShadow: '0px 3px 2px rgba(0, 0, 0, 0.25)',
                                    cursor: 'pointer',
                                }}>
                                    <div className="!relative !overflow-hidden !h-full">
                                        <Image
                                            src={`/Images/blogImages/learningGuides/learning-guide-banners/${capitalizeFirstLetter(language)}-LG.webp`}
                                            alt={language}
                                            // layout='fill'
                                            layout="responsive"
                                            height={300}
                                            width={200}
                                            className="profile-image"
                                            // style={{ objectFit: "cover", objectPosition: "right" }}
                                        />
                                        {/* TODO Outdated style element. Check if this can be safely removed. */}
                                        {/* <div className="position-absolute bottom-0 start-0 end-0 p-2 text-center" style={{
                                            background: 'linear-gradient(185.25deg, rgba(217, 217, 217, 0.42) 3.65%, rgba(169, 169, 169, 0.42) 3.66%, rgba(115, 115, 115, 0.42) 95.29%)',
                                        }}>
                                            <p className={`fw-bold m-0 ${inter.className}`} style={{
                                                fontSize,
                                                lineHeight,
                                                color: '#FFF705',
                                            }}>
                                            </p>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default LearningGuide;
