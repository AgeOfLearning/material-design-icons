import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePresentToAllElement
 * @class IconOutlinePresentToAllElement
 * @extends {AoflElement}
 */
class IconOutlinePresentToAllElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePresentToAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-present-to-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePresentToAllElement.is, IconOutlinePresentToAllElement);

export default IconOutlinePresentToAllElement;
