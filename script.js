document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('applyForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission for validation
        
        // Check form validity
        if (form.checkValidity()) {
            // Show a popup alert when form is valid
            alert("Thanks for reaching out! We’ll get back to you soon");

            // Reset the form after successful submission
            form.reset();

            // Reset the validation states
            form.classList.remove('was-validated');
        } else {
            // Add Bootstrap validation style if form is not valid
            form.classList.add('was-validated');
        }

        event.stopPropagation();
    });

    // Add dynamic validation for phone number
    const phoneInputField = document.querySelector("#phoneNumber");
    const phoneInput = window.intlTelInput(phoneInputField, {
        initialCountry: "in", // Set default country to India (IN)
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
    });

    phoneInputField.addEventListener('blur', function () {
        if (!phoneInput.isValidNumber()) {
            phoneInputField.setCustomValidity("Invalid phone number");
            phoneInputField.classList.add("is-invalid");
        } else {
            phoneInputField.setCustomValidity("");
            phoneInputField.classList.remove("is-invalid");
        }
    });

    // Parent-Child dropdown functionality
    const parentCategory = document.getElementById('parentCategory');
    const childCategory = document.getElementById('childCategory');

    const courses = {
        azure: ["Azure Fundamentals", "Azure DevOps"],
        office365: ["Office 365 Essentials", "Office 365 Administration"],
        mcsa: ["MCSA Windows 10", "MCSA Windows Server 2019"],
        ccna: ["CCNA Routing & Switching", "CCNA Security"],
        hardware: ["Basic Computer Skills", "PC Hardware Troubleshooting"],
        devops: ["DevOps Fundamentals", "Advanced DevOps"],
        data: ["Data Science", "Data Analytics"],
        "excel-powerbi": ["Excel for Beginners", "Power BI Advanced"]
    };

    parentCategory.addEventListener('change', function () {
        const selectedCategory = parentCategory.value;
        const selectedCourses = courses[selectedCategory] || [];
        childCategory.innerHTML = '<option value="" disabled selected>Select a course</option>';

        selectedCourses.forEach(course => {
            const option = document.createElement('option');
            option.value = course;
            option.textContent = course;
            childCategory.appendChild(option);
        });

        childCategory.disabled = false; // Enable the child dropdown once a parent option is selected
    });
});
// Counter Animation for Statistics
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200; // Adjust speed here
        if(count < target) {
            counter.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(updateCounter, 30);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});

// Slick Slider Initialization
$(document).ready(function () {
    $(".customer-logos").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
});


document.querySelectorAll('.snti-feature').forEach(feature => {
    feature.addEventListener('mouseenter', () => {
        const icon = feature.querySelector('.icon i');
        icon.style.transform = 'rotate(360deg)';
        icon.style.transition = 'transform 0.5s ease';
    });

    feature.addEventListener('mouseleave', () => {
        const icon = feature.querySelector('.icon i');
        icon.style.transform = 'rotate(0deg)';
    });
});


$(document).ready(function () {
    // Function to animate counters
    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate(
            {
                countNum: countTo
            },
            {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            }
        );
    });
});
// Custom JavaScript functionality for further interaction
document.addEventListener('DOMContentLoaded', function() {
    // You can add some interactivity here if required
});

