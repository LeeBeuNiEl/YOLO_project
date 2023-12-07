// 페이지가 로드될 때 초기 설정
document.addEventListener('DOMContentLoaded', function() {

    imageType ='deactivation'
  
    // 이미지 및 버튼 상태 설정
    setImagesAndButtons(imageType);
  });
  
  // 이미지 및 버튼 상태를 설정하는 함수
  function setImagesAndButtons(imageType) {
    // Dynamic selection of activation image based on imageType
    let act_video0 = document.getElementById('activationImage0');
    let act_video1 = document.getElementById('activationImage1');
    let act_video2 = document.getElementById('activationImage2');
    let deactivationImage = document.getElementById('deactivationImage');
    let excamButton = document.querySelector('.excam-button');
    let incamButton = document.querySelector('.incam-button');
    let videoButton = document.querySelector('.video-button');
    let stopButton = document.querySelector('.stop-button');
  
    if (imageType === 'act_video0') {
      act_video0.style.display = 'block';
      act_video1.style.display = 'none';
      act_video2.style.display = 'none';
      deactivationImage.style.display = 'none';
      excamButton.classList.add('active');
      incamButton.classList.remove('active');
      videoButton.classList.remove('active');
      stopButton.classList.remove('active');
    } else if (imageType == 'act_video1'){
      act_video0.style.display = 'none';
      act_video1.style.display = 'block';
      act_video2.style.display = 'none';
      deactivationImage.style.display = 'none';
      excamButton.classList.remove('active');
      incamButton.classList.add('active');
      videoButton.classList.remove('active');
      stopButton.classList.remove('active');
    } else if (imageType == 'act_video2') {
      act_video0.style.display = 'none';
      act_video1.style.display = 'none';
      act_video2.style.display = 'block';
      deactivationImage.style.display = 'none';
      excamButton.classList.remove('active');
      incamButton.classList.remove('active');
      videoButton.classList.add('active');
      stopButton.classList.remove('active');
    } else if (imageType === 'deactivation') {
      act_video0.style.display = 'none';
      act_video1.style.display = 'none';
      act_video2.style.display = 'none';
      deactivationImage.style.display = 'block';
      excamButton.classList.remove('active');
      incamButton.classList.remove('active');
      videoButton.classList.remove('active');
      stopButton.classList.add('active');
    }
    localStorage.setItem('imageType', imageType);
  }
  
  function toggleImages(imageType) {
    // 현재 로컬 스토리지에서 저장된 이미지 상태 가져오기
    let currentImageType = localStorage.getItem('imageType');
  
    // 이미지 타입이 현재와 같으면 경고 메시지 표시
    if (imageType === currentImageType) {
      alert('This state is already chosen');
    } else {
      // 이미지 타입이 현재와 다르면 전환
      setImagesAndButtons(imageType);
    }
  }

