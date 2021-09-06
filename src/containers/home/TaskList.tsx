import * as React from 'react';

import { Task } from '../../components';
import { IValidator, validateCDCI } from '../../hooks/validator';

import DeployImg from '../../assets/images/deployment.svg';
import DeployBlackImg from '../../assets/images/deployment_black.svg';
import HealthCheckImg from '../../assets/images/health_check.svg';
import HealthCheckBlackImg from '../../assets/images/health_check_black.svg';
import LintImg from '../../assets/images/lint.svg';
import LintBlackImg from '../../assets/images/lint_black.svg';
import SecretImg from '../../assets/images/secret.svg';
import SecretBlackImg from '../../assets/images/secret_black.svg';
import TestImg from '../../assets/images/test.svg';
import TestBlackImg from '../../assets/images/test_black.svg';

const TaskList: React.FC = () => {
    const [validated, setValidated] = React.useState<IValidator>(null);

    React.useEffect(() => {
        void validateCDCI().then(v => setValidated(v));
    }, []);

    return (
        <>
            <Task
                completed={validated?.deploy}
                img={DeployImg}
                imgPlaceholder={DeployBlackImg}
                intlPrefix="task.deploy"
                isBadgeFirst={true}
            />
            <Task
                completed={validated?.health}
                img={HealthCheckImg}
                imgPlaceholder={HealthCheckBlackImg}
                intlPrefix="task.health"
            />
            <Task
                completed={validated?.lint}
                img={LintImg}
                imgPlaceholder={LintBlackImg}
                intlPrefix="task.lint"
                isBadgeFirst={true}
            />
            <Task
                completed={validated?.secret}
                img={SecretImg}
                imgPlaceholder={SecretBlackImg}
                intlPrefix="task.secret"
            />
            <Task
                completed={validated?.test}
                img={TestImg}
                imgPlaceholder={TestBlackImg}
                intlPrefix="task.test"
                isBadgeFirst={true}
            />
        </>
    );
};

export { TaskList };
