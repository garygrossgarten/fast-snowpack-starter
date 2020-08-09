import {
  FASTElement,
  customElement,
  html,
  attr,
  css,
} from '@microsoft/fast-element';

const template = html<NameTag>` Hello ${(x) => x.name} `;

const styles = css`
  :host {
    display: flex;
    color: green;
    font-size: 2rem;
  }
`;

@customElement({
  name: 'hello-world',
  template,
  styles,
})
export class NameTag extends FASTElement {
  @attr name: string = 'World';

  nameChanged(prev: string, next: string) {
    console.log('name changed from ', prev, 'to', next);
  }
}
