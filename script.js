// faq blocks switcher
const faqBlocks = document.querySelectorAll('.faq_blocks');
console.log(faqBlocks);
faqBlocks.forEach((element) => {
    element.addEventListener("click", (event) => {
        event.currentTarget.classList.toggle('active');
    })
});

// vacancies switcher
const jobs = [
    {
        jobTitle: 'Помощник Бухгалтера',
        jobSalary: '30 000 - 350 000 руб',
    },
    {
        jobTitle: 'Специалист по документооборту',
        jobSalary: '40 000 руб',
    },
    {
        jobTitle: 'Бухгалтер на первичную документацию',
        jobSalary: '45 000 руб',
    },
    {
        jobTitle: 'Младший Бухгалтер',
        jobSalary: '50 000 руб',
    },
    {
        jobTitle: 'Экономист-аналитик',
        jobSalary: '30 000 - 35 000 руб',
    },
    {
        jobTitle: 'Ведущий экономист',
        jobSalary: '45 000 руб',
    },
    {
        jobTitle: 'Специалист по исследованиям рынка',
        jobSalary: '80 000 - 100 000 руб',
    },
    {
        jobTitle: 'Руководитель планово-экономического отдела',
        jobSalary: '150 000 - 200 000 руб',
    },
    {
        jobTitle: 'IT-аудит',
        jobSalary: '130 000 руб',
    },
    {
        jobTitle: 'Цифровой финансист',
        jobSalary: '40 000 руб',
    },
    {
        jobTitle: 'Цифровой аналитик',
        jobSalary: '150 000 - 200 000 руб',
    },
    {
        jobTitle: 'Финансовый директор',
        jobSalary: '300 000 руб',
    },
    {
        jobTitle: 'Доцент кафедры',
        jobSalary: '80 000 руб',
    },
    {
        jobTitle: 'Преподаватель экономических наук в вузе',
        jobSalary: '100 000 - 150 000 руб',
    },
];

function jobCategoryClickHandler(category) {
    const jobsMarkup = jobs.map((job) => {
        return `
            <div class="salary_block">
                <p class="title">${job.jobTitle}</p> 
                <span class="salary">${job.jobSalary}</span>
            </div>
        `;
    });

    let finalMarkup = '';
    const itemsInColumn = Math.ceil(jobsMarkup.length / 4);
    let count = 0;
    jobsMarkup.forEach((job) => {
        if (count === 0) {
            finalMarkup += '<div class="column">';
        }
        finalMarkup += job;
        count += 1;
        if (count === itemsInColumn) {
            finalMarkup += '</div>';
            count = 0;
        }
    });
    if (count !== 0) {
        finalMarkup += '</div>';
    }

    const vacanciesContainer = document.querySelector('.vac_lists');
    vacanciesContainer.innerHTML = finalMarkup;
}

document.getElementById('college').addEventListener('click',(event) => {
    document.querySelector('.clicker_button.active').classList.remove('active');
    event.currentTarget.classList.add('active');

    jobCategoryClickHandler('college');
});
document.getElementById('bakalavriat').addEventListener('click',(event) => {
    document.querySelector('.clicker_button.active').classList.remove('active');
    event.currentTarget.classList.add('active');

    jobCategoryClickHandler('bakalavriat');
});
document.getElementById('magistratura').addEventListener('click',(event) => {
    document.querySelector('.clicker_button.active').classList.remove('active');
    event.currentTarget.classList.add('active');

    jobCategoryClickHandler('magistratura');
});
document.getElementById('aspirantura').addEventListener('click',(event) => {
    document.querySelector('.clicker_button.active').classList.remove('active');
    event.currentTarget.classList.add('active');

    jobCategoryClickHandler('aspirantura');
});


