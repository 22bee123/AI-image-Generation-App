import React from 'react'

const GenerateImageForm = ({
    post,
    setPost,
     generateImageLoading,
     setGenerateImageLoading,
     createPostLoading,
     setCreatePostLoading
}) => {

    const GenerateImageFun = () => (
        setGenerateImageLoading(true)
    )
    const CreatePostFun = () => (
        setCreatePostLoading(true)
    )
  return (
    <div>
      <h1>Generate images using prompt</h1>
      <div>Write the propmt according to your need</div>
      <div>
        <input type="text" label="name" placeholder='Enter your name' name="name" value={post.author} onChange={(e) => setPost({...post, author: e.target.value})}/>
        <textarea label="imagePrompt" placeholder='write your prompt that you want to genarate' name="imagePrompt" value={post.prompt} onChange={(e) => setPost({...post, prompt: e.target.value})}/>
      </div>
      <div>
        <button isloading={createPostLoading} isDisabled={post.name === ""} onClick={()=> GenerateImageFun()}>Generate</button>
        <button isloading={createPostLoading} isDisabled={post.name === "" || post.prompt === "" || post.photo === ""} onClick={()=> CreatePostFun()}>post images</button> 
      </div>
    </div>
  )
}

export default GenerateImageForm
