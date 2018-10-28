import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHdrOffElement
 * @class IconOutlineHdrOffElement
 * @extends {AoflElement}
 */
class IconOutlineHdrOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHdrOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-hdr-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHdrOffElement.is, IconOutlineHdrOffElement);

export default IconOutlineHdrOffElement;
