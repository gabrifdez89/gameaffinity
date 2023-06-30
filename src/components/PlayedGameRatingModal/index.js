import React from 'react';
import { Modal, Slider, Input } from 'antd';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayedGameRatingModalOpen } from '../../features/playedGameRatingModalOpen/playedGameRatingModalOpenSlice';
import { setPlayedGameRating } from '../../features/playedGameRating/playedGameRatingSlice';
import { setPlayedGameReview } from '../../features/playedGameReview/playedGameReviewSlice';

function PlayedGameRatingModal({
    gameForPlayedGameRatingModal,
    setGameForPlayedGameRatingModal,
    playedGames,
    setPlayedGames
}) {
    const playedGameRating = useSelector(state => state.playedGameRating.value);
    const playedGameReview = useSelector(state => state.playedGameReview.value);
    const isPlayedGameRatingModalOpen = useSelector(state => state.playedGameRatingModalOpen.value);
    const dispatch = useDispatch();
    const formatter = (value) => `${value}%`;
    const { TextArea } = Input;
    const setRating = (value) => {
        dispatch(setPlayedGameRating(value));
    };
    const setReview = (event) => {
        dispatch(setPlayedGameReview(event.target.value));
    };
    const cancel = () => {
        dispatch(setPlayedGameRatingModalOpen(false));
        dispatch(setPlayedGameRating(0));
        dispatch(setPlayedGameReview(''))
        setGameForPlayedGameRatingModal({});
    };
    const ok = () => {
        let copy = JSON.parse(JSON.stringify(playedGames));
        copy[gameForPlayedGameRatingModal.slug] = gameForPlayedGameRatingModal;
        copy[gameForPlayedGameRatingModal.slug]['own_rating'] = playedGameRating;
        copy[gameForPlayedGameRatingModal.slug]['own_review'] = playedGameReview;
        setPlayedGames(copy);
        localStorage.setItem('played_games', JSON.stringify(copy));
        dispatch(setPlayedGameRatingModalOpen(false));
        dispatch(setPlayedGameRating(0));
        dispatch(setPlayedGameReview(''))
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
                <span>Your rating: </span><Slider value={playedGameRating} tooltip={{ formatter }} onChange={setRating} railStyle={{ backgroundColor: '#FFFFFF' }} />
                <span>Your review: </span><TextArea value={playedGameReview} rows={4} placeholder="maxLength is 250" maxLength={250} onChange={setReview} />
            </Modal>
    );
}

export { PlayedGameRatingModal };