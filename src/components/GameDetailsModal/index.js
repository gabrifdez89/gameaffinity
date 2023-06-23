import React from 'react';
import { Modal, Carousel } from 'antd';
import './index.css';

function GameDetailsModal({ gameDetails, isModalOpen, setIsModalOpen, gameDetailsScreenshots }) {
    return(
        gameDetails
        ? (<>
            <Modal
                className="GameDetailsModal"
                title={gameDetails.name}
                open={isModalOpen}
                onCancel={() => { setIsModalOpen(false) }}
                footer={null}
                width={700}
                centered={true}>
                    <a href={gameDetails.metacritic_url}><p>Metacritic: {gameDetails.metacritic}</p></a>
                    <Carousel autoplay>
                        
                        {gameDetails.background_image
                            ? <div><img className="GameDetailsModalCarouselItem" alt="" src={gameDetails.background_image} /></div>
                            : ''}
                        {gameDetails.background_image_additional
                            ? <div><img className="GameDetailsModalCarouselItem" alt="" src={gameDetails.background_image_additional} /></div>
                            : ''}
                        {gameDetailsScreenshots[0]
                            ? <div><img className="GameDetailsModalCarouselItem" alt="" src={gameDetailsScreenshots[0]} /></div>
                            : ''}
                        {gameDetailsScreenshots[1]
                            ? <div><img className="GameDetailsModalCarouselItem" alt="" src={gameDetailsScreenshots[1]} /></div>
                            : ''}
                        {gameDetailsScreenshots[2]
                            ? <div><img className="GameDetailsModalCarouselItem" alt="" src={gameDetailsScreenshots[2]} /></div>
                            : ''}
                        {gameDetailsScreenshots[3]
                            ? <div><img className="GameDetailsModalCarouselItem" alt="" src={gameDetailsScreenshots[3]} /></div>
                            : ''}
                    </Carousel>
                    <p align="justify">{gameDetails.description_raw}</p>
                    <p><span>Platforms: </span>{gameDetails.platforms.map(platformsItem => platformsItem.platform.name).join(', ')}</p>
                    <p><span>Studio: </span>{gameDetails.developers[0].name}</p>
                    <p><span>Release date: </span>{gameDetails.released}</p>
                    <p><span>Genres: </span>{gameDetails.genres.map(genresItem => genresItem.name).join(', ')}</p>
                    <p><span>Tags: </span>{gameDetails.tags.map(tagsItem => tagsItem.name).join(', ')}</p>
            </Modal>
        </>)
        : ('')
    );
}

export { GameDetailsModal };