// jQuery(document).ready(function() { // !!! Код запустится после загрузки документа !!!

jQuery(function() { // !!! Более современный аналог !!!

///// *****  В С Е   С Е Л Е К Т О Р Ы  ***** /////
/// *** https://api.jquery.com/category/selectors/ ***///

// Селекторы тега, класса, id: ('h1'), ('.class'), ('id')
// Можно несколько, через ",": ('h1, h2, p')
    $('.first').css({'color':'red'});

// Выводим значение атрибутов data-id и data-name в <h1>
// любые data-(id).data()
    var dataId = $('h1').data('id');
    var dataName = $('h1').data('name');
    /*console.log('<h1> data-id = ' + dataId);
    console.log('<h1> data-name = ' + dataName);*/

// По имени и значению атрибута title или др.
    $('h2[title="test-word"]').css({'color':'green'});

// Значение атрибута attr()
    // console.log($('input[name="name"]').attr('value'));
    
// :contains(), :empty(), :parent(), has()
    $('li:contains("First")').css({'color':'red'});
    $('li:has("span")').css({'color':'green'});

    $('table td').css({'padding':'10px'});
    $('table td:parent').css({'background':'pink'});
    $('table td:empty').css({'background':'green'}).text(':empty');


///// *****  В С Е  С О Б Ы Т И Я  ***** /////
/// *** https://api.jquery.com/category/events/ /// ***

/// *** М Ы Ш Ь *** ///
    /*$('button').click(function() {
        console.log('Button "Click Me" was clicked!');
    });*/

    $('button').on('click', function() { // Рекомендуется такой вариант: работает с динамическим контентом
        console.log('Button "Click Me" was clicked!');
    });
    $('button').on('dblclick', function() {
        console.log('Button "Click Me" was dblClicked!');
    });
    $('button').on('mouseenter', function() {
        console.log('Button "Click Me" mouseEnter!');
    });
    $('button').on('mouseleave', function() {
        console.log('Button "Click Me" was mouseLeave!');
    });

/// *** К Л А В И А Т У Р А *** ///
    $('#target').keypress(function(e) {
        console.log('keypress: \n key: ' + e.key + '\n charCode: ' + e.charCode);
    });
    $('#target').keydown(function(e) {
        console.log('keydown: \n key: ' + e.key);
    });
    $('#target').keyup(function(e) {
        console.log('keyup: \n key: ' + e.key);
    });


///// *****  А Н И М А Ц И Я  ***** /////

    //$('p.anim-hide').hide(500); // исчезает за 0,5 сек

    //$('p.anim-show').css({'display':'none'});
    //$('p.anim-show').show(500); // появляется за 0,5 сек (работает для невидимых)

    $('p.anim-delay').hide(500).delay(1000).show(500).delay(1000).hide(500).delay(1000).show(500); // задержка

    $('div.animate')
        .animate({'width': '50px', 'height': '20px'}, 2000) // Анимация: меняем размер за 2 сек
        .animate({'width': '100px', 'height': '50px'}, 2000) // Анимация: меняем размер за 2 сек
        .fadeOut(2000) // Анимация: исчезает за 2 сек
        .fadeIn(2000); // Анимация: появляется за 2 сек
    

///// *****  Р А З М Е Р Ы  О К Н А  И  С К Р О Л Л  ***** /////

// При изменении размера окна
    $(window).resize(function() { // $(window) - окно браузера
        var width = $(this).width();
        var height = $(this).height();
        // console.log('Window width: ' + width + ' px;\nHeight: ' + height + ' px');
    });

// При скроллинге
    $(window).scroll(function() {
        // console.log('Ну скролл и скролл!');
    });
    

///// *****  Д О Б А В Л Е Н И Е  И  У Д А Л Е Н И Е  К Л А С С О В  ***** /////
    
    $('ul li:last-child').addClass('blue-text');
    
    $('ul li:last-child').hover( function() {
        $(this).removeClass('blue-text');
    });

    $('p').on('click', function() {
        $(this).toggleClass('green-text');
    });
    

///// *****  С О Д Е Р Ж И М О Е :  T E X T  И  H T M L  ***** /////
        
    var first_h1_text = $('h1:first-child').text();
    // console.log(first_h1_text);
    $('h1:first-child').text('Заголовок 1');

    $('h2').html('<span>Заголовок 2</span>');

// Добавление в начало и конец, до и после элементов
    $('ul').append('<li>append</li>');
    $('ul').prepend('<li>prepend</li>');

    $('ul li:last-child').after('<li>after</li>');
    $('ul li:last-child').before('<li>before</li>');

// Очистка и удаление элементов
    $('ul li:first-child').empty();
    $('ul li:nth-child(4)').remove();

// wrap(), unwrap()
    $('h1:first-child').wrap('<div class="blue-bg"></div>');
    $('h1:first-child').wrap('<span></span>');
    $('h1:first-child').unwrap();



//===========================================================//
    ///// ***** С Л А Й Д Е Р ***** /////
//===========================================================//

    $('.slick-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1
    });



});


