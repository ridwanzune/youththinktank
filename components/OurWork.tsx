
import React from 'react';
import type { Publication } from '../types';
import { BookOpenIcon, ArrowRightIcon } from './IconComponents';

const publications: Publication[] = [
    {
        id: "youth-leadership-crucial",
        title: "Why Youth Leadership Is Crucial for Bangladesh’s Future",
        category: "Leadership & Future",
        description: "With over half the population under 30, empowering youth is essential. Young leaders bring fresh perspectives and bold ideas to address national challenges.",
        imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
        content: `
            <h2>The Demographic Dividend: An Unparalleled Opportunity</h2>
            <p>Bangladesh stands at a unique demographic crossroads. With over half of its population under the age of 30, the nation possesses a 'demographic dividend'—a window of opportunity where the workforce is young and vibrant. This isn't just a statistic; it's our single greatest asset. However, potential alone does not guarantee progress. To truly capitalize on this dividend, we must actively invest in and empower our youth, transforming their potential energy into kinetic force for national development. Youth leadership is the mechanism through which this transformation occurs.</p>
            <h3>Fresh Perspectives on Stubborn Problems</h3>
            <p>For decades, Bangladesh has grappled with complex challenges such as climate vulnerability, bureaucratic inertia, and economic inequality. While experienced leaders provide stability, young leaders bring what is often missing: disruptive innovation and a native understanding of the digital world. They are not bound by the old ways of thinking and are more willing to experiment with bold, technology-driven solutions. Whether it's developing climate-resilient agriculture or creating transparent e-governance platforms, the youth perspective is indispensable.</p>
            <h3>A Call to Action: Investing in Tomorrow's Custodians</h3>
            <p>Fostering youth leadership is not merely a social program; it is a strategic imperative. It requires a concerted effort from the government, private sector, and civil society to:</p>
            <ul>
                <li>Integrate leadership and policy training into the national curriculum.</li>
                <li>Create formal platforms for youth to engage with policymakers.</li>
                <li>Fund and support youth-led startups and social enterprises.</li>
                <li>Promote a culture of mentorship where today's leaders actively guide tomorrow's.</li>
            </ul>
            <p>By doing so, we are not just preparing the youth for the future; we are enabling them to build the future of Bangladesh, today. They are not just the leaders of tomorrow; they must be partners in leadership now.</p>
        `
    },
    {
        id: "campus-to-cabinet",
        title: "From Campus to Cabinet: Building Policy-Minded Youth",
        category: "Policy & Governance",
        description: "We guide young talent to engage with governance, turning campus activism into formal policy expertise, nurturing the next generation of ministers and mayors.",
        imageUrl: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=800&auto=format&fit=crop",
        content: `
            <h2>The Bridge Between Passion and Policy</h2>
            <p>University campuses across Bangladesh are vibrant cauldrons of activism, social awareness, and passionate debate. While this energy is vital for a healthy democracy, it often dissipates after graduation or remains disconnected from the formal machinery of governance. The journey from a passionate student activist to an effective policy-maker is a long and complex one. Our mission is to build the bridge that connects these two worlds, transforming raw passion into structured, evidence-based policy influence.</p>
            <h3>Cultivating Policy Literacy: The Essential Toolkit</h3>
            <p>Effective governance requires more than just good intentions. It demands a specific skillset that is rarely taught in traditional academic settings. We advocate for and provide training in:</p>
            <ul>
                <li><b>Policy Analysis:</b> Teaching youth how to deconstruct complex problems, analyze data, and evaluate the potential impacts of different policy options.</li>
                <li><b>Legislative Drafting:</b> Providing a foundational understanding of how laws are written, debated, and passed.</li>
                <li><b>Negotiation and Advocacy:</b> Equipping young leaders with the communication and strategic skills to build coalitions and effectively argue their case in formal settings.</li>
                <li><b>Budgetary Analysis:</b> Demystifying the national budget and empowering youth to understand and influence public spending.</li>
            </ul>
            <h3>From Theory to Practice: Creating Real-World Laboratories</h3>
            <p>To truly build a pipeline of policy-minded youth, we must create practical learning opportunities. Initiatives like Youth Parliaments, policy hackathons, and fellowship programs within government ministries allow young people to apply their skills to real-world problems. By giving them a seat at the table—even a simulated one initially—we demystify the process of governance and build their confidence to engage. This is how we cultivate the next generation of ministers, parliamentarians, and civic leaders who can translate their vision for a better Bangladesh into tangible, effective policy.</p>
        `
    },
    {
        id: "digital-tools-real-impact",
        title: "Digital Tools, Real Impact: Youth Advocacy in the Age of Connectivity",
        category: "Digital Advocacy",
        description: "Bangladeshi youth are using tech to drive national conversations. We aim to equip them with the skills to amplify their impact responsibly.",
        imageUrl: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=800&auto=format&fit=crop",
        content: `
            <h2>The New Town Square: Digital Platforms as Levers of Change</h2>
            <p>In the 21st century, the public square is no longer just a physical space; it is a vast, interconnected digital ecosystem. Social media platforms, messaging apps, and online forums have become powerful tools for organization, advocacy, and leadership. Bangladeshi youth, as digital natives, are uniquely positioned to leverage these tools. From mobilizing flash protests for social justice to running nationwide awareness campaigns on climate change, they are already using connectivity to shape the national discourse. Our goal is to help them sharpen these tools for maximum, responsible impact.</p>
            <h3>Beyond the Hashtag: Skills for Effective Digital Advocacy</h3>
            <p>A viral hashtag can raise awareness, but sustained change requires a more strategic approach. We focus on equipping young digital advocates with a core set of skills:</p>
            <ul>
                <li><b>Data-Driven Storytelling:</b> Teaching how to use data visualizations and compelling narratives to make a powerful, evidence-based case online.</li>
                <li><b>Countering Misinformation:</b> Providing training in media literacy and fact-checking to combat the spread of false narratives that can derail important conversations.</li>
                <li><b>Digital Security:</b> Educating on how to protect personal data and communicate securely to safeguard activists and their movements.</li>
                <li><b>Audience Engagement:</b> Moving beyond broadcasting messages to fostering genuine online communities and dialogues that can translate into offline action.</li>
            </ul>
            <h3>Amplifying Voices Responsibly</h3>
            <p>With great power comes great responsibility. While digital tools can amplify marginalized voices, they can also be used to create echo chambers and incite division. A core part of our mission is to instill a strong ethical framework in young digital leaders. This includes promoting respectful debate, protecting the privacy of others, and understanding the real-world consequences of online actions. By combining technological fluency with ethical responsibility, we can ensure that the digital revolution in Bangladesh is a force for unity, progress, and positive change.</p>
        `
    },
     {
        id: "rural-youth-gap",
        title: "The Rural Youth Gap: Why Leadership Must Go Beyond Dhaka",
        category: "Rural Empowerment",
        description: "Real progress depends on uplifting young leaders from every district. We support decentralized leadership and recognize grassroots efforts nationwide.",
        imageUrl: "https://images.unsplash.com/photo-1605333140510-1f34a7534346?q=80&w=800&auto=format&fit=crop",
        content: `
            <h2>Unlocking the Potential of the 64 Districts</h2>
            <p>For too long, the narrative of youth leadership in Bangladesh has been overwhelmingly Dhaka-centric. While the capital is a vital hub, true national development cannot be achieved if the immense talent pool in our rural areas remains untapped. Real progress hinges on empowering the young leader in a remote char, the female entrepreneur in a northern district, and the tech innovator in a coastal town. Closing the rural-urban youth leadership gap is not just a matter of equity; it is essential for holistic, sustainable national growth.</p>
            <h3>The Grassroots Innovators</h3>
            <p>Often with limited resources, rural youth are already at the forefront of solving local problems. They are developing new farming techniques, setting up community schools, fighting against early marriage, and creating local employment. These grassroots leaders possess an invaluable, contextual understanding of the challenges their communities face. Our role is to identify, support, and connect these leaders, providing them with the resources, training, and networks to scale their impact.</p>
            <h3>A Strategy for Decentralized Empowerment</h3>
            <p>To bridge the gap, we must move beyond one-size-fits-all solutions and adopt a decentralized approach:</p>
            <ul>
                <li><b>Establishing Regional Hubs:</b> Creating physical or virtual resource centers in different divisions to provide localized training and mentorship.</li>
                <li><b>Digital Inclusion Programs:</b> Working to ensure that aspiring leaders in rural areas have access to affordable internet and the digital literacy skills to use it effectively.</li>
                <li><b>Celebrating Local Heroes:</b> Using our platform to spotlight the achievements of rural youth leaders, inspiring others and showing that leadership has no zip code.</li>
                <li><b>Connecting to the Center:</b> Facilitating dialogue between grassroots leaders and national policymakers to ensure that rural realities inform national policy.</li>
            </ul>
            <p>A nation's strength is measured not by the brightness of its center, but by its ability to spread light to every corner. By investing in our rural youth, we invest in a more resilient, equitable, and prosperous Bangladesh for all.</p>
        `
    },
    {
        id: "mentorship-matters",
        title: "Mentorship Matters: The Missing Link in Youth Empowerment",
        category: "Mentorship",
        description: "Ambition needs guidance. Our mentorship programs connect experienced professionals with youth to share insights, open networks, and co-create solutions.",
        imageUrl: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=800&auto=format&fit=crop",
        content: `
            <h2>The Accelerator for Ambition</h2>
            <p>Ambition is the fuel of progress, but without guidance, it can easily lead to burnout, disillusionment, or misdirected effort. A great idea is not enough; it needs the wisdom of experience to navigate obstacles and find the right path. This is where mentorship becomes the critical missing link in the chain of youth empowerment. A good mentor is an accelerator, a guide, and a safety net, dramatically increasing a young leader's chances of success.</p>
            <h3>More Than Just Advice: The Pillars of Effective Mentorship</h3>
            <p>Effective mentorship is a structured, reciprocal relationship that goes far beyond casual advice. Our vision for mentorship is built on several key pillars:</p>
            <ul>
                <li><b>Knowledge Transfer:</b> Experienced professionals share invaluable, real-world insights that can't be found in textbooks, helping young leaders avoid common pitfalls.</li>
                <li><b>Network Access:</b> Mentors can open doors, making crucial introductions to contacts, investors, and partners that might otherwise take years to cultivate.</li>
                <li><b>Skills Development:</b> Mentors can identify skill gaps and provide targeted guidance on everything from public speaking to financial management.</li>
                <li><b>Confidence Building:</b> Simply having an experienced professional believe in your potential can be a powerful motivator, providing the resilience needed to overcome inevitable setbacks.</li>
            </ul>
            <h3>Building a National Culture of Mentorship</h3>
            <p>We aim to build a national culture where mentorship is not seen as an act of charity, but as a fundamental responsibility of every established professional. This involves creating a structured national platform to intelligently match mentors with mentees based on their goals and expertise. By facilitating these connections, we create a virtuous cycle: today's mentees become tomorrow's leaders, who in turn become the mentors for the next generation. It is a powerful, self-sustaining engine for national progress, built on the simple, timeless power of human connection.</p>
        `
    },
    {
        id: "sovereignty-starts-with-us",
        title: "Sovereignty Starts With Us: Reclaiming National Narrative",
        category: "National Sovereignty",
        description: "When youth own our challenges and innovations, they protect our future. We foster a self-reliant generation that puts the nation first.",
        imageUrl: "https://images.unsplash.com/photo-1599543032742-3788a4056247?q=80&w=800&auto=format&fit=crop",
        content: `
            <h2>Redefining Sovereignty for the 21st Century</h2>
            <p>In today's interconnected world, sovereignty is no longer just about political borders and military strength. It is a multifaceted concept that encompasses economic self-reliance, technological independence, and cultural integrity. True sovereignty means having the capacity to define our own future, solve our own problems, and tell our own story to the world. This is not a task for the government alone; it is a generational responsibility that falls squarely on the shoulders of our youth.</p>
            <h3>The Pillars of Modern Sovereignty</h3>
            <p>When youth take ownership of our nation's destiny, they strengthen every pillar of our sovereignty:</p>
            <ul>
                <li><b>Economic Sovereignty:</b> By launching innovative startups, revitalizing local industries, and creating products for both domestic and global markets, young entrepreneurs reduce our dependence on foreign imports and build national wealth.</li>
                <li><b>Technological Sovereignty:</b> By developing our own software, digital platforms, and tech solutions, young innovators ensure that our digital infrastructure is not controlled by foreign entities, protecting our data and our digital future.</li>
                <li><b>Cultural Sovereignty:</b> Through film, music, literature, and art, young creators can project a confident, authentic image of Bangladesh to the world, countering stereotypes and reclaiming our national narrative.</li>
            </ul>
            <h3>Nationalism Through Self-Reliance</h3>
            <p>Fostering a "nation-first" mindset in our youth is not about promoting isolationism or xenophobia. It is about building a generation that is deeply confident in its own abilities and committed to building a self-reliant nation. It means prioritizing local solutions to local problems, taking pride in our heritage while embracing innovation, and engaging with the world from a position of strength, not dependency. When our youth believe that they have the power to build a better Bangladesh, they become the ultimate guardians of our national sovereignty.</p>
        `
    },
];

const PublicationCard: React.FC<{ pub: Publication; onNavigate: (pub: Publication) => void }> = ({ pub, onNavigate }) => (
    <div className="glass-card rounded-xl overflow-hidden shadow-lg hover:shadow-sky-500/20 transition-all duration-300 transform hover:-translate-y-2 group">
        <img className="w-full h-48 object-cover" src={pub.imageUrl} alt={pub.title} />
        <div className="p-6">
            <span className="inline-block bg-emerald-500/20 text-emerald-400 rounded-full px-3 py-1 text-sm font-semibold mb-2">{pub.category}</span>
            <h3 className="font-bold text-xl mb-2 text-white">{pub.title}</h3>
            <p className="text-slate-400 text-base mb-4">{pub.description}</p>
            <button
                onClick={() => onNavigate(pub)}
                className="font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center group-hover:underline"
            >
                Read More <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
        </div>
    </div>
);

interface OurWorkProps {
    onNavigateToArticle: (article: Publication) => void;
}

const OurWork: React.FC<OurWorkProps> = ({ onNavigateToArticle }) => {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center">
                        <BookOpenIcon className="w-10 h-10 mr-4 text-sky-400" />
                        Our <span className="gradient-text ml-2">Publications</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                        Exploring critical issues and proposing innovative solutions for a stronger Bangladesh.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {publications.map((pub) => (
                        <PublicationCard key={pub.id} pub={pub} onNavigate={onNavigateToArticle} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurWork;