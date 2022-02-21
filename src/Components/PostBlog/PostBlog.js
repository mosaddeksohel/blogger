import { TextareaAutosize, TextField } from '@mui/material';
import React from 'react';

const PostBlog = () => {
    return (
        <div>
            <form >
                <TextField
                    label="Title"
                    type="text"
                    variant="standard" />
                <TextareaAutosize
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    style={{ width: 200 }}
                />

            </form>

        </div>
    );
};

export default PostBlog;