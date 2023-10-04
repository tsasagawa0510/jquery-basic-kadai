/* <p id="target">こんにちは！</p>
  <button id="change-color">文字色変化</button>
  <button id="change-text">文字内容変化</button>
  <button id="fade-out">フェードアウト</button>
  <button id="fade-in">フェードイン</button> */

  $(function() {

    $('#change-color').on('click', () => {
      console.log('test')
      $('#target').css('color', 'red');
    });

    $('#change-text').on('click', () => {
      console.log('change-text')
      $('#target').text('Hello!');
    });

    $('#fade-out').on('click', () => {
      console.log('fade-out')
      $('#target').fadeOut();
    });

    $('#fade-in').on('click', () => {
      console.log('fade-in')
      $('#target').fadeIn();
    });

  });