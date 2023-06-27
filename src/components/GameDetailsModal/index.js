import React from 'react';
import { Modal, Carousel } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

import './index.css';

function GameDetailsModal({
    gameDetails,
    isModalOpen,
    setIsModalOpen,
    gameDetailsScreenshots,
    wantToPlayGames,
    setWantToPlayGames,
    searchedGames,
    latestGamesReleased,
    playedGames,
    setPlayedGames }) {

        const addGameToWantToPlay = () => {
            let copy = JSON.parse(JSON.stringify(wantToPlayGames));
            let game = searchedGames.concat(latestGamesReleased).find(g => g.slug === gameDetails.slug);
            copy[gameDetails.slug] = game;
            setWantToPlayGames(copy);
            localStorage.setItem('want_to_play_games', JSON.stringify(copy));
        };
        
        const removeGameFromWantToPlay = () => {
            let copy = JSON.parse(JSON.stringify(wantToPlayGames));
            delete copy[gameDetails.slug];
            setWantToPlayGames(copy);
            localStorage.setItem('want_to_play_games', JSON.stringify(copy));
        };

        const addGameToPlayedGames = () => {
            let copy = JSON.parse(JSON.stringify(playedGames));
            let game = searchedGames.concat(latestGamesReleased).concat(Object.values(wantToPlayGames)).find(g => g.slug === gameDetails.slug);
            copy[gameDetails.slug] = game;
            setPlayedGames(copy);
            localStorage.setItem('played_games', JSON.stringify(copy));
          };
        
          const removeGameFromPlayedGames = () => {
            let copy = JSON.parse(JSON.stringify(playedGames));
            delete copy[gameDetails.slug];
            setPlayedGames(copy);
            localStorage.setItem('played_games', JSON.stringify(copy));
          };
    
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
                    <div className="GameDetailsModalHeader">
                        <a href={gameDetails.metacritic_url} className="GameDetailsModalMetacritic"><p>Metacritic: {gameDetails.metacritic}</p></a>
                        {wantToPlayGames[gameDetails.slug]
                        ? 
                        <div className="GameDetailsModalWantToPlaySaved" onClick={removeGameFromWantToPlay}>
                            <MinusCircleOutlined className="GameDetailsModalWantToPlayIcon" />
                            <span className="GameDetailsModalWantToPlayText">Don't want to play</span>
                        </div>
                        : 
                        <div className="GameDetailsModalWantToPlay" onClick={addGameToWantToPlay}>
                            <PlusCircleOutlined className="GameDetailsModalWantToPlayIcon" />
                            <span className="GameDetailsModalWantToPlayText">Want to play</span>
                        </div>}
                        {playedGames[gameDetails.slug]
                        ? 
                        <div className="GameDetailsModalPlayedGamesSaved" onClick={removeGameFromPlayedGames}>
                            <CloseCircleOutlined className="GameDetailsModalPlayedGamesIcon" />
                            <span className="GameDetailsModalPlayedGamesText">Unmark as played</span>
                        </div>
                        : 
                        <div className="GameDetailsModalPlayedGames" onClick={addGameToPlayedGames}>
                            <CheckCircleOutlined className="GameDetailsModalPlayedGamesIcon" />
                            <span className="GameDetailsModalPlayedGamesText">Mark as played</span>
                        </div>}
                    </div>
                    <Carousel autoplay className="GameDetailsModalCarousel">
                        
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