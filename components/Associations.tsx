
import React from 'react';

const associations = [
    { name: "Ministry of Cultural Affairs", logo: "https://res.cloudinary.com/dy80ftu9k/image/upload/v1752140405/partner_logo_1_nfz2o6.png" },
    { name: "Shilpakala Academy", logo: "https://res.cloudinary.com/dy80ftu9k/image/upload/v1752140405/partner_logo_2_lkhwwt.png" },
    { name: "Liberation War Museum", logo: "https://res.cloudinary.com/dy80ftu9k/image/upload/v1752140406/partner_logo_3_s3et1t.png" },
    { name: "Dhaka North City Corp", logo: "https://res.cloudinary.com/dy80ftu9k/image/upload/v1752140405/partner_logo_4_bm6aip.jpg" },
    { name: "University of Dhaka", logo: "https://res.cloudinary.com/dy80ftu9k/image/upload/v1752140406/partner_logo_5_hmrza7.svg" },
];

const Associations: React.FC = () => {
    return (
        <section className="py-20 md:py-28 bg-[#0f172a]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Our <span className="gradient-text">Associations & Partners</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                        We are proud to collaborate with leading institutions to drive national progress and create lasting impact.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
                    {associations.map((assoc) => (
                        <div key={assoc.name} className="flex justify-center items-center h-16 transition-transform duration-300 ease-in-out hover:scale-125" title={assoc.name}>
                            <img src={assoc.logo} alt={assoc.name} className="max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 brightness-150 hover:brightness-100 transition-all duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Associations;
