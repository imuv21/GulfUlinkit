import React from 'react';
import './Coverflow.less';

const Coverflow = () => {
    return (
        <div className="main-container">

            <div className="coverflow-container">
                <ol className="coverflow-list">

                    <input type="radio" name="cover-item" id="cover-1" />
                    <li className="coverflow-item">
                        <label for="cover-1">
                            <figure className="album-cover">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3211/51psxBugNkL.jpg" />
                            </figure>
                        </label>
                    </li>

                    <input type="radio" name="cover-item" id="cover-2" />
                    <li className="coverflow-item">
                        <label for="cover-2">
                            <figure className="album-cover">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3211/9c0075e42d1e099c487488a168db0e41.1000x1000x1.jpg" />
                            </figure>
                        </label>
                    </li>

                    <input type="radio" name="cover-item" id="cover-3" />
                    <li className="coverflow-item">
                        <label for="cover-3">
                            <figure className="album-cover">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3211/3651470.jpg" />
                            </figure>
                        </label>
                    </li>

                    <input type="radio" name="cover-item" id="cover-4" />
                    <li className="coverflow-item">
                        <label for="cover-4">
                            <figure className="album-cover">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3211/MI0000681618.jpg" />
                            </figure>
                        </label>
                    </li>

                    <input type="radio" name="cover-item" id="cover-5" />
                    <li className="coverflow-item">
                        <label for="cover-5">
                            <figure className="album-cover">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3211/homepage_large.63d675da.jpg" />
                            </figure>
                        </label>
                    </li>

                    <input type="radio" name="cover-item" id="cover-6" />
                    <li className="coverflow-item">
                        <label for="cover-6">
                            <figure className="album-cover">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3211/garbagealbum1.jpg" />
                            </figure>
                        </label>
                    </li>

                    <input type="radio" name="cover-item" id="cover-7" />
                    <li className="coverflow-item">
                        <label for="cover-7">
                            <figure className="album-cover">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3211/long-way-round-2010.png" />
                            </figure>
                        </label>
                    </li>

                    <input type="radio" name="cover-item" id="cover-8" />
                    <li className="coverflow-item">
                        <label for="cover-8">
                            <figure className="album-cover">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3211/61b3DwIVKqL.jpg" />
                            </figure>
                        </label>
                    </li>

                    <input type="radio" name="cover-item" id="cover-9" />
                    <li className="coverflow-item">
                        <label for="cover-9">
                            <figure className="album-cover">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3211/0000037627_500.jpg" />
                            </figure>
                        </label>
                    </li>
                </ol>
            </div>

            {/* <div className="controls">
                <label for="cover-1">1</label>
                <label for="cover-2">2</label>
                <label for="cover-3">3</label>
                <label for="cover-4">4</label>
                <label for="cover-5">5</label>
                <label for="cover-6">6</label>
                <label for="cover-7">7</label>
                <label for="cover-8">8</label>
                <label for="cover-9">9</label>
            </div> */}
        </div>
    )
};

export default Coverflow;