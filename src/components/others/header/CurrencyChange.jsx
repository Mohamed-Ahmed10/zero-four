import { useContext, useEffect, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Dropdown, Space, Spin } from 'antd';
import { CountryContext } from '../../../context/CountryContext';

const CurrencyChange = ({ data }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedFlag, setSelectedFlag] = useState('');
    const countryContext = useContext(CountryContext)


    useEffect(() => {
        if (data && data.length > 0) {
            const firstItem = data[0];
            setSelectedFlag(firstItem.flags?.png || '');
        }
    }, [data]);

    const formatItems = (response) => {
        return response.map((item, index) => {
            const countryName = item.name.common.split(' ').slice(0, 2).join(' ');
            return {
                key: String(index + 1),
                value: countryName,
                label: (
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => handleSelect(item)}
                    >
                        {countryName !== 'Israel' && (
                            <>
                                <div className="me-2">{countryName}</div>
                                <img width={30} src={item.flags.svg} alt={item.name.common} />
                            </>
                        )}
                    </div>
                ),
            };
        });
    };

    const fetchData = async () => {
        setLoading(true);

        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 1000);
        });

        setItems(formatItems(response));
        setLoading(false);
    };

    const handleDropdownVisibleChange = (visible) => {
        if (visible && items.length === 0) {
            fetchData();
        }
    };

    const handleSelect = (selectedItem) => {
        setSelectedFlag(selectedItem.flags?.png || '');
        countryContext.setCountry(selectedItem.name.common)
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
                showSearch
                menu={{
                    items: menuItems,
                }}
                onOpenChange={handleDropdownVisibleChange}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <img
                            className="mx-2"
                            src={selectedFlag}
                            width={20}
                            alt="Flag"
                        />
                    </Space>
                </a>
            </Dropdown>
        </>
    );
};

export default CurrencyChange;
