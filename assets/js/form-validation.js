// 表单验证逻辑
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form[needs-validation]');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                
                // 显示验证错误
                const invalidFields = form.querySelectorAll(':invalid');
                invalidFields.forEach(field => {
                    const errorMessage = field.validationMessage;
                    const errorElement = document.createElement('div');
                    errorElement.className = 'error-message';
                    errorElement.textContent = errorMessage;
                    errorElement.style.color = 'red';
                    errorElement.style.fontSize = '0.8rem';
                    errorElement.style.marginTop = '0.25rem';
                    
                    field.parentNode.appendChild(errorElement);
                    
                    // 输入时移除错误信息
                    field.addEventListener('input', function() {
                        if (field.validity.valid) {
                            if (field.parentNode.querySelector('.error-message')) {
                                field.parentNode.removeChild(
                                    field.parentNode.querySelector('.error-message')
                                );
                            }
                        }
                    });
                });
            }
            
            form.classList.add('was-validated');
        }, false);
    });
});