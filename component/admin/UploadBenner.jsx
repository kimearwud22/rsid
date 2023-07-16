import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

const UploadBenner = () => {
    const [data, setData] = useState([])
    const [photo, setPhoto] = useState('')
    async function AddPhoto(e) {
        e.preventDefault()
        try {
            axios({
              method: 'post',
              url: 'http://localhost:5000/api/benner',
              data: {
                photo: photo,
                
              }
            })
            .then(res => {
              console.log(res)
            })
            Swal.fire({
              title: 'Pesanan',
              text: 'Pesan segera di proses',
              icon: 'success',
              confirmButtonText: 'Oke Siap'
            })
            clearForm()
        }
        catch (err) {
            console.log(err);
        }
    }
    const clearForm = () => {
        setPhoto('')
        
    }
    // specify upload params and url for your files
    //    const getUploadParams = ({ meta }) => { return { url: 'http://localhost:5000/api/benner' } }

    //    // called every time a file's `status` changes
    //    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

    //    // receives array of files that are done uploading when submit button is clicked
    //    const handleSubmit = (files, allFiles) => {
    //      console.log(files.map(f => f.meta))
    //      allFiles.forEach(f => f.remove())
    //    }

    return (
        <Dropzone
            // getUploadParams={getUploadParams}
            // onChangeStatus={handleChangeStatus}
            value={photo} onChange={(e)=> setPhoto(e.target.value)}
            placeholder="Nama"
            onSubmit={AddPhoto}
            accept="image/*"
        />
    )
}

export default UploadBenner