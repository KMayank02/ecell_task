import React from 'react';
import Card from './Card';

function Cards() {
    return (
        <div>
        <div className='container ms-5'>
                    <div className='row'>
                    <div className='col-md-3 col-sm-11'><div className="card mt-3 bg-light">
                        <div className="card-header border-0 ps-4 pe-4 bg-light">
                    Gadgets
                </div>
                        <ul className="list-group list-group-flush ps-4 pe-4 ">
                    <li className="list-group-item border-0 text-light active " >Mobile</li>
                            <li className="list-group-item border-0 text-primary bg-light">Laptop</li>
                            <li className="list-group-item border-0 text-primary bg-light">Camera</li>
                            <li className="list-group-item border-0 text-primary bg-light">Tablet</li>
                            <li className="list-group-item border-0 text-primary bg-light">Music System</li>
                            <li className="list-group-item border-0 text-primary bg-light">Television</li>
                            <li className="list-group-item border-0 text-primary bg-light">Desktop</li>
                </ul>
                        <div className="card-header border-0 ps-4 pe-4 bg-light">
                    ACCESSORIES
                </div>
                        <ul className="list-group list-group-flush ps-4 pe-4">
                            <li className="list-group-item border-0 text-primary bg-light">Mobile Cover</li>
                            <li className="list-group-item border-0 text-primary bg-light">Earphone</li>
                            <li className="list-group-item border-0 text-primary bg-light">Charger</li>
                            <li className="list-group-item border-0 text-primary bg-light">Batteries</li>
                </ul>
            </div></div>
                        <div className='col'>
                                <div className='row'>
                                    <div className='col-sm-4'><Card
                                        src='card/card1.jpg'
                                        price='$499'
                                        name='Desktop'
                                    /></div>

                                    <div className='col-sm-4'><Card
                                        src='card/card2.png'
                                        price='$249'
                                        name='Camera'
                                    /></div>

                                    <div className='col-sm-4'><Card
                                        src='card/card3.jpg'
                                        price='$399'
                                        name='Laptop'
                                    /></div>

                                </div>
                                <div className='row'>
                                    <div className='col-sm-4'><Card
                                        src='card/card4.jpg'
                                        price='$349'
                                        name='iPhone'
                                    /></div>

                                    <div className='col-sm-4'><Card
                                        src='card/card5.jpg'
                                        price='$199'
                                        name='Head Phone'
                                    /></div>

                                    <div className='col-sm-4'><Card
                                        src='card/card6.jpg'
                                        price='$259'
                                        name='iPad Mini'
                                    /></div>

                                </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
    );
}

export default Cards;