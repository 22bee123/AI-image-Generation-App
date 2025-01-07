import React from 'react'
import FileSaver from 'file-saver'
export default function ImageCard({item}) {
  return (
    <div>
        <img src={item?.photo}/>
        <div>
            <div>{item?.prompt}</div>
            <div>{item?.author}</div>
            <button onClick={() => FileSaver.saveAs(item?.photo, 'image.jpg')}>download</button>
        </div>
    </div>
  )
}
