import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLeakAddElement
 * @class IconTwotoneLeakAddElement
 * @extends {AoflElement}
 */
class IconTwotoneLeakAddElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLeakAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-leak-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLeakAddElement.is, IconTwotoneLeakAddElement);

export default IconTwotoneLeakAddElement;
