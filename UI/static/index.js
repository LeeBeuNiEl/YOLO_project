// 페이지가 로드될 때 초기 설정
document.addEventListener('DOMContentLoaded', function() {
    // 로컬 스토리지에서 저장된 이미지 상태 가져오기
    let imageType = localStorage.getItem('imageType');
  
    // 만약 저장된 값이 없으면 기본으로 'deactivation'으로 설정
    imageType = imageType || 'deactivation';
  
    // 이미지 및 버튼 상태 설정
    setImagesAndButtons(imageType);
  });
  
  // 이미지 및 버튼 상태를 설정하는 함수
  function setImagesAndButtons(imageType) {
    let activationImage = document.getElementById('activationImage');
    let deactivationImage = document.getElementById('deactivationImage');
    let runButton = document.querySelector('.run-button');
    let stopButton = document.querySelector('.stop-button');
  
    if (imageType === 'activation') {
      activationImage.style.display = 'block';
      deactivationImage.style.display = 'none';
      runButton.classList.add('active');
      stopButton.classList.remove('active');
    } else if (imageType === 'deactivation') {
      activationImage.style.display = 'none';
      deactivationImage.style.display = 'block';
      runButton.classList.remove('active');
      stopButton.classList.add('active');
    }
  
    // 로컬 스토리지에 현재 이미지 상태 저장
    localStorage.setItem('imageType', imageType);
  }
  
  // 이미지 전환 함수
  function toggleImages(imageType) {
    setImagesAndButtons(imageType);
  }
  