/* eslint-disable max-len */

const INITIAL_INTL_MESSAGES = {
    'task.test.title': 'Better safe than sorry!',
    'task.test.text':
        'Quality assurance is key! Write the neccessary commands to automatically test your code. Each time you push new code to a specific branch, Github actions ought to run all unit tests in the code.',
    'task.env.title': 'Environmentally friendly',
    'task.env.text':
        'Add an enviroment variable to the pipeline script to get this bagde',
    'task.secret.title': 'Mystery man',
    'task.secret.text':
        // eslint-disable-next-line quotes
        "Don't let anyone listen in! Add a secret named PASSWORD to achieve this badge",
    'task.lint.title': 'Lint looks mint',
    'task.lint.text': 'Your code is looking clean and lint free!',
    'task.deploy.title': 'Deploy web page',
    'task.deploy.text':
        'Whenever we push new code to a branch, and all the unit tests pass, we want to deploy the code immediately. Write commands to automatically deploy the new code once pushed to Github and sucessfully passed previously Github actions scripts.',
    'task.clock.title': 'Right on time!',
    'task.clock.text':
        'Timing is everything! Successfully configure a timed deploy triggered by Github Actions',
    'task.docker1.title': 'Access granted!',
    'task.docker1.text': 'Use Secrets to log in to Docker',
    'task.docker2.title': 'Docker ready!',
    'task.docker2.text': 'Attach metadata to your Docker image',
    'task.docker3.title': 'Swoooosh!',
    'task.docker3.text': 'Your Docker image is locked and loaded, push it',
    'task.conditional.title': 'If only i could..',
    'task.conditional.text': 'Create conditional steps to achive me',
    'task.hacker.title': 'Fortress',
    'task.hacker.text':
        'Automatically check your site for javascript vaulnerabilities in CI/CD to achieve this badge. Hint: is-website-vulnerable @ github marketplace',
    'task.status.title': 'Statistics Guru',
    'task.status.text': 'Statistics might be nerdy, but it can also be fun! You have become quite the master of Github Actions and added fun development statistic to your readme documenation.',
    'task.mail.title': 'You got mail!',
    'task.mail.text': 'Automatically send mails from CI/CD to your private account when the workflow fails and/or succeeds.'
};

export default INITIAL_INTL_MESSAGES;
