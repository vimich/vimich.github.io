/* eslint-disable max-len */

const INITIAL_INTL_MESSAGES = {
    'task.test.title': 'Run unit test on push',
    'task.test.text':
        'The task is to write in the commands neccessary to automate testing of the code. Each time you push new code to a specific branch, Github actions ought to run all unit tests in the code.',
    'task.health.title': 'Schedule health check',
    'task.health.text':
        'Your next task is to schedule a health check of the web page every 3rd hour. Health checks are essential to monitor web sites, and are handy to have checked periodically.',
    'task.secret.title': 'You added a Secret',
    'task.secret.text': 'Good boy',
    'task.lint.title': 'Lints is looking pretty',
    'task.lint.text': 'Yaaay',
    'task.deploy.title': 'Deploy web page',
    'task.deploy.text':
        'Whenever new code is pushed to branch, and the unit tests run green, we wish to deploy the code immediately. Write commands which automatically deploy the new code once pushed to Github and sucessfully passed previously Github actions scripts.'
};

export default INITIAL_INTL_MESSAGES;
