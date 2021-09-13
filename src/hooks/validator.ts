import * as _ from 'lodash';
import { taskpt } from '../constants/taskpt';

export interface IValidator {
    deploy: boolean;
    health: boolean;
    lint: boolean;
    secret: boolean;
    test: boolean;
    timedDeploy: boolean;
    docker: boolean;
}

export const calcTp = (validated: IValidator): number => {
    let pt = 0;
    _.forEach(validated, (v, k) => {
        if (v) {
            pt = pt + taskpt[k];
        }
    });
    return pt;
};

export const validateCDCI = async (): Promise<IValidator> => {
    const buildText = await getPipelineAsText();
    return {
        deploy: validateText(
            buildText,
            'uses: JamesIves/github-pages-deploy-action@4.1.4'
        ),
        health: false,
        lint:
            validateText(buildText, 'run: npm run lint:ts') &&
            validateText(buildText, 'run: npm run lint:css'),
        secret: validateText(buildText, 'SECRET: ${{ secret.PASSWORD }}'),
        test: validateText(buildText, 'run: npm test'),
        timedDeploy:
            validateText(buildText, 'schedule:') &&
            validateText(buildText, '- cron:'),
        docker:
            validateText(buildText, 'docker/build-push-action') &&
            validateText(buildText, 'docker/login-action')
    };
};

const validateText = (text: string, testText: string): boolean => {
    return text.indexOf(testText) !== -1;
};

const getPipelineAsText = async (): Promise<string> => {
    try {
        const resp = await fetch('/build-pipeline.yml');
        return await resp.text();
    } catch {
        return 'false';
    }
};
