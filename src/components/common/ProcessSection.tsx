import Image from "next/image";

export default function ProcessSection() {
    const processes = [
        {
            id: 1,
            title: 'Design Concept',
            description:
                'Our designers partner with you to sketch and refine the aesthetic — from shape, motifs to engraving style.',
            image: '/images/design-concept.png',
        },
        {
            id: 2,
            title: 'Material Selection',
            description:
                'Choose your gold: 24-karat solid, plated, or leaf. Decide finish—polished, matte, brushed.',
            image: '/images/material-selection.png',
        },
        {
            id: 3,
            title: 'Engraving & Detailing',
            description:
                'Laser precision or hand-etched — each mark considered, every line purposeful.',
            image: '/images/e-and-d.png',
        },
        {
            id: 4,
            title: 'Application & Assembly',
            description:
                'Gold elements are applied with care; assembly ensures every detail aligns and withstands wear.',
            image: '/images/app-and-assembly.png',
        },
        {
            id: 5,
            title: 'Finishing Touches',
            description:
                'Polishing, sealing, quality-assurance — ensuring beauty meets function.',
            image: '/images/finishing-touches.png',
        },
        {
            id: 6,
            title: 'Delivery & Packaging',
            description:
                'Elegant packaging, insured shipment. Unboxing as much a part of the experience as the phone itself.',
            image: '/images/delivery-and-packaging.png',
        },
    ];

    return (
        <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center md:text-left">
                    {/* --- RESPONSIVE HEADING --- */}
                    <h2 className="text-4xl font-bold text-[#ae8b3b] sm:text-[50px]">
                        Our Process
                    </h2>
                    {/* --- Used standard text-base class --- */}
                    <p className="mt-4 text-base text-[#262f2e]">
                        Every step handled by masters, delivering timeless beauty and flawless finish.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {processes.map((process) => (
                        <div
                            key={process.id}
                            /* --- Removed h-10/12, added base shadow --- */
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* --- RESPONSIVE IMAGE HEIGHT --- */}
                            <div className="relative h-56 overflow-hidden md:h-64">
                                <Image
                                    src={process.image}
                                    alt={process.title}
                                    fill
                                    /* --- Removed redundant w-full h-full --- */
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
                            </div>

                            {/* --- FIXED mt-[-24] and removed bottom-[12%]. Adjusted py-10 to py-8 --- */}
                            <div className="relative bg-[#E8E1D5] px-6 py-8 -mt-6 rounded-t-4xl text-center">
                                {/* --- Used standard text-xl class --- */}
                                <h3 className="text-xl font-semibold text-black mb-3">
                                    {process.title}
                                </h3>
                                <p className="text-sm text-gray-800 leading-relaxed">
                                    {process.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}