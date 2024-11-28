import { useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Dropdown, Space, Spin } from 'antd';

const CurrencyChange = ({ data }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);

        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 2000);
        });

        const formattedItems = response.map((item, index) => {
            const countryName = item.name.common.split(' ').slice(0, 2).join(' ');
            return {
                key: String(index + 1),
                label: (
                    <div className='flex justify-between'>
                        {countryName !== 'Israel' &&
                            <>
                                <span>{countryName}</span>
                                <img width={30} src={item.flags.svg} alt={item.name.common} />
                            </>
                        }
                    </div>
                ),
            };
        });

        setItems(formattedItems);
        setLoading(false);
    };

    const handleDropdownVisibleChange = (visible) => {
        if (visible && items.length === 0) {
            fetchData();
        }
    };

    const menuItems = loading
        ? [
            {
                key: 'loading',
                label: <Spin indicator={<LoadingOutlined />} />,
            },
        ]
        : items;

    return (
        <>
            <Dropdown
                menu={{
                    items: menuItems,
                }}
                onOpenChange={handleDropdownVisibleChange}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <img className='mx-2' src="https://flagcdn.com/gb.svg" width={20} alt="Flag" />
                    </Space>
                </a>
            </Dropdown>
        </>
    );
};

export default CurrencyChange;