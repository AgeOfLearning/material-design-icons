import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFormatAlignLeftElement
 * @class IconTwotoneFormatAlignLeftElement
 * @extends {AoflElement}
 */
class IconTwotoneFormatAlignLeftElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFormatAlignLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-format-align-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFormatAlignLeftElement.is, IconTwotoneFormatAlignLeftElement);

export default IconTwotoneFormatAlignLeftElement;
