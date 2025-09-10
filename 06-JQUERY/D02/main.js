 $(document).ready(function() {
            // Task 1: Get & Set Content
            $('#get-text-btn').click(function() {
                alert('Text content: ' + $('#set-task').text());
            });
            
            $('#get-html-btn').click(function() {
                alert('HTML content: ' + $('#set-task').html());
            });
            
            $('#set-text-btn').click(function() {
                $('#set-task').text('<strong>Text Setter</strong>');
            });
            
            $('#set-html-btn').click(function() {
                $('#set-task').html('<strong>Html Setter</strong>');
            });
     
            
            // Task 2: Add New Element & Content
            $('#before-btn').click(function() {
                $('#add-task').before('<p class="new-element">Element added before</p>');
            });
            
            $('#prepend-btn').click(function() {
                $('#add-task').prepend('<p class="new-element">Prepended element</p>');
            });
    
            $('#append-btn').click(function() {
                $('#add-task').append('<p class="new-element">Appended element</p>');
            });
            
            $('#after-btn').click(function() {
                $('#add-task').after('<p class="new-element">Element added after</p>');
            });
            
            // Task 3: Remove Elements
            $('#remove-first-btn').click(function() {
                $('#remove-task li:first').remove();
            });
            
            $('#remove-last-btn').click(function() {
                $('#remove-task li:last').remove();
            });
            
            $('#remove-even-btn').click(function() {
                $('#remove-task li:even').remove();
            });
            
            $('#remove-all-btn').click(function() {
                $('#remove-task').empty();
            });
            
            // Task 4: Add & Toggle Class
            $('#add-class-btn').click(function() {
                $('#class-task').addClass('highlight');
            });
            
            $('#remove-class-btn').click(function() {
                $('#class-task').removeClass('highlight');
            });
            
            $('#toggle-class-btn').click(function() {
                $('#class-task').toggleClass('highlight');
            });
            
            $('#add-multiple-btn').click(function() {
                $('#class-task').addClass('highlight').css('color', 'blue').css('font-size', '18px');
            });
            
            // Task 5: Select All Element Ancestors
            $('#highlight-ancestors-btn').click(function() {
                $('#target-element').parents().css('border', '2px solid red');
            });
            
            $('#reset-ancestors-btn').click(function() {
                $('#target-element').parents().css('border', '');
            });
            
            $('#target-element').click(function() {
                $(this).parents().css('background', '#ffe6e6');
            });
            
            // Task 6: Traversing Down
            $('#find-all-btn').click(function() {
                $('.descendant-task').find('p').css('color', 'red');
            });
            
            $('#find-nested-btn').click(function() {
                $('.descendant-task').find('div > p').addClass('highlight');
            });
            
            $('#find-first-btn').click(function() {
                $('.descendant-task').find('p:first').css('font-weight', 'bold');
            });
            
            $('#reset-descendants-btn').click(function() {
                $('.descendant-task').find('p').css({
                    'color': '',
                    'font-weight': ''
                }).removeClass('highlight');
            });
        });