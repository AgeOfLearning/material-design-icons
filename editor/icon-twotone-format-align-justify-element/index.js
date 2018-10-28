import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFormatAlignJustifyElement
 * @class IconTwotoneFormatAlignJustifyElement
 * @extends {AoflElement}
 */
class IconTwotoneFormatAlignJustifyElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFormatAlignJustifyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-format-align-justify';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFormatAlignJustifyElement.is, IconTwotoneFormatAlignJustifyElement);

export default IconTwotoneFormatAlignJustifyElement;
