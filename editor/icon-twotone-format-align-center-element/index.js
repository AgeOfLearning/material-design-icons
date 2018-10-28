import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFormatAlignCenterElement
 * @class IconTwotoneFormatAlignCenterElement
 * @extends {AoflElement}
 */
class IconTwotoneFormatAlignCenterElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFormatAlignCenterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-format-align-center';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFormatAlignCenterElement.is, IconTwotoneFormatAlignCenterElement);

export default IconTwotoneFormatAlignCenterElement;
