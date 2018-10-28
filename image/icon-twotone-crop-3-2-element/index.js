import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCrop32Element
 * @class IconTwotoneCrop32Element
 * @extends {AoflElement}
 */
class IconTwotoneCrop32Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCrop32Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-crop-3-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCrop32Element.is, IconTwotoneCrop32Element);

export default IconTwotoneCrop32Element;
