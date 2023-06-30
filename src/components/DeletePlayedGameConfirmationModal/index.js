import React from 'react';
import { Modal } from 'antd';

import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { setDeletePlayedGameConfirmationModalOpen } from '../../features/deletePlayedGameConfirmationModalOpen/deletePlayedGameConfirmationModalOpenSlice';

function DeletePlayedGameConfirmationModal({
    gameForPlayedGameRatingModal,
    playedGames,
    setPlayedGames,
}) {
    const isDeletePlayedGameConfirmationModalOpen = useSelector(state => state.deletePlayedGameConfirmationModalOpen.value);
    const dispatch = useDispatch();

    const ok = () => {
        let copy = JSON.parse(JSON.stringify(playedGames));
        delete copy[gameForPlayedGameRatingModal.slug];
        setPlayedGames(copy);
        localStorage.setItem('played_games', JSON.stringify(copy));
        dispatch(setDeletePlayedGameConfirmationModalOpen(false))
    }

    const cancel = () => {
        dispatch(setDeletePlayedGameConfirmationModalOpen(false))
    }

    return (
        <Modal
            className="DeletePlayedGameConfirmationModal"
            open={isDeletePlayedGameConfirmationModalOpen}
            title='Sure to delete?'
            content='Some descriptions'
            onOk={ok}
            onCancel={cancel}
            width={300}
            centered={true}
            zIndex={1001}>
                <p>Your rating and review of this game will be deleted as well. Are you sure you want to unmark this game as played?</p>
        </Modal>
    );
}

export { DeletePlayedGameConfirmationModal };