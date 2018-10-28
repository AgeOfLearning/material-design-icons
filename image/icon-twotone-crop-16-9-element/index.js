import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCrop169Element
 * @class IconTwotoneCrop169Element
 * @extends {AoflElement}
 */
class IconTwotoneCrop169Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCrop169Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-crop-16-9';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCrop169Element.is, IconTwotoneCrop169Element);

export default IconTwotoneCrop169Element;
