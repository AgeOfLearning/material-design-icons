import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHdrOffElement
 * @class IconTwotoneHdrOffElement
 * @extends {AoflElement}
 */
class IconTwotoneHdrOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHdrOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-hdr-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHdrOffElement.is, IconTwotoneHdrOffElement);

export default IconTwotoneHdrOffElement;
