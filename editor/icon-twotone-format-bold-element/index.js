import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFormatBoldElement
 * @class IconTwotoneFormatBoldElement
 * @extends {AoflElement}
 */
class IconTwotoneFormatBoldElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFormatBoldElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-format-bold';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFormatBoldElement.is, IconTwotoneFormatBoldElement);

export default IconTwotoneFormatBoldElement;
