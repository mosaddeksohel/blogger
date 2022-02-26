import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const PostBlog = () => {

    const [title, setTitle] = useState('');
    const [post, setPost] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('title', title);
        formData.append('post', post);
        formData.append('image', image)


        fetch('', {
            method: 'POST',
            body: formData

        })

    }





    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Title"
                    sx={{ width: '35%', marginBottom: '15px' }}
                    type="text"
                    onClick={e => setTitle(e.target.value)}
                    required
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '35%', marginBottom: '5px' }}
                    onClick={e => setPost(e.target.value)}

                    required
                />
                <br />
                <Input
                    accept="image/*"
                    multiple type="file"
                    onClick={e => setImage(e.target.files[0])}
                />
                <br />
                <Button variant="contained" component="span">
                    Upload
                </Button>

            </form>

        </div>
    );
};

export default PostBlog;