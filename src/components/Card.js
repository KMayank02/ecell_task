import React from 'react';

function Card(props) {
    return (
        <>
            <div class="card mt-3 ms-5 align-items-center">
                <img src={props.src} class="card-img-top rounded mx-auto d-block" />
                    <div class="card-body">
                    <h4 class="card-title">{props.name}</h4>
                    <div className='row'>
                        <div className='col'>
                            <p class="card-text text-nowrap">Starting at</p>
                        </div>
                        <div className='col'>
                            <h5>{props.price}</h5>
                        </div>
                    </div>
                    
                    <button className='btn btn-success btn-sm' data-bs-toggle="button" autocomplete="off">View details {'>>'}
                    </button>
                    </div>
            </div>
        </>
    );
}

export default Card;