import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHdrOnElement
 * @class IconTwotoneHdrOnElement
 * @extends {AoflElement}
 */
class IconTwotoneHdrOnElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHdrOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-hdr-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHdrOnElement.is, IconTwotoneHdrOnElement);

export default IconTwotoneHdrOnElement;
