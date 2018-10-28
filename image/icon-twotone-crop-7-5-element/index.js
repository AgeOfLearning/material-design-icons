import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCrop75Element
 * @class IconTwotoneCrop75Element
 * @extends {AoflElement}
 */
class IconTwotoneCrop75Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCrop75Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-crop-7-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCrop75Element.is, IconTwotoneCrop75Element);

export default IconTwotoneCrop75Element;
