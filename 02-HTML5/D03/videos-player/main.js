window.addEventListener('load', function () {

            urls = ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
            ]

            myvideo = this.document.getElementById('myvideo');
            myvideo.width = myvideo.height = 700;
            videos = this.document.getElementsByClassName('videotitle');

            for (let i = 0; i < videos.length; i++) {
                videos[i].addEventListener('click', (e)=>{
                    let vidId = Math.floor(Math.random()*4)
                    myvideo.src = urls[vidId];
                    playpausefun()
                })
                
            }
            myvideo.addEventListener('dblclick', ()=>{
                myvideo.requestFullscreen();
            });

             myvideo.addEventListener('click', ()=>{
                playpausefun()
            })

            seekbar = this.document.getElementById('seekbar');

            playbtn = this.document.getElementById('playbtn');
        });//end of load
        function playpausefun() {
            // call play method by caller (video object)
            /*myvideo.play();*/
            if (myvideo.paused) {
                myvideo.play();
                playbtn.value = "Pause";
            } else {
                myvideo.pause();
                playbtn.value = "Play";
            }
        }
        function changemdiasize(e) {
           if( myvideo.width == 400){
             myvideo.width = myvideo.height = 700;
           }else {
             myvideo.width = myvideo.height = 400;
           }
            }
        function changemediavolume(e) {
            myvideo.volume = e.target.value;
        }
        function mutefun() {
            if (myvideo.muted) {
                myvideo.muted = false;
            } else {
                myvideo.muted = true;
            }
            // ^
            /*myvideo.muted ^= true;*/
        }
        function LoopFun() {
            if (myvideo.loop) {
                myvideo.loop = false;
            } else {
                myvideo.loop = true;
            }
        }
        function forwardfun() {
            myvideo.playbackRate++;
        }
        function backwardfun() {
            myvideo.playbackRate-= 0.1;// if (paybackRate = 0) => video will be paused
            if (myvideo.playbackRate <= 0) myvideo.playbackRate = 1;
        }
        function slowmotionfun() {
            if(myvideo.playbackRate == 0.2) {
                myvideo.playbackRate = 1;
            }else {
                myvideo.playbackRate = 0.2;
            }
        }
        function changeseekbarfun(e) {
            // myvideo.currentTime=myvideo.duration*e.target.value/max(100)
            myvideo.currentTime = myvideo.duration * e.target.value / 100
        }

        function moveSeekbar() { 
            seekbar.value = myvideo.currentTime / myvideo.duration *100;
         }