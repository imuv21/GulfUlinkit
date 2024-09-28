import React, { Fragment, useState } from 'react';

const Gallery = () => {

    const [selectedCategory, setSelectedCategory] = useState('All');
    const items = [
        { id: 1, category: 'Web Development', type: 'Technical', src: 'https://res.cloudinary.com/dey1tujp8/image/upload/v1727516769/GulfUlinkit/vecteezy_ai-generated-programmer-coding-on-laptop-at-night_39190517_pmwokl.jpg', alt: 'Web Development' },
        { id: 2, category: 'App Development', type: 'Technical', src: 'https://res.cloudinary.com/dey1tujp8/image/upload/v1727516930/GulfUlinkit/vecteezy_hand-holding-smartphone-with-icons_1373020_yrrezt.jpg', alt: 'App Development' },
        { id: 3, category: 'Designing', type: 'Non Technical', src: 'https://res.cloudinary.com/dey1tujp8/image/upload/v1727516925/GulfUlinkit/vecteezy_graphic-designer-s-workspace_1268226_oywkqa.jpg', alt: 'Designing' },
        { id: 4, category: 'Digital Marketing', type: 'Non Technical', src: 'https://res.cloudinary.com/dey1tujp8/image/upload/v1727517120/GulfUlinkit/vecteezy_digital-online-marketing-tablet-man-using-tablet-payments_4258290_l4jwa5.jpg', alt: 'Digital Marketing' },
        { id: 5, category: 'Branding', type: 'Non Technical', src: 'https://res.cloudinary.com/dey1tujp8/image/upload/v1727517451/GulfUlinkit/vecteezy_young-asian-woman-graphic-designer-working-in-office-artist_49636228_qjpsgf.jpg', alt: 'Branding' },
        { id: 6, category: 'SEO', type: 'Technical', src: 'https://res.cloudinary.com/dey1tujp8/image/upload/v1727517068/GulfUlinkit/vecteezy_search-engine-optimisation-seo-with-magnifying-glass-on_6899447_aphq68.jpg', alt: 'SEO' },
    ];
    const filteredItems = selectedCategory === 'All' ? items : items.filter(item => item.type === selectedCategory);

    return (
        <Fragment>
            <div className="galleryBtns">
                <button onClick={() => setSelectedCategory('All')} className={selectedCategory === 'All' ? 'active' : ''}>ALL</button>
                <button onClick={() => setSelectedCategory('Technical')} className={selectedCategory === 'Technical' ? 'active' : ''}>Technical</button>
                <button onClick={() => setSelectedCategory('Non Technical')} className={selectedCategory === 'Non Technical' ? 'active' : ''}>Non Technical</button>
            </div>
            <div className="gallery">
                {filteredItems.map(item => (
                    <div key={item.id} className="galleryItem">
                        <img src={item.src} alt={item.alt} />
                        <article className="galleryOverlay">
                            <h1 className="galleryText">{item.category}</h1>
                        </article>
                    </div>
                ))}
            </div>
        </Fragment>
    )
};

export default Gallery;