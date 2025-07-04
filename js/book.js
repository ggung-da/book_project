$(document).ready(function () {
    try {
        $("#flipbook").turn({
            width: 1280,
            height: 720,
            autoCenter: true,
            display: "double",
            acceleration: true,
            elevation: 70,
            gradients: true,
            
        });
        // var playPromise = document.querySelector('audio').play();

        // // In browsers that don’t yet support this functionality,
        // // playPromise won’t be defined.
        // if (playPromise !== undefined) {
        //     playPromise.then(function() {
        //     // Automatic playback started!
        //     }).catch(function(error) {
        //     // Automatic playback failed.
        //     // Show a UI element to let the user manually start playback.
        //     });
        // }


        function clearAllText() {
            $(".fade-in").text("").removeClass("show");
        }

        function updateFlipbookCentering(page) {
        const lastPage = $("#flipbook").turn("pages");

            //clearAllText();

            // 방문 기록 초기화(필요에 따라)
            if (page !== 4) page4Visited = false;
            if (page !== 6) page6Visited = false;
            if (page !== 8) page8Visited1 = false;
            if (page !== 10) page10Visited = false;
            if (page !== 12) page12Visited = false;
            if (page !== 14) page13Visited = false;
            if (page !== 16) page17Visited = false;



            if (page === 1) {
                $("#flipbook").addClass("on").removeClass("off");
                //$("#flipbook .page video").removeClass("on");
                console.log("첫 페이지 - 가운데 정렬 ON (class 'on' 추가)");
            } else if (page === 2) {
                $("#flipbook").removeClass("on off");
               // $("#flipbook .page video").addClass("on");
                console.log("비디오 페이지 (3페이지) - 가운데 정렬 OFF");
                let updatedVideoSrc = "./img/cover.mp4?" + new Date().getTime();
                console.log (new Date().getTime());
                $("#video0").html(`
                    <video autoplay muted loop style="width: 100%; height: 100%; object-fit: cover;">
                        <source src="${updatedVideoSrc}" type="video/mp4" />
                    </video>
                `).addClass("on");
                 
            } else if (page === 4) {
                if (!page4Visited) {
                    page4Visited = true;
                    setTimeout(() => {
                        $("#line1").text("강아지별은 아주 멋진 곳이래.").addClass("show");
                    }, 100);
                    setTimeout(() => {
                        $("#line2").text("디디가 좋아하는 풀잎과").addClass("show");
                    }, 1500);
                    setTimeout(() => {
                        $("#line3").text("부드러운 바람,").addClass("show");
                    }, 2500);
                    setTimeout(() => {
                        $("#line4").text("맘껏 뛰어놀 수 있는 동산은").addClass("show");
                    }, 3500);
                    setTimeout(() => {
                        $("#line5").text("어디든 땅을 파도 혼나지 않아.").addClass("show");
                    }, 4500);
                }
                let updatedVideo1Src = "./img/page1.mp4?" + new Date().getTime();
                $("#video1").html(`
                    <video autoplay muted loop style="width: 100%; height: 100%; object-fit: cover;">
                        <source src="${updatedVideo1Src}" type="video/mp4" />
                    </video>
                `).addClass("on");
            } else if (page === 6) {
                if (!page6Visited) {
                    page6Visited = true;
                    setTimeout(() => {
                        $("#line6").text("하지만 우주에선").addClass("show");
                    }, 100);
                    setTimeout(() => {
                        $("#line7").text("모든게 가벼워 진다는데").addClass("show");
                    }, 1500);
                    setTimeout(() => {
                        $("#line8").text("내 작은 친구가").addClass("show");
                    }, 2500);
                    setTimeout(() => {
                        $("#line9").text("민들레 홀씨처럼 날아가 버릴까").addClass("show");
                    }, 3500);
                    setTimeout(() => {
                        $("#line10").text("겁이나는 걸.").addClass("show");
                    }, 4500);
                }
                let updatedVideo2Src = "./img/page2.mp4?" + new Date().getTime();
                $("#video2").html(`
                    <video autoplay muted loop style="width: 100%; height: 100%; object-fit: cover;">
                        <source src="${updatedVideo2Src}" type="video/mp4" />
                    </video>
                `).addClass("on");
            } else if (page === 8) {
                let updatedSrc = "./img/butterfly.gif?" + new Date().getTime();
                if (!page8Visited1) {
                    page8Visited1 = true;
                    setTimeout(() => {
                        $("#line11").html(`<img src="${updatedSrc}" alt="강아지별 이미지" width="80">`).addClass("show");
                    }, 100);
                    setTimeout(() => {
                        $("#line12").text("그때, 작은 나비 한 마리가").addClass("show");
                    }, 1500);
                    setTimeout(() => {
                        $("#line13").text("어둠 속에서 나타났어.").addClass("show");
                    }, 2500);
                }
                let updatedVideo3Src = "./img/page3.mp4?" + new Date().getTime();
                $("#video3").html(`
                    <video autoplay muted loop style="width: 100%; height: 100%; object-fit: cover;">
                        <source src="${updatedVideo3Src}" type="video/mp4" />
                    </video>
                `).addClass("on");
            } else if (page === 10) {
                if (!page10Visited) {
                    page10Visited = true;
                    setTimeout(() => {
                        $("#line14").text("나는 푹신한 풀밭 위에서 눈을 떴어.").addClass("show");
                    }, 100);
                    setTimeout(() => {
                        $("#line15").text("새파란 하늘과 푹신한 구름,").addClass("show");
                    }, 1500);
                    setTimeout(() => {
                        $("#line16").text("그리고").addClass("show");
                    }, 2500);
                    setTimeout(() => {
                        $("#line17").text("나의 디디가 있었어!").addClass("show");
                    }, 3500);
                } 
                let updatedVideo4Src = "./img/page4.mp4?" + new Date().getTime();
                $("#video4").html(`
                    <video autoplay muted loop style="width: 100%; height: 100%; object-fit: cover;">
                        <source src="${updatedVideo4Src}" type="video/mp4" />
                    </video>
                `).addClass("on");
            } else if (page === 12) {
                if (!page12Visited) {
                    page12Visited = true;
                    setTimeout(() => {
                       $("#line18").text("나는 디디를 잔뜩 쓰다듬고").addClass("show");
                    }, 100);
                    setTimeout(() => {
                        $("#line19").text("멋진 언덕을 뛰어 다니며 함께 놀았어!").addClass("show");
                    }, 1500);
                    setTimeout(() => {
                        $("#line20").text("몸은 아주 가볍고").addClass("show");
                    }, 2500);
                    setTimeout(() => {
                        $("#line21").text("좋은 냄새가 가득했지!").addClass("show");
                    }, 3500);
                }  
                let updatedVideo5Src = "./img/page5.mp4?" + new Date().getTime();
                $("#video5").html(`
                    <video autoplay muted loop style="width: 100%; height: 100%; object-fit: cover;">
                        <source src="${updatedVideo5Src}" type="video/mp4" />
                    </video>
                `).addClass("on");
            } else if (page === 14) {
                if (!page13Visited) {
                    page13Visited = true;
                    setTimeout(() => {
                       $("#line22").text("우리는 언덕에 앉아").addClass("show");
                    }, 100);
                    setTimeout(() => {
                        $("#line23").text("노을이 지는 하늘을 함께 바라보았어.").addClass("show");
                    }, 1500);
                    setTimeout(() => {
                        $("#line24").text("나는 아쉬움과 애정을 담아").addClass("show");
                    }, 2500);
                    setTimeout(() => {
                        $("#line25").text("디디를 꼭 안아 주었어.").addClass("show");
                    }, 3500);
                } 
                let updatedVideo6Src = "./img/page6.mp4?" + new Date().getTime();
                $("#video6").html(`
                    <video autoplay muted loop style="width: 100%; height: 100%; object-fit: cover;">
                        <source src="${updatedVideo6Src}" type="video/mp4" />
                    </video>
                `).addClass("on");   
            } else if (page === 16) {
                if (!page17Visited) {
                    page17Visited = true;
                    setTimeout(() => {
                       $("#line26").text("안녕! 내 친구 디디.").addClass("show");
                    }, 100);
                    setTimeout(() => {
                        $("#line27").text("우리는 꼭 다시 만날거야.").addClass("show");
                    }, 1500);
                }  

            } else if (page === lastPage) {
                $("#flipbook").addClass("off").removeClass("on");
            } else {
                $("#flipbook").removeClass("on off");
                $("#flipbook .page video").addClass("on");
            }

            
            // 현재 페이지 비디오 재생 시도
            // const video = $("#flipbook .page").eq(page - 1).find("video").get(0);
            // if (video) {
            //     video.play().catch((e) => {
            //         console.log("비디오 자동재생 실패:", e);
            //     });
            // }
        }

        // 초기 상태 업데이트
        updateFlipbookCentering($("#flipbook").turn("page"));

        // 페이지가 바뀔 때마다 호출
        $("#flipbook").bind("turned", function (event, page, view) {
            updateFlipbookCentering(page);
        });

        // 컨트롤 버튼 이벤트
        $("#prev").click(function () {
            $("#flipbook").turn("previous");
        });

        $("#reset").click(function () {
            $("#flipbook").turn("page", 1);
            $("#flipbook").addClass("on").removeClass("off");

            // 모든 video에 대해 재생만 초기화 (재삽입 없이 깜빡임 방지)
            $("#flipbook video").each(function () {
                try {
                    this.currentTime = 0; // 시간만 초기화
                } catch (e) {
                    console.error("비디오 시간 초기화 중 오류:", e);
                }
            });

            // 텍스트도 필요 시 초기화
            // $(".fade-in").text("").removeClass("show");

            // 페이지별 처리 로직 다시 실행
            updateFlipbookCentering(1);
        });


        $("#next").click(function () {
            $("#flipbook").turn("next");
        });
    } catch (error) {
        console.error("플립북 초기화 중 오류:", error);
    }
});

