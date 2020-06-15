import React from 'react';
import { Button } from 'components/button';

export default { component: Button, title: 'Examples / Button' };

export const WithArgs = (args: any) => <Button {...args} />;
WithArgs.args = { label: 'With args' };
export const Basic = () => <Button label="Click me" />;
