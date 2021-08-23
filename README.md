# Github Actions workshop step-by-step guide

## Prerequisites

1. From your personal github account create a new public repository with the name www.your_github_username.github.io. 

2. Choose the last option by clicking `Import code` like shown below, and use the repository url 
https://github.com/acntech/workshop-github-actions.git. Click `Begin import`.

  ![import code picture](https://github.com/acntech/workshop-github-actions/blob/develop/pictures/import_code.png)

Great, now we're ready to start!

## Step 1: The basics 

You can find the pipeline file in `.github/workflows/build-pipeline.yml`

Let us first start with a little introduction to how a pipeline file is set up. The file is written in `YAML` format and stands for *YAML ain’t markup language* (a recursive acronym), which emphasizes that YAML is for data, not documents. Under you can see an example `.yaml`/`.yml` file

```yaml
this is an example yaml file
```
* Explanation of name, on, jobs, runs-on, steps, run

### on

GitHub Actions lets you define a trigger that controls when your workflow runs. Whenever an action matching that trigger happens in your repository, a workflow run will be queued up.

### runs-on

One of the nice things about GitHub Actions is that it doesn't just support running builds on Linux hosts, or in containers. GitHub provides Linux virtual machines - of course - but they also provide virtual machines running Windows and macOS.

The macOS virtual environments are especially important, since even as a developer, you can't run macOS in a virtual machine unless you do it on Apple hardware. So if you're building cross-platform applications, that could limit how you can build and test your own application locally.

To specify the host type, you indicate that with the runs-on parameter for a job. For example, runs-on: macos-latest will run on macOS, and runs-on: windows-latest will - no surprise - run on Windows. 

### run

But what's actually installed on these environments? It turns out that there's a lot installed.

The team tries to keep our runners up-to-date with a number of different platforms. So you'll find a number of different versions of Python, Ruby, .NET Core and more. But - just by virtue of the wide variety of development tools out there - they can't have absolutely everything installed.

Sometimes you'll need to install it yourself. And since you get a whole virtual machine to yourself, for each job execution, you can install whatever you want on them.

## Step 2: Let's deploy our code 🚀

```yaml
Here, the pipeline file will only include a deploy job. There is no linting nor testing.
```

Task: Fill in the necessary information in order to deploy your code every time you push to a specified branch. Push your changes to see the results at www.your_github_username.github.io.

## Step 3: Oh no! Something is wrong with our code 🐛

We now want to add the step of automatically testing our code before we build it. When setting up mulitple jobs in a workflow, the jobs run independently of each other, in parallel. Usually, that's ideal. Your jobs will run as soon as machines are available to execute them.

But sometimes you want to be able to set up jobs that depend on other jobs. For example, you might have some services that you want to test against. But to save money, you only want to run those services when you're actually running tests. So you might want to have a job that starts your services, a job that runs your tests, and then a job that stops your services.

To specify dependencies between jobs, you can use the `needs` keyword to indicate what jobs rely on the completion of other jobs.

```yaml
Copy paste an unfinished code snippet that includes a test job.
```

Task: Fill in the necessary information in order to automatically run all tests before deploying. 

Task: One test is failing! We need to fix it in order to be able to deploy. 

Question: What are the benefits of adding this step to our pipeline?

Ever heard about linting before? Linting it what makes your code pretty readable, less dependent on who wrote the code, and generally prettier to look at.

```yaml
Copy paste an unfinished code snippet that includes a linting job.
```
  
Task: Fill in the necessary information in order to automatically run linting on your code before test and deploy.
  
Task: The linting is failing! We need to fix this in order to be able to deploy.
  
## Step 4: Ok, so now we have added some must have steps to our pipeline. Let's explore! 🍀

You're now able to automatically check linting and testing before deploying your code. And you didn't have to do anything except push your code!

Now, let's see what fun we can do! And there are sooo many options. For instance,

### Sending an email notification every time a job fails and/or succeeds. 📫
  
### Set a timing for when a deploy should be set. ⏰
  
### Adding secrets 

You'll often need things like tokens or passwords in deployment scenarios - GitHub Actions supports savings these as secrets in your repository.

To set up a secret, go to your Repository Settings page, then select Secrets. Your secret's name will be used in your workflow to reference the data, and you can place the secret itself in the value.
  
To use that secret, you can reference it using the secrets context within your workflow. If you had a secret named `SECRET_KEY`, you could reference that as `${{secret.SECRET_KEY}}`.
