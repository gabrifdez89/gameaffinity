import React from 'react';
import { Modal, Carousel } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { setDeletePlayedGameConfirmationModalOpen } from '../../features/deletePlayedGameConfirmationModalOpen/deletePlayedGameConfirmationModalOpenSlice';
import { setPlayedGameRatingModalOpen } from '../../features/playedGameRatingModalOpen/playedGameRatingModalOpenSlice';
import { setModalOpen } from '../../features/modalOpen/modalOpenSlice';
import { setGameForPlayedGameRatingModal } from '../../features/gameForPlayedGameRatingModal/gameForPlayedGameRatingModalSlice';
import { setWantToPlayGames } from '../../features/wantToPlayGames/wantToPlayGamesSlice';

function GameDetailsModal() {

        const isModalOpen = useSelector(state => state.modalOpen.value);
        const gameDetails = useSelector(state => state.gameDetails.value);
        const gameDetailsScreenshots = useSelector(state => state.gameDetailsScreenshots.value);
        const latestGamesReleased = useSelector(state => state.latestGamesReleased.value);
        const searchedGames = useSelector(state => state.searchedGames.value);
        const wantToPlayGames = useSelector(state => state.wantToPlayGames.value);
        const playedGames = useSelector(state => state.playedGames.value);
        const dispatch = useDispatch();

        const addGameToWantToPlay = () => {
            let copy = JSON.parse(JSON.stringify(wantToPlayGames));
            let game = searchedGames.concat(latestGamesReleased).find(g => g.slug === gameDetails.slug);
            copy[gameDetails.slug] = game;
            dispatch(setWantToPlayGames(copy));
            localStorage.setItem('want_to_play_games', JSON.stringify(copy));
        };
        
        const removeGameFromWantToPlay = () => {
            let copy = JSON.parse(JSON.stringify(wantToPlayGames));
            delete copy[gameDetails.slug];
            dispatch(setWantToPlayGames(copy));
            localStorage.setItem('want_to_play_games', JSON.stringify(copy));
        };

        const openPlayedGameRatingModal = () => {
            let game = searchedGames.concat(latestGamesReleased).concat(Object.values(wantToPlayGames)).find(g => g.slug === gameDetails.slug);
            dispatch(setGameForPlayedGameRatingModal(game));
            dispatch(setPlayedGameRatingModalOpen(true));
        };

        const openDeletePlayedGameConfirmationModal = () => {
            let game = Object.values(playedGames).find(g => g.slug === gameDetails.slug);
            dispatch(setGameForPlayedGameRatingModal(game));
            dispatch(setDeletePlayedGameConfirmationModalOpen(true));
        };
    
        return(
            gameDetails
            ? (<>
                <Modal
                    className="GameDetailsModal"
                    title={gameDetails.name}
                    open={isModalOpen}
                    onCancel={() => { dispatch(setModalOpen(false)) }}
                    footer={null}
                    width={700}
                    centered={true}>
                        <div className="GameDetailsModalHeader">
                            {gameDetails.metacritic &&
                            <a href={gameDetails.metacritic_url} className="GameDetailsModalMetacritic"><p>Metacritic: {gameDetails.metacritic}</p></a>}
                            {gameDetails.own_rating !== undefined &&
                            <p className="GameDetailsModalOwnRating"><span>My rating: </span>{gameDetails.own_rating}%</p>}
                            {gameDetails.playtime &&
                            <p className="GameDetailsModalPlayTime"><span>Playtime: </span>{gameDetails.playtime} hours</p>}
                            {gameDetails.own_review &&
                            <p className="GameDetailsModalOwnReview"><span>My review: </span>"{gameDetails.own_review}"</p>}
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
                            <div className="GameDetailsModalPlayedGamesSaved" onClick={openDeletePlayedGameConfirmationModal}>
                                <CloseCircleOutlined className="GameDetailsModalPlayedGamesIcon" />
                                <span className="GameDetailsModalPlayedGamesText">Unmark as played</span>
                            </div>
                            : 
                            <div className="GameDetailsModalPlayedGames" onClick={openPlayedGameRatingModal}>
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