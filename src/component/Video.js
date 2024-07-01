import './Video.css'
let bg="Dark"
function Video({title,channel,views,time,verified}) {
    
    return (
        <>

        <div className='container'>

            <div  className='pic'>

            <img src="https://picsum.photos/id/230/200/150" alt="Katherine Johnson"></img>

            </div>
            <div className="title" >{title}</div>
            <div className="channel" >{channel} {verified? '✅':null}</div>
            <div className="views" >
                {views} views <span>.</span> {time}
                </div>
        </div>
        </>
    )
}

export default Video;