import React from 'react';
import { Modal } from 'antd';

import './index.css';

function DeletePlayedGameConfirmationModal({
    gameForPlayedGameRatingModal,
    playedGames,
    setPlayedGames,
    isDeletePlayedGameConfirmationModalOpen,
    setIsDeletePlayedGameConfirmationModalOpen
}) {
    const ok = () => {
        let copy = JSON.parse(JSON.stringify(playedGames));
        delete copy[gameForPlayedGameRatingModal.slug];
        setPlayedGames(copy);
        localStorage.setItem('played_games', JSON.stringify(copy));
        setIsDeletePlayedGameConfirmationModalOpen(false);
    }

    const cancel = () => {
        setIsDeletePlayedGameConfirmationModalOpen(false);
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