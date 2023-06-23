import React from 'react';
import { Modal } from 'antd';
import './index.css';

function GameDetailsModal({ gameDetails, isModalOpen, setIsModalOpen }) {
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
                    <img className="GameDetailsModalImage" alt="" src={gameDetails.background_image} />
                    <p align="justify">{gameDetails.description_raw}</p>
                    <p><span>Platforms: </span>{gameDetails.platforms.map(platformsItem => platformsItem.platform.name).join(', ')}</p>
                    <p><span>Studio: </span>{gameDetails.developers[0].name}</p>
                    <p><span>Released: </span>{gameDetails.released}</p>
                    <p><span>Genres: </span>{gameDetails.genres.map(genresItem => genresItem.name).join(', ')}</p>
                    <p><span>Tags: </span>{gameDetails.tags.map(tagsItem => tagsItem.name).join(', ')}</p>
            </Modal>
        </>)
        : ('')
    );
}

export { GameDetailsModal };