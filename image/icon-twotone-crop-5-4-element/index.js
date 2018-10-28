import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCrop54Element
 * @class IconTwotoneCrop54Element
 * @extends {AoflElement}
 */
class IconTwotoneCrop54Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCrop54Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-crop-5-4';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCrop54Element.is, IconTwotoneCrop54Element);

export default IconTwotoneCrop54Element;
