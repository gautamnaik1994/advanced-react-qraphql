import React, {Component,Fragment} from 'react';

import Link from 'next/link';

const Home = (props) => (
            <Fragment>

                <h4> This is Home </h4>
                <Link href="/sell">
                    <a>Sell </a>
                </Link>
            </Fragment>
)

export default Home;
