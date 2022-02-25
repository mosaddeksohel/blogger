import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const PostBlog = () => {

    const [title, setTitle] = useState('');
    const [post, setPost] = useState('');
    const [image, setImage] = useState(null);


    return (
        <div>
            <form >
                <TextField
                    label="Title"
                    sx={{ width: '35%', marginBottom: '15px' }}
                    type="text"
                    required
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '35%', marginBottom: '5px' }}
                    required
                />
                <br />
                <Input
                    accept="image/*"
                    multiple type="file" />
                <br />
                <Button variant="contained" component="span">
                    Upload
                </Button>

            </form>

        </div>
    );
};

export default PostBlog;