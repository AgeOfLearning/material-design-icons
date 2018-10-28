import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLeakAddElement
 * @class IconOutlineLeakAddElement
 * @extends {AoflElement}
 */
class IconOutlineLeakAddElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLeakAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-leak-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLeakAddElement.is, IconOutlineLeakAddElement);

export default IconOutlineLeakAddElement;
