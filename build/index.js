
console.log('HELLO FROM JS');

// $('button').on('click', function(e){
//     $(e.currentTarget).toggleClass('btn-danger btn-primary')
// });

$('[data-click=toggle-active]').on('click', (e) => {
  $(e.currentTarget).addClass('active').siblings().removeClass('active')
});

$('[data-click=rotate-icon]').on('click', () => {
  $('.fa-globe').toggleClass('fa-spin');
  $('#temp').text(getTemp())
});

function getTemp(){
  jQuery.ajax({
    url: '/get_temperature'
  }).done((resp) => {

    console.log('got temp')
    $('#temp').text(resp.temp)

  }).fail( (resp) => {

    console.log('Error!')
    $('#temp').text('Error.')

  })
    return resp.temp;
}


// setInterval(getTemp, 5000);

// // // //

function setTemp(tempVal){
  obj = { 'temp': tempVal };

  jQuery.ajax({
    url: '/set_temperature',
    type: 'POST',
    dataType: 'json',
    data: JSON.stringify(obj),
    contentType: "application/json; charset=utf-8",
  }).done((resp) => {

    console.log('DONE')
    // $('#temp').text(resp.temp)

  }).fail( (resp) => {

    console.log('Error!')
    // $('#temp').text('Error.')

  })

};

$('[data-click=set-temp]').on('click', () => {
  console.log('SET TEMP')

  // Gets value from text input field
  let val = $('input').val();
  console.log(val)

  setTemp(val);

});

// ReactDOM.render(
//   <h1>Hello, world!<h1 />,
//   document.getElementById('root')
// );