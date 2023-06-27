import React from 'react';
import { Modal, Slider, Input } from 'antd';
import './index.css';

function PlayedGameRatingModal({
    isPlayedGameRatingModalOpen,
    setIsPlayedGameRatingModalOpen,
    playedGameRating,
    setPlayedGameRating,
    playedGameReview,
    setPlayedGameReview,
    gameForPlayedGameRatingModal,
    setGameForPlayedGameRatingModal,
    playedGames,
    setPlayedGames
}) {
    const formatter = (value) => `${value}%`;
    const { TextArea } = Input;
    const setRating = (event) => {
        console.log(event.value);
        setPlayedGameRating(event.value);
    };
    const setReview = (event) => {
        setPlayedGameReview(event.value);
    };
    const cancel = () => {
        setIsPlayedGameRatingModalOpen(false);
        setPlayedGameRating(0);
        setPlayedGameReview('');
        setGameForPlayedGameRatingModal({});
    };
    const ok = () => {
        let copy = JSON.parse(JSON.stringify(playedGames));
        copy[gameForPlayedGameRatingModal.slug] = gameForPlayedGameRatingModal;
        copy[gameForPlayedGameRatingModal.slug]['own_rating'] = playedGameRating;
        copy[gameForPlayedGameRatingModal.slug]['own_review'] = playedGameReview;
        setPlayedGames(copy);
        localStorage.setItem('played_games', JSON.stringify(copy));
        setIsPlayedGameRatingModalOpen(false);
        setPlayedGameRating(0);
        setPlayedGameReview('');
    };

    return (
        <Modal
            className="PlayedGameRatingModal"
            title='Adding played game rating'
            open={isPlayedGameRatingModalOpen}
            onCancel={cancel}
            onOk={ok}
            width={300}
            centered={true}
            zIndex={1001}>
                <span>Your rating: </span><Slider value={playedGameRating} tooltip={{ formatter }} onChange={setRating}/>
                <span>Your review: </span><TextArea value={playedGameReview} rows={4} placeholder="maxLength is 250" maxLength={250} onChange={setReview} />
            </Modal>
    );
}

export { PlayedGameRatingModal };