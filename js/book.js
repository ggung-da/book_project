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

                // 한 문장씩 텍스트 넣고 show 클래스 붙이기
                setTimeout(() => {
                $("#line1").text("하지만 우주에선").addClass("show");
                }, 500);

                setTimeout(() => {
                $("#line2").text("모든게 가벼워 진다는데").addClass("show");
                }, 1500);

                setTimeout(() => {
                $("#line3").text("내 작은 친구가").addClass("show");
                }, 2500);

                setTimeout(() => {
                $("#line4").text("민들레 홀씨처럼 날아가 버릴까").addClass("show");
                }, 3500);

                setTimeout(() => {
                $("#line5").text("걱정이 되었어.").addClass("show");
                }, 4500);

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
