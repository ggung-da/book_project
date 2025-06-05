$(document).ready(function () {
    try {
        $("#flipbook").turn({
            width: 1280,
            height: 720,
            autoCenter: true,
            display: 'double',
            acceleration: true,
            elevation: 70,
            gradients: true
        });



        // 페이지 넘김 감지

        let page4Visited = false;
        let page5Visited = false;
        let page6Visited = false;
        let page7Visited = false;
        function updateFlipbookCentering(page) {
            const lastPage = $("#flipbook").turn("pages");

            if (page === 1) {
                $("#flipbook").addClass("on").removeClass("off");
                $("#flipbook .page video").removeClass("on");
                console.log("첫 페이지 - 가운데 정렬 ON (class 'on' 추가)");
            }else if (page === 3) {
                $("#flipbook").removeClass("on off");
                $("#flipbook .page video").addClass("on");
                console.log("비디오 페이지 (3페이지) - 가운데 정렬 OFF");
            } else if (page === 4) {
                // ⭐ 처음 1회만 실행되도록 조건 추가
                if (!page4Visited) {
                    page4Visited = true;

                    $(".fade-in").removeClass("show").text("");

                    setTimeout(() => {
                        $("#line1").text("강아지별은 아주 멋진 곳이래.").addClass("show");
                    }, 100);
                    setTimeout(() => {
                        $("#line2").text("디디가 좋아하는 풀입과").addClass("show");
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
            } else if (page === 6) {
                // ⭐ 처음 1회만 실행되도록 조건 추가
                if (!page5Visited) {
                    page5Visited = true;

                    $(".fade-in").removeClass("show").text("");

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
                        $("#line10").text("걱정이 되었어.").addClass("show");
                    }, 4500);
                } 
            } else if (page === 8) {
                // ⭐ 처음 1회만 실행되도록 조건 추가
                if (!page6Visited) {
                    page6Visited = true;

                    $(".fade-in").removeClass("show").text("");

                    setTimeout(() => {
                        $("#line11")
                            .html('<img src="./img/KakaoTalk_20250605_145039910.gif" alt="나비gif" width="100" />')
                            .addClass("show");
                    }, 100);
                    setTimeout(() => {
                        $("#line12").text("그때, 작은 나비 한 마리가").addClass("show");
                    }, 1500);
                    setTimeout(() => {
                        $("#line13").text("어둠 속에서 나타났어.").addClass("show");
                    }, 2500);
                }  
            
                $("#flipbook .page video").addClass("on");   
        
            } else if (page === lastPage) {
                $("#flipbook").removeClass("on").addClass("off");
                $("#flipbook .page video").addClass("on");
                console.log("마지막 페이지 - 가운데 정렬 OFF (class 'off' 추가)");
            } else {
                $("#flipbook").removeClass("on off");
                $("#flipbook .page video").addClass("on");
                console.log("기타 페이지 - 가운데 정렬 OFF");
            }
        }
        
  // 초기 페이지 기준으로 설정
  const initialPage = $("#flipbook").turn("page");
  updateFlipbookCentering(initialPage);

  // 페이지 넘길 때마다 실행
  $("#flipbook").bind("turned", function (event, page, view) {
    updateFlipbookCentering(page);
  });

        // 버튼
        $("#prev").click(function () {
            $("#flipbook").turn("previous");
        });
        $("#next").click(function () {
            $("#flipbook").turn("next");
        });

        console.log("플립북 초기화 완료");
    } catch (error) {
        console.error("플립북 초기화 실패:", error);
    }
});
