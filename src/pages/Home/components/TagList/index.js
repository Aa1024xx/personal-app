import React, { useState } from 'react';
import { Tag, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from './index.module.less';

const TagList = ({ tags }) => {
    const [inputVisble, setInputVisble] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [newTags, setNewTags] = useState([]);
    const showInput = () => {
        setInputVisble(true);
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleInputComfirm = () => {
        let tempsTags = [...newTags];
        if (
            inputValue && 
            !tags.concat(tempsTags).map(({ label }) => label).includes(inputValue)
        ) {
            tempsTags = [...tempsTags, { key: `new-${tempsTags.length}`, label: inputValue}];
        }
        setNewTags(tempsTags);
        setInputVisble(false);
        setInputValue('');
    }

    return (
        <div className={styles.tags}>
            <div className={styles.tagsTitle}>标签</div>
            {(tags || []).concat(newTags).map((item) => (
                <Tag key={item.key}>{item.label}</Tag>
            ))}
            {
                inputVisble && 
                <Input 
                 size="small"
                 style={{width: 78 }}
                 value={inputValue}
                 onChange={handleInputChange}
                 onBlur={handleInputComfirm}
                 onPressEnter={handleInputComfirm}
                />
            }
            {
                !inputVisble &&
                <Tag onClick={showInput} style={{ borderStyle: 'dashed' }}>
                <PlusOutlined />
                </Tag>
            }
        </div>
    )
}

export default TagList;