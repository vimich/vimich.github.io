export interface IValidator {
    deploy: boolean;
    health: boolean;
    lint: boolean;
    secret: boolean;
    test: boolean;
}

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
        secret: !!process.env.PASSWORD,
        test: validateText(buildText, 'run: npm test')
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
