import { useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Dropdown, Space, Spin, Select } from 'antd';

const CurrencyChange = ({ data }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);


    const onChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value) => {
        console.log('search:', value);
    };


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
                value: countryName,
                label: (
                    <div className='flex justify-between'>
                        {countryName !== 'Israel' &&
                            <>
                                <div className="me-2">{countryName}</div>
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
            {/* <Select
                showSearch
                placeholder="Select a person"
                optionFilterProp="label"
                onChange={onChange}
                onSearch={onSearch}
                options={menuItems.map(item => ({
                    value: item.value,
                    label: item.label,
                }))}
            /> */}
        </>
    );
};

export default CurrencyChange;