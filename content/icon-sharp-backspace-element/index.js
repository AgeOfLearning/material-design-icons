import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBackspaceElement
 * @class IconSharpBackspaceElement
 * @extends {AoflElement}
 */
class IconSharpBackspaceElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBackspaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-backspace';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBackspaceElement.is, IconSharpBackspaceElement);

export default IconSharpBackspaceElement;
