import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createHomeAddress} from './API';

require('dotenv').config();
const cloudinary_id= process.env.REACT_APP_CLOUDINARY_ID;
const cloudinary_preset = process.env.REACT_APP_CLOUDINARY_PRESET;

    const HomeAddresForm=({location, onClose})=>{
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    const {register,handleSubmit,getValues} = useForm();    
    
    const onSubmit= async (data) =>{
      const { files } = document.querySelector('input[type="file"]');
        //check if image input file is filled or not
        if(data.files!==undefined || data.files!==null || data.files!==""){ 
          setLoading(true);
          const formData = new FormData();
          formData.append('file', files[0]);
          formData.append('upload_preset', cloudinary_preset);
          const options = {
            method: 'POST',
            body: formData,
          };                 
          const res = await fetch(  
            `https://api.cloudinary.com/v1_1/${cloudinary_id}/image/upload`,options             
          );
          const img = await res.json();
          const imgUrl = img.secure_url;
          data.image = imgUrl;
          setLoading(false);
        } else {
          data.image = "";
        }              
        //processing the upload request
        try {
            setLoading(true);
            data.latitude = location.latitude;
            data.longitude = location.longitude;
            const created=await createHomeAddress(data);
            onClose();
        } catch (error) {
            console.log(error);
            setError(error.message);
            setLoading(false);
        }   
    };
return(    
    <Form onSubmit={handleSubmit(onSubmit)} className="entry-form">
    {error ?<h3 className="error">{error} </h3> : null}
    <Form.Group controlId="formAbsen">
      <Form.Label>Absen</Form.Label>
      <Form.Control type="number" min="0" max="32" name="absen" ref={register} required />
      <Form.Text className="text-muted">
        Nomor absen kamu dulu waktu di kelas.
      </Form.Text>
    </Form.Group>
  
    <Form.Group controlId="formDeskripsi">
      <Form.Label>Petunjuk Arah</Form.Label>
      <Form.Control as="textarea" rows={3} placeholder="petunjuk arah" name="description" ref={register}/>
    </Form.Group>

    <Form.Group>
        <Form.File name="image" type="file" label="Foto Rumah" ref={register}/>
    </Form.Group>

    <Button type="submit" disabled={loading}>{loading ? 'Memproses...' : 'Tambahkan alamat rumah'}
    </Button>
  </Form>
)
};

export default HomeAddresForm;