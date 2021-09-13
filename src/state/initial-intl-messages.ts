/* eslint-disable max-len */

const INITIAL_INTL_MESSAGES = {
    'task.test.title': 'Run unit test on push',
    'task.test.text':
        'The task is to write in the commands neccessary to automate testing of the code. Each time you push new code to a specific branch, Github actions ought to run all unit tests in the code.',
    'task.env.title': 'Save the environment',
    'task.env.text':
        'Add a enviroment variable to the pipeline script to get this bagde',
    'task.secret.title': 'Mystery man',
    'task.secret.text': 'Add a secret named PASSWORD to achieve this badge',
    'task.lint.title': 'Lints is looking pretty',
    'task.lint.text': 'Yaaay',
    'task.deploy.title': 'Deploy web page',
    'task.deploy.text':
        'Whenever new code is pushed to branch, and the unit tests run green, we wish to deploy the code immediately. Write commands which automatically deploy the new code once pushed to Github and sucessfully passed previously Github actions scripts.',
    'task.clock.title': 'Right on time!',
    'task.clock.text':
        'Successfully configure a timed deploy triggerd by Github Actions',
    'task.docker1.title': 'Docker up & running',
    'task.docker1.text': 'Deploy a docker image to a public docker registry',
    'task.docker2.title': 'Docker ready!',
    'task.docker2.text': 'Deploy a docker image to a public docker registry',
    'task.docker3.title': 'Dar she blows!',
    'task.docker3.text': 'Deploy a docker image to a public docker registry',
    'task.conditional.title': 'If only i could..',
    'task.conditional.text': 'Create conditional steps to achive me',
    'task.hacker.title': 'Fortress',
    'task.hacker.text':
        'Automatically check your site for javascript vunderabilities in CI/CD to achieve this badge. Hint: is-website-vulnerable @ github marketplace'
};

export default INITIAL_INTL_MESSAGES;
