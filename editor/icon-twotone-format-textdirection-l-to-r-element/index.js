import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFormatTextdirectionLToRElement
 * @class IconTwotoneFormatTextdirectionLToRElement
 * @extends {AoflElement}
 */
class IconTwotoneFormatTextdirectionLToRElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFormatTextdirectionLToRElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-format-textdirection-l-to-r';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFormatTextdirectionLToRElement.is, IconTwotoneFormatTextdirectionLToRElement);

export default IconTwotoneFormatTextdirectionLToRElement;
