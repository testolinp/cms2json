import { html, TemplateResult } from 'lit';
import '../src/cms-json.js';

export default {
  title: 'CmsJson',
  component: 'cms-json',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <cms-json style="--cms-json-background-color: ${backgroundColor}" .header=${header}></cms-json>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
