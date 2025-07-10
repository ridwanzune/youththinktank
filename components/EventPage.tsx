
import React from 'react';
import type { Page } from '../App';
import { ArrowRightIcon } from './IconComponents';

interface EventPageProps {
    onNavigate: (page: Page) => void;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text tracking-tight">{children}</h2>
);

const SubHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="text-2xl font-bold text-white mt-8 mb-4">{children}</h3>
);

const ListItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h4 className="text-xl font-semibold text-emerald-400 mb-2">{title}</h4>
        <p className="text-slate-400">{children}</p>
    </div>
);

const EventPage: React.FC<EventPageProps> = ({ onNavigate }) => {
    return (
        <div className="py-20 md:py-28 bg-[#0a101f]">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                     <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tighter">
                        A Festival of Remembrance of the July Revolution
                    </h1>
                     <p className="mt-4 text-lg text-slate-400">
                        July 24th - 26th, 2025 | Justice Shahabuddin Ahmed Park, Gulshan
                    </p>
                </div>
                
                <div className="glass-card p-8 md:p-10 rounded-xl space-y-12">
                    
                    {/* Overview */}
                    <div>
                        <p className="text-slate-300 text-lg">
                            This three-day festival will serve as the landmark launch of the Youth Think Tank Forum, timed to commemorate the historic July Revolution. Our vision is to create a national moment of reflection and forward-thinking, built on three core pillars: <span className="font-semibold text-emerald-400">National Integration</span>, <span className="font-semibold text-emerald-400">Intellectual Leadership</span>, and <span className="font-semibold text-emerald-400">Sustained Impact</span>. The event's layout is designed as a free-flowing experience, organized into dedicated zones for exploration.
                        </p>
                    </div>

                    <img src="https://res.cloudinary.com/dy80ftu9k/image/upload/v1752140404/July_remembereance_imae_1_mkez0p.webp" alt="Art gallery exhibit" className="rounded-lg shadow-xl w-full object-cover h-64 md:h-96" />

                    {/* Exhibits & Galleries */}
                    <section>
                        <SectionTitle>A Festival of Expression: Interactive Exhibits & Galleries</SectionTitle>
                        <div className="space-y-6">
                            <ListItem title="1. Art Gallery">An emotionally charged exhibition showcasing paintings and sculptures that capture the raw energy of the movement. The gallery will be curated and managed by talented volunteers from the Shilpakala Academy and other leading fine arts institutions.</ListItem>
                            <ListItem title="2. Projector Art">A mesmerizing visual experience. Powerful images, video clips, and iconic photographs from the July Revolution will be projected onto large surfaces, creating a dynamic and immersive narrative.</ListItem>
                            <ListItem title="3. Song Corner">Facilitated by volunteers from the Bangla Academy, this audio gallery will allow visitors to listen to the anthems that defined the revolution and hear recorded testimonials from activists.</ListItem>
                            <ListItem title="4. Pottery & Sculpture">A therapeutic and creative space where attendees can work with clay, guided by volunteer artists and local potters to channel their emotions and hopes for the nation.</ListItem>
                            <ListItem title="5. The Infinity Wall">A long, solemn structure featuring the names of the martyrs and participants, where visitors can place flowers and reflect.</ListItem>
                            <ListItem title="6. Graffiti Section">Watch creativity unfold in real-time as graffiti artists transform a large canvas into a vibrant mural depicting themes of unity, courage, and hope.</ListItem>
                            <ListItem title="7. Photo Booth">A modern space to capture the spirit of the day with backdrops and props that symbolize the revolution.</ListItem>
                            <ListItem title="8. Platform for Performers">A dedicated stage for live performances, including recitation, drama, dance, and song.</ListItem>
                            <ListItem title="9. Relics of Remembrance">A poignant display of actual artifacts from the July Revolution, such as a blood-stained lungi of a rickshawala, the torn clothes of a female student, and a pair of glasses belonging to a martyred student.</ListItem>
                             <ListItem title="10. Children's Art Corner">A creative space where children can engage with the themes of the revolution through art.</ListItem>
                             <ListItem title="11. Face Art for Children">A fun and engaging station where children can have their faces painted with symbols and motifs of the revolution.</ListItem>
                        </div>
                    </section>
                    
                    <img src="https://res.cloudinary.com/dy80ftu9k/image/upload/v1752140407/Woman_Empowerment_uz38b9.png" alt="Women's empowerment art" className="rounded-lg shadow-xl w-full object-cover h-64 md:h-96" />

                    {/* July Konna */}
                     <section>
                        <SectionTitle>July Konna (Women's Corner)</SectionTitle>
                        <div className="space-y-6">
                           <ListItem title="1. Art Installation">This dedicated corner will honor the incredible women of the July Revolution, featuring a powerful art installation portraying their diverse roles and contributions.</ListItem>
                           <ListItem title="2. Storytelling Sessions for Children">Engaging the younger generation with simplified narratives of the July Revolution, emphasizing the vital roles played by ordinary people, including women and young individuals.</ListItem>
                           <ListItem title="3. 'Empowerment Hub' Information Booth">A comprehensive resource center for women's rights, child protection, and broader social welfare, featuring materials from the Ministry of Women and Children Affairs.</ListItem>
                           <ListItem title="4. Story Art Performance by July Konnya">Witness history come alive through captivating story art performances delivered by the "July Konnya" themselves.</ListItem>
                        </div>
                    </section>

                     {/* Community Stalls */}
                    <section>
                        <SectionTitle>Community Stalls</SectionTitle>
                         <img src="https://res.cloudinary.com/dy80ftu9k/image/upload/v1752140404/July_remembereance_image_2_gk2yps.webp" alt="Community stalls" className="rounded-lg shadow-xl w-full object-cover h-64 md:h-96 mb-8" />
                        <div className="space-y-6">
                           <ListItem title="Independent Bookstore Collective">A "book street" showcasing literature on Bangladesh's history, politics, and social movements.</ListItem>
                           <ListItem title="Food Stall: The Community Cafe">A central hub for refreshments and conversation, with complimentary tea and food from local vendors.</ListItem>
                           <ListItem title="T-Shirt Stall: Wear the Change">Thematic t-shirts and apparel designed by local youth entrepreneurs featuring iconic slogans and symbols.</ListItem>
                           <ListItem title="Artisanal Crafts Bazaar">A vibrant marketplace with a special emphasis on women entrepreneurs, showcasing Jamdani, Khadi textiles, leather goods, Nakshi Kantha, and eco-friendly jute products.</ListItem>
                        </div>
                    </section>

                     {/* Information Corner */}
                    <section>
                        <SectionTitle>Information Corner</SectionTitle>
                        <div className="space-y-6">
                           <ListItem title="Green Initiatives Corner">Showcasing businesses focused on sustainability, like solar energy providers and recycling startups.</ListItem>
                           <ListItem title="July Revolution Story Corner">An oral history project where attendees can share and record their revolution stories.</ListItem>
                           <ListItem title="Mental Health Stall">A confidential space, in collaboration with Dhaka Flow, for frontline protestors to reflect, heal, and speak with trained listeners.</ListItem>
                           <ListItem title="Victim Support & Welfare Desk">Providing info on victims of the July Revolution, including donation boxes and details on welfare initiatives.</ListItem>
                        </div>
                    </section>
                    
                     {/* Partnerships */}
                    <section>
                        <SectionTitle>Strategic Partnerships & Endorsements</SectionTitle>
                        <p className="text-slate-400 mb-6">To achieve a national scale, we are securing institutional partnerships with governmental, academic, and corporate sectors.</p>
                        <ul className="list-disc list-inside text-slate-300 space-y-2">
                            <li><span className="font-semibold text-white">Institutional & Governmental:</span> Ministry of Cultural Affairs, Shilpakala Academy, Liberation War Museum, Dhaka North.</li>
                            <li><span className="font-semibold text-white">Academic Partners:</span> Leading universities for panel discussions and student volunteers.</li>
                            <li><span className="font-semibold text-white">Corporate & Private Sector:</span> Title sponsors and artisanal businesses to fuel the event.</li>
                            <li><span className="font-semibold text-white">Media Engagement:</span> Major TV channels, newspapers, and social media influencers to amplify reach.</li>
                        </ul>
                    </section>

                    <div className="text-center pt-8">
                        <button 
                            onClick={() => onNavigate('events')}
                            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg inline-flex items-center"
                        >
                            Back to All Events
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventPage;
