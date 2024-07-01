
import './playButton.css' 
function Playbutton({meaasge ,children,onPlay, onPause}){
    let playing=false;
    function handleClick(){
        if(playing)onPause();
        else onPlay();

        playing=!playing;
    }
return (

    <button onClick={handleClick}>{children}: {playing?'>':'||'}</button>
);
}
export default Playbutton;