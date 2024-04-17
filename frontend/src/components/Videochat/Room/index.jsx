import React from 'react'
import {useParams} from 'react-router-dom'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"



const RoomPage = () => {
    const {roomId} = useParams();
    const myMeeting = async (element) => {
        const appID = 1876297021;
        const serverSecret = "59913b32a4f2780ad5c4a9df54adc251";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),"Pratik");
        // use userID insted of Date.now(),"Pratik"
        const zc = ZegoUIKitPrebuilt.create(kitToken);

        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: "Copy Link",
                    url: `http://localhost:3000/room/${roomId}`,
                    // url: `https://final-year-project-indol.vercel.app/room/${roomId}`
                }
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: true,
        })
    }
  return (
    <div>
        <div ref={myMeeting}/>
    </div>
  )
}

export default RoomPage