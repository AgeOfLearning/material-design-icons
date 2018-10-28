import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLeakRemoveElement
 * @class IconTwotoneLeakRemoveElement
 * @extends {AoflElement}
 */
class IconTwotoneLeakRemoveElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLeakRemoveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-leak-remove';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLeakRemoveElement.is, IconTwotoneLeakRemoveElement);

export default IconTwotoneLeakRemoveElement;
