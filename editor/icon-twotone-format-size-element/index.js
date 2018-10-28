import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFormatSizeElement
 * @class IconTwotoneFormatSizeElement
 * @extends {AoflElement}
 */
class IconTwotoneFormatSizeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFormatSizeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-format-size';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFormatSizeElement.is, IconTwotoneFormatSizeElement);

export default IconTwotoneFormatSizeElement;
