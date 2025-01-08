import React, { useState } from 'react'
import GenerateImageForm from '../components/GenerateImageForm'
import GeneratedImageCard from '../components/GeneratedImageCard'

const CreatePost = () => {
  const [generateImageLoading, setGenerateImageLoading] = useState(false)
  const [createPostLoading, setCreatePostLoading] = useState(false)
  const [post, setPost] = useState({
    author:"",
    prompt:"",
    photo:""
  })
  return (
    <div>
      <div>
        <GenerateImageForm post={post} setPost={setPost} generateImageLoading={generateImageLoading} setGenerateImageLoading={setGenerateImageLoading} createPostLoading={createPostLoading} setCreatePostLoading={setCreatePostLoading}/>
        <GeneratedImageCard src={post?.photo} loading={generateImageLoading}/>
      </div>
    </div>
  )
}

export default CreatePost
