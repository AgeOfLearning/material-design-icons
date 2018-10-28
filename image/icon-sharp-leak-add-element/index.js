import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLeakAddElement
 * @class IconSharpLeakAddElement
 * @extends {AoflElement}
 */
class IconSharpLeakAddElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLeakAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-leak-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLeakAddElement.is, IconSharpLeakAddElement);

export default IconSharpLeakAddElement;
