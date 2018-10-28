import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePresentToAllElement
 * @class IconTwotonePresentToAllElement
 * @extends {AoflElement}
 */
class IconTwotonePresentToAllElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePresentToAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-present-to-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePresentToAllElement.is, IconTwotonePresentToAllElement);

export default IconTwotonePresentToAllElement;
