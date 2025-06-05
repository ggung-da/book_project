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
                // 초기화: 클래스 제거
                $(".fade-in").removeClass("show").text("");

                // 첫 문장
                $("#line1").text("어느 날 내 친구 디디가 강아지별로 떠났어.");
                setTimeout(function () {
                    $("#line1").addClass("show");
                }, 100); // 살짝 지연을 줘야 transition이 먹힘

                // 두 번째 문장
                setTimeout(function () {
                    $("#line2").text("엄마 아빠는 그곳이 얼마나 좋은 곳인지");
                    $("#line2").addClass("show");
                }, 1500);

                // 세 번째 문장
                setTimeout(function () {
                    $("#line3").text("얼마나 행복한 곳인지 설명해 주었지만");
                    $("#line3").addClass("show");
                }, 3000);
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
