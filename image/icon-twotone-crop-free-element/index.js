import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCropFreeElement
 * @class IconTwotoneCropFreeElement
 * @extends {AoflElement}
 */
class IconTwotoneCropFreeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCropFreeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-crop-free';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCropFreeElement.is, IconTwotoneCropFreeElement);

export default IconTwotoneCropFreeElement;
