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
                width={700}>
                <p>{gameDetails.description}</p>
                <p>{gameDetails.metacritic}</p>
                <p>{gameDetails.released}</p>
            </Modal>
        </>)
        : ('')
    );
}

export { GameDetailsModal };