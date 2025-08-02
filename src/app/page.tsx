'use client';
import React, { useState, useEffect } from 'react';
import {
    ArrowRight,
    CheckCircle,
    Menu,
    X,
    Instagram,
    Linkedin,
    Twitter,
    Star,
    Heart,
    Zap,
    Target,
    Crown,
    Sparkles,
    Award,
} from 'lucide-react';
import Image from 'next/image';

const LandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const testimonials = [
        {
            name: 'Sarah M.',
            text: 'Her Social Blitz transformed my entire approach. I went from struggling to find clients to having a waitlist within 3 months. The VSL system is pure magic!',
            role: 'Life Coach',
            result: '6-figure breakthrough',
        },
        {
            name: 'Amanda K.',
            text: "I finally understand my worth and how to communicate it. My confidence skyrocketed, and so did my income. This isn't just business strategy - it's life-changing.",
            role: 'Business Consultant',
            result: 'Tripled her rates',
        },
        {
            name: 'Michelle R.',
            text: 'For the first time, I feel like my content has purpose and power. Every post now moves my business forward instead of just adding to the noise.',
            role: 'Wellness Coach',
            result: 'Consistent $15K months',
        },
        {
            name: 'Jasmine T.',
            text: 'The clarity I gained from this process changed everything. I stopped second-guessing myself and started showing up with power. My audience grew fast — and so did my revenue.',
            role: 'WMindset Mentor',
            result: 'Scaled to $20K months',
        },
    ];

    const features = [
        {
            title: 'Magnetic Personal Brand Architecture',
            description:
                'Discover your unique voice and build an irresistible brand that attracts dream clients like a magnet - authentic, powerful, and unforgettable.',
            icon: <Crown className="w-8 h-8 text-[#5c0201]" />,
        },
        {
            title: 'High-Converting Story System',
            description:
                'Master the art of storytelling that sells. Transform your experiences into compelling narratives that build trust and drive conversions.',
            icon: <Heart className="w-8 h-8 text-[#5c0201]" />,
        },
        {
            title: 'Effortless Lead Magnetism',
            description:
                'Create content that works while you sleep. Build systems that turn every post into a client-attracting opportunity.',
            icon: <Sparkles className="w-8 h-8 text-[#5c0201]" />,
        },
        {
            title: 'Complete Success Blueprint',
            description:
                'From mindset to marketing, get everything you need to build a thriving business that reflects your true potential and purpose.',
            icon: <Award className="w-8 h-8 text-[#5c0201]" />,
        },
    ];

    const transformationSteps = [
        {
            number: '01',
            title: 'DISCOVER Your Unique Power',
            description:
                'Uncover what makes you magnetic and irresistible to your ideal clients',
        },
        {
            number: '02',
            title: 'DESIGN Your Brand Story',
            description:
                'Craft a compelling narrative that positions you as the go-to expert',
        },
        {
            number: '03',
            title: 'DEPLOY Your Success System',
            description:
                'Launch your high-converting content and watch your business transform',
        },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Google Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin=""
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&family=Dancing+Script:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />

            <style jsx>{`
                .font-playfair {
                    font-family: 'Playfair Display', serif;
                }
                .font-inter {
                    font-family: 'Inter', sans-serif;
                }
                .font-dancing {
                    font-family: 'Dancing Script', cursive;
                }
            `}</style>

            {/* Navigation */}
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                    scrollY > 50
                        ? 'bg-white/95 backdrop-blur-sm shadow-sm'
                        : 'bg-white'
                }`}>
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="text-2xl font-bold text-[#5c0201] font-playfair">
                            Her Social Blitz
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8 font-inter">
                            <a
                                href="#about"
                                className="text-gray-700 hover:text-[#5c0201] transition-colors font-medium">
                                About
                            </a>
                            <a
                                href="#services"
                                className="text-gray-700 hover:text-[#5c0201] transition-colors font-medium">
                                Services
                            </a>
                            <a
                                href="#testimonials"
                                className="text-gray-700 hover:text-[#5c0201] transition-colors font-medium">
                                Results
                            </a>
                            <a
                                href="#contact"
                                className="text-gray-700 hover:text-[#5c0201] transition-colors font-medium">
                                Contact
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-6 py-4 space-y-4 font-inter">
                            <a
                                href="#about"
                                className="block text-gray-700 hover:text-[#5c0201] transition-colors font-medium">
                                About
                            </a>
                            <a
                                href="#services"
                                className="block text-gray-700 hover:text-[#5c0201] transition-colors font-medium">
                                Services
                            </a>
                            <a
                                href="#testimonials"
                                className="block text-gray-700 hover:text-[#5c0201] transition-colors font-medium">
                                Results
                            </a>
                            <a
                                href="#contact"
                                className="block text-gray-700 hover:text-[#5c0201] transition-colors font-medium">
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-[#cfba9b]/20 to-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#cfba9b]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#5c0201]/5 rounded-full blur-2xl"></div>

                <div className="max-w-6xl mx-auto relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center space-x-2 bg-[#5c0201]/10 px-4 py-2 rounded-full">
                                <Sparkles className="w-4 h-4 text-[#5c0201]" />
                                <span className="text-sm font-medium text-[#5c0201] font-inter">
                                    Transform Your Business Journey
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-8 leading-tight text-[#5c0201] font-playfair font-bold">
                                From Hidden Gem to
                                <span className="block font-dancing text-[#cfba9b] text-5xl sm:text-6xl lg:text-7xl">
                                    Magnetic Leader
                                </span>
                            </h1>

                            <div className="text-lg sm:text-xl mb-12 text-gray-600 leading-relaxed space-y-4 font-inter">
                                <p className="text-xl font-medium">
                                    You have everything it takes to succeed -
                                    the passion, the knowledge, the heart.
                                </p>
                                <p>
                                    But somewhere between posting content and
                                    chasing algorithms, your authentic voice got
                                    lost in the noise.
                                </p>
                                <p>
                                    <strong className="text-[#5c0201] font-semibold">
                                        What if I told you that your
                                        breakthrough is just one powerful story
                                        away?
                                    </strong>
                                </p>
                            </div>

                            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                                <button className="w-full sm:w-auto bg-[#5c0201] hover:bg-[#4a0101] text-white px-8 py-4 text-lg font-semibold transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl font-inter group">
                                    Discover Your Magnetic Story
                                    <ArrowRight
                                        className="inline ml-2 group-hover:translate-x-1 transition-transform"
                                        size={20}
                                    />
                                </button>
                                <button className="w-full sm:w-auto border-2 border-[#5c0201] text-[#5c0201] hover:bg-[#5c0201] hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 rounded-lg font-inter">
                                    Watch My Story
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative z-10 h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/NY002768.jpg"
                                    alt="Confident businesswoman embracing success"
                                    fill
                                    className="object-cover rounded-2xl"
                                    sizes="100vw"
                                    priority
                                />
                                <div className="absolute -top-4 -right-4 bg-[#5c0201] text-white p-3 rounded-full">
                                    <Crown className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-[#cfba9b]/30 to-[#cfba9b]/60 rounded-2xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transformation Promise */}
            <section className="py-20 px-6 lg:px-8 bg-[#5c0201] text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#5c0201] to-[#4a0101]"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8 font-playfair">
                        Your Story Is Your Superpower
                    </h2>
                    <div className="text-lg text-white/90 space-y-6 mb-12 font-inter leading-relaxed">
                        <p className="text-xl">
                            Every successful entrepreneur has one thing in
                            common: they know how to tell their story in a way
                            that moves people to action.
                        </p>
                        <p>
                            {`Your experiences, your struggles, your victories -
                            they're not just personal history. They're the
                            foundation of an empire waiting to be built.`}
                        </p>
                        <p className="text-[#cfba9b] font-semibold text-xl">
                            {`The world needs what you have to offer. Let's make
                            sure they can't ignore it.`}
                        </p>
                    </div>
                </div>
            </section>

            {/* The Journey Section */}
            <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-[#cfba9b]/10 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#5c0201] font-playfair">
                            The Journey From Invisible to Irresistible
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
                            Every transformation begins with a single decision -
                            the decision to stop hiding your light and start
                            shining it boldly.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {transformationSteps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#5c0201] group">
                                    <div className="text-4xl font-bold text-[#cfba9b] mb-4 font-playfair">
                                        {step.number}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-[#5c0201] font-playfair group-hover:text-[#4a0101] transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 font-inter leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                                {index < transformationSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                                        <ArrowRight className="w-8 h-8 text-[#cfba9b]" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Sue Section */}
            <section id="about" className="py-20 px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#5c0201] font-playfair">
                            Meet Sue
                        </h2>
                        <p className="text-xl text-[#cfba9b] font-semibold font-dancing text-2xl">
                            Your Guide to Magnetic Success
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="aspect-[3/4] w-full max-w-lg rounded-2xl shadow-xl overflow-hidden relative">
                                <Image
                                    src="/images/NY002766.jpg"
                                    alt="Team collaboration and breakthrough moments"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-[#cfba9b]/20 to-[#cfba9b]/40 rounded-2xl -z-10"></div>
                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                                <p className="text-[#5c0201] font-semibold font-inter">
                                    From struggling to 7-figures
                                </p>
                                <p className="text-sm text-gray-600">
                                    in just 18 months
                                </p>
                            </div>
                        </div>

                        <div className="text-lg text-gray-700 space-y-6 leading-relaxed font-inter">
                            <p className="text-xl font-medium text-[#5c0201]">
                                {`"I know what it feels like to have everything to
                                offer but feel completely invisible."`}
                            </p>
                            <p>
                                Three years ago, I was where you are now.
                                Talented, passionate, and completely frustrated.
                                I had the skills, the heart, and the drive - but
                                somehow, I kept getting overlooked.
                            </p>
                            <p>
                                I was posting every day, following every
                                strategy, consuming every course. From the
                                outside, it looked like I was doing everything
                                right. But inside? I felt like I was screaming
                                into the void.
                            </p>
                            <p>
                                <strong className="text-[#5c0201] font-semibold">
                                    Then I discovered the missing piece:
                                    authentic storytelling that sells.
                                </strong>
                            </p>
                            <p>
                                The moment I learned how to share my story in a
                                way that connected, everything changed. Not just
                                my business - my entire life transformed.
                            </p>
                            <p>
                                Within 6 months, I went from struggling to six
                                figures. Within 18 months, I hit seven figures.
                                But more importantly, I found my voice, my
                                confidence, and my true purpose.
                            </p>
                            <p className="text-[#5c0201] font-semibold bg-[#cfba9b]/10 p-4 rounded-lg">
                                {` "Now, I help incredible women like you step into
                                their power, own their story, and build
                                businesses that reflect their true worth.
                                Because the world needs what you have to offer -
                                and I'm here to make sure they can't ignore it."`}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Overview */}
            <section
                id="services"
                className="py-20 px-6 lg:px-8 bg-gradient-to-br from-[#5c0201] to-[#4a0101] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#cfba9b]/10 rounded-full blur-2xl"></div>

                <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
                    <div className="inline-flex items-center space-x-2 bg-[#cfba9b]/20 px-6 py-3 rounded-full mb-6">
                        <Star className="w-5 h-5 text-[#cfba9b]" />
                        <span className="text-[#cfba9b] font-medium font-inter">
                            INTRODUCING
                        </span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold mb-8 leading-tight font-playfair">
                        The Magnetic Storyteller System
                    </h3>
                    <p className="text-xl text-white/90 font-inter leading-relaxed">
                        A complete transformation program designed to turn your
                        authentic story into a client-attracting magnet - no
                        fake personas, no borrowed strategies, just you at your
                        most powerful.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-white rounded-lg mr-4 group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-white font-playfair">
                                        {feature.title}
                                    </h4>
                                </div>
                                <p className="text-white/90 font-inter leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why This Works */}
            <section className="py-20 px-6 lg:px-8 bg-[#cfba9b]/10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[500px] w-full rounded-2xl shadow-xl overflow-hidden">
                            <Image
                                src="/images/NY002769.jpg"
                                alt="Team collaboration and breakthrough moments"
                                fill
                                className="object-cover rounded-2xl"
                                sizes="(max-width: 1024px) 100vw, 768px"
                                priority
                            />

                            <div className="absolute top-6 right-6 bg-[#5c0201] text-white p-3 rounded-full">
                                <Target className="w-6 h-6" />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#5c0201] font-playfair">
                                Why Stories Transform Everything
                            </h2>

                            <div className="text-lg text-gray-700 space-y-6 leading-relaxed font-inter">
                                <p className="text-xl font-medium text-[#5c0201]">
                                    {`"People don't buy products or services. They
                                    buy transformations, dreams, and better
                                    versions of themselves."`}
                                </p>
                                <p>
                                    {`Most business owners get stuck because they
                                    focus on features and benefits. But your
                                    ideal clients don't care about what you do -
                                    they care about who they become when they
                                    work with you.`}
                                </p>
                                <p>
                                    {`Your story is the bridge between where they
                                    are now and where they want to be. When you
                                    master the art of authentic storytelling,
                                    you don't just attract clients - you attract
                                    raving fans who can't wait to work with you.`}
                                </p>
                                <p>
                                    <strong className="text-[#5c0201] font-semibold">
                                        {`The Magnetic Storyteller System doesn't
                                        just teach you to tell your story - it
                                        teaches you to tell it in a way that
                                        sells.`}
                                    </strong>
                                </p>
                                <div className="bg-[#5c0201]/5 p-6 rounded-xl border-l-4 border-[#5c0201]">
                                    <p className="font-medium">
                                        Because when you own your story, you own
                                        your market. When you share your truth,
                                        you attract your tribe. And when you
                                        lead with authenticity, success becomes
                                        inevitable.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-20 px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#5c0201] font-playfair">
                            Your Complete Transformation Journey
                        </h2>
                        <p className="text-xl text-gray-600 font-inter">
                            Everything you need to go from hidden gem to
                            magnetic leader in 90 days
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start space-x-4 p-8 bg-gradient-to-r from-[#cfba9b]/10 to-white rounded-2xl shadow-lg border border-[#cfba9b]/20 hover:shadow-xl transition-shadow">
                            <div className="p-2 bg-[#5c0201] rounded-full flex-shrink-0">
                                <Crown className="text-white w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#5c0201] mb-3 text-lg font-playfair">
                                    Your Signature Story Architecture
                                </h4>
                                <p className="text-gray-600 font-inter">
                                    {`Discover and craft your unique story
                                    framework that positions you as the obvious
                                    choice for your dream clients. We'll uncover
                                    the golden threads in your journey that
                                    transform you from service provider to
                                    sought-after authority.`}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 p-8 bg-gradient-to-r from-[#cfba9b]/10 to-white rounded-2xl shadow-lg border border-[#cfba9b]/20 hover:shadow-xl transition-shadow">
                            <div className="p-2 bg-[#5c0201] rounded-full flex-shrink-0">
                                <Heart className="text-white w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#5c0201] mb-3 text-lg font-playfair">
                                    Magnetic Content Mastery
                                </h4>
                                <p className="text-gray-600 font-inter">
                                    Learn the exact formula for creating content
                                    that stops the scroll and starts
                                    conversations. Get proven templates,
                                    storytelling frameworks, and engagement
                                    strategies that turn followers into paying
                                    clients.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 p-8 bg-gradient-to-r from-[#cfba9b]/10 to-white rounded-2xl shadow-lg border border-[#cfba9b]/20 hover:shadow-xl transition-shadow">
                            <div className="p-2 bg-[#5c0201] rounded-full flex-shrink-0">
                                <Zap className="text-white w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#5c0201] mb-3 text-lg font-playfair">
                                    High-Converting VSL System
                                </h4>
                                <p className="text-gray-600 font-inter">
                                    {`Master the art of video storytelling that
                                    sells. Create compelling video sales letters
                                    that build trust, overcome objections, and
                                    inspire action - even if you've never been
                                    on camera before.`}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 p-8 bg-gradient-to-r from-[#cfba9b]/10 to-white rounded-2xl shadow-lg border border-[#cfba9b]/20 hover:shadow-xl transition-shadow">
                            <div className="p-2 bg-[#5c0201] rounded-full flex-shrink-0">
                                <Award className="text-white w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#5c0201] mb-3 text-lg font-playfair">
                                    VIP Implementation Support
                                </h4>
                                <p className="text-gray-600 font-inter">
                                    {`Get personalized guidance every step of the
                                    way. From one-on-one strategy sessions to
                                    group masterminds, you'll have the support
                                    system you need to implement with confidence
                                    and see real results.`}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section
                id="testimonials"
                className="py-20 px-6 lg:px-8 bg-gradient-to-br from-[#cfba9b]/20 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#5c0201] font-playfair">
                            Real Women, Real Transformations
                        </h2>
                        <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
                            {`These aren't just business wins - they're
                            life-changing breakthroughs that happen when you
                            finally own your power and share your truth.`}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-12">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-[#5c0201] hover:shadow-2xl transition-shadow group">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <Image
                                            src={`/images/avatar/avt${
                                                index + 1
                                            }.png`}
                                            alt="Testimonial Avatar"
                                            width={48}
                                            height={48}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[#5c0201] font-inter">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-[#cfba9b] text-sm font-inter">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                    <div className="ml-auto">
                                        <div className="bg-[#5c0201]/10 px-3 py-1 rounded-full">
                                            <span className="text-xs font-semibold text-[#5c0201] font-inter">
                                                {testimonial.result}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-4 italic font-inter leading-relaxed">
                                    {`"${testimonial.text}"`}
                                </p>
                                <div className="flex text-[#cfba9b]">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            fill="currentColor"
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <div className="inline-flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-lg">
                            <div className="flex -space-x-2">
                                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                                    <Image
                                        src="/images/avatar/avt5.png"
                                        alt="Avatar 1"
                                        width={40}
                                        height={40}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                                    <Image
                                        src="/images/avatar/avt6.png"
                                        alt="Avatar 2"
                                        width={40}
                                        height={40}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                                    <Image
                                        src="/images/avatar/avt7.png"
                                        alt="Avatar 3"
                                        width={40}
                                        height={40}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            <div className="text-left">
                                <p className="font-semibold text-[#5c0201] font-inter">
                                    Join 500+ Women
                                </p>
                                <p className="text-sm text-gray-600 font-inter">
                                    {`Who've transformed their businesses`}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-6 lg:px-8 bg-[#5c0201] text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#5c0201] to-[#4a0101]"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-playfair">
                            {`Questions? I've Got Answers.`}
                        </h2>
                        <p className="text-xl text-white/90 font-inter">
                            Everything you need to know about your
                            transformation journey
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                            <h4 className="font-bold mb-4 text-[#cfba9b] text-lg font-playfair">
                                {`Is this right for me if I'm just starting out?`}
                            </h4>
                            <p className="text-white/90 font-inter leading-relaxed">
                                {`Absolutely! This program is designed for women
                                at every stage of their business journey.
                                Whether you're just discovering your calling or
                                you've been in business for years but feel
                                stuck, the Magnetic Storyteller System meets you
                                where you are and takes you where you want to
                                go. Your story is powerful regardless of how
                                "experienced" you think you are.`}
                            </p>
                        </div>

                        <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                            <h4 className="font-bold mb-4 text-[#cfba9b] text-lg font-playfair">
                                {`What if I don't think my story is interesting
                                enough?`}
                            </h4>
                            <p className="text-white/90 font-inter leading-relaxed">
                                {`This is the biggest myth holding women back!
                                Every single woman I've worked with has said
                                this, and every single one discovered they have
                                incredible stories that their ideal clients
                                desperately need to hear. Your "ordinary"
                                experiences are extraordinary to someone who
                                needs exactly what you've learned. I'll help you
                                uncover the gold in your journey.`}
                            </p>
                        </div>

                        <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                            <h4 className="font-bold mb-4 text-[#cfba9b] text-lg font-playfair">
                                How quickly will I see results?
                            </h4>
                            <p className="text-white/90 font-inter leading-relaxed">
                                {`Many of my clients start seeing shifts in their
                                confidence and clarity within the first week.
                                Business results typically begin showing up
                                within 30-60 days as you implement your new
                                storytelling approach. But here's the truth: the
                                real transformation happens the moment you
                                decide to own your story and step into your
                                power.`}
                            </p>
                        </div>

                        <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                            <h4 className="font-bold mb-4 text-[#cfba9b] text-lg font-playfair">
                                {`What if I'm camera-shy or hate being on video?`}
                            </h4>
                            <p className="text-white/90 font-inter leading-relaxed">
                                {`I hear you! Most of my clients start out feeling
                                this way. That's why we begin with written
                                storytelling and gradually build your
                                confidence. By the time we get to video, you'll
                                feel so connected to your message and so clear
                                on your value that being on camera becomes
                                natural. Plus, I'll give you all my secret
                                techniques for feeling confident and authentic
                                on video.`}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section
                id="contact"
                className="py-20 px-6 lg:px-8 bg-gradient-to-br from-[#cfba9b]/30 to-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#5c0201]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#cfba9b]/20 rounded-full blur-2xl"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center space-x-2 bg-[#5c0201]/10 px-4 py-2 rounded-full mb-6">
                                <Sparkles className="w-4 h-4 text-[#5c0201]" />
                                <span className="text-sm font-medium text-[#5c0201] font-inter">
                                    Your Moment Is Now
                                </span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#5c0201] font-playfair leading-tight">
                                Ready to Step Into Your
                                <span className="block font-dancing text-[#cfba9b] text-4xl sm:text-5xl">
                                    Magnetic Power?
                                </span>
                            </h2>

                            <div className="space-y-4 mb-8 font-inter">
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Your story is waiting to be told. Your
                                    audience is waiting to be inspired. Your
                                    dream business is waiting to be built.
                                </p>
                                <p className="text-lg text-gray-700">
                                    The only question is:{' '}
                                    <strong className="text-[#5c0201]">
                                        {`Are you ready to claim what's already
                                        yours?`}
                                    </strong>
                                </p>
                            </div>

                            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex mb-8">
                                <button className="w-full sm:w-auto bg-[#5c0201] hover:bg-[#4a0101] text-white px-8 py-4 text-xl font-bold transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl font-inter group">
                                    START MY TRANSFORMATION
                                    <ArrowRight
                                        className="inline ml-2 group-hover:translate-x-1 transition-transform"
                                        size={24}
                                    />
                                </button>
                                <button className="w-full sm:w-auto border-2 border-[#5c0201] text-[#5c0201] hover:bg-[#5c0201] hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 rounded-lg font-inter">
                                    Book Discovery Call
                                </button>
                            </div>

                            <div className="flex items-center space-x-4 text-sm text-gray-600 font-inter">
                                <div className="flex items-center space-x-1">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>90-day guarantee</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>VIP support included</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Limited spots available</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/NY002767.jpg"
                                alt="Woman ready to embrace her magnetic power and transform her business"
                                fill
                                className="object-cover rounded-2xl"
                                sizes="100vw"
                                priority
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#5c0201]/20 to-transparent rounded-2xl"></div>
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl">
                                <p className="text-[#5c0201] font-bold font-inter mb-2">
                                    Your transformation starts today
                                </p>
                                <p className="text-sm text-gray-600 font-inter">
                                    Join the women who chose courage over
                                    comfort and changed everything.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 lg:px-8 bg-[#5c0201] text-white border-t border-[#cfba9b]">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-2xl font-bold text-white mb-4 md:mb-0 font-playfair">
                            Her Social Blitz
                        </div>

                        <div className="flex space-x-6">
                            <a
                                href="#"
                                className="text-[#cfba9b] hover:text-white transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a
                                href="#"
                                className="text-[#cfba9b] hover:text-white transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="#"
                                className="text-[#cfba9b] hover:text-white transition-colors">
                                <Twitter size={24} />
                            </a>
                        </div>
                    </div>

                    <div className="border-t border-[#cfba9b]/30 mt-8 pt-8 text-center text-[#cfba9b] font-inter">
                        <p>COPYRIGHT 2025 | HER social blitz</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default LandingPage;
