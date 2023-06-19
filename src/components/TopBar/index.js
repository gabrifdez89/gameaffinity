import React, { useState } from 'react';
import { Menu } from 'antd';
import { SearchOutlined, HeartOutlined, CheckCircleOutlined } from '@ant-design/icons';
import './index.css';

function TopBar() {
    const [currentTopBarOption, setCurrentTopBarOption] = useState('search');
    const items = [
        {
          label: 'Search',
          key: 'search',
          icon: <SearchOutlined />,
        },
        {
          label: 'Want to play',
          key: 'want-to-play',
          icon: <HeartOutlined />,
        },
        {
          label: 'Played',
          key: 'played',
          icon: <CheckCircleOutlined />,
        },
    ];

    const onClick = (e) => {
        console.log('click ', e);
        setCurrentTopBarOption(e.key);
    };

    return (
        <div className='TopBar'>
            <Menu onClick={onClick} selectedKeys={[currentTopBarOption]} mode="horizontal" items={items} />
        </div>
    );
}

export { TopBar };