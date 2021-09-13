import * as _ from 'lodash';
import { taskpt } from '../constants/taskpt';

export interface IValidator {
    deploy: boolean;
    env: boolean;
    lint: boolean;
    secret: boolean;
    test: boolean;
    timedDeploy: boolean;
    docker1: boolean;
    docker2: boolean;
    docker3: boolean;
    hacker: boolean;
    conditional: boolean;
    stats: boolean;
    mail: boolean;
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
        env: validateText(buildText, 'env:'),
        lint:
            validateText(buildText, 'run: npm run lint:ts') &&
            validateText(buildText, 'run: npm run lint:css'),
        secret: validateText(buildText, 'secret.PASSWORD'),
        test: validateText(buildText, 'run: npm test'),
        timedDeploy:
            validateText(buildText, 'schedule:') &&
            validateText(buildText, '- cron:'),
        docker1: validateText(buildText, 'docker/login-action'),
        docker2: validateText(buildText, 'docker/metadata-action'),
        docker3: validateText(buildText, 'docker/build-push-action'),
        hacker:
            validateText(buildText, 'lirantal/is-website-vulnerable') &&
            validateText(buildText, '.github.io'),
        conditional: validateText(buildText, 'if: '),
        mail: validateText(buildText, 'dawidd6/action-send-mail'),
        stats: validateText(buildText, 'anmol098/waka-readme-stats')
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
