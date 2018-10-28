import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFormatClearElement
 * @class IconTwotoneFormatClearElement
 * @extends {AoflElement}
 */
class IconTwotoneFormatClearElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFormatClearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-format-clear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFormatClearElement.is, IconTwotoneFormatClearElement);

export default IconTwotoneFormatClearElement;
