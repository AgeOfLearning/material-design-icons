import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTextFormatElement
 * @class IconTwotoneTextFormatElement
 * @extends {AoflElement}
 */
class IconTwotoneTextFormatElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTextFormatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-text-format';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTextFormatElement.is, IconTwotoneTextFormatElement);

export default IconTwotoneTextFormatElement;
