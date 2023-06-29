import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTopbarSearch, setTopbarWantToPlay, setTopbarPlayed } from './topbarSlice';
import { Menu } from 'antd';
import { SearchOutlined, PlusCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import './index.css';

function Topbar() {
    const topbar = useSelector(state => state.topbar.value);
    const dispatch = useDispatch();
    const items = [
        {
          label: 'Search',
          key: 'search',
          icon: <SearchOutlined />,
        },
        {
          label: 'Want to play',
          key: 'want-to-play',
          icon: <PlusCircleOutlined />,
        },
        {
          label: 'Played',
          key: 'played',
          icon: <CheckCircleOutlined />,
        },
    ];

    const handleClick = function (e) {
        if (e.key === 'search') {
            dispatch(setTopbarSearch());
        } else if (e.key === 'want-to-play') {
            dispatch(setTopbarWantToPlay());
        } else if(e.key === 'played') {
            dispatch(setTopbarPlayed());
        }
    }

    return (
        <div className='TopBar'>
            <Menu onClick={(e) => handleClick(e)} selectedKeys={[topbar]} mode="horizontal" items={items} />
        </div>
    );
}

export { Topbar };