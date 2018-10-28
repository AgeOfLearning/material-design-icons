import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHdrWeakElement
 * @class IconTwotoneHdrWeakElement
 * @extends {AoflElement}
 */
class IconTwotoneHdrWeakElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHdrWeakElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-hdr-weak';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHdrWeakElement.is, IconTwotoneHdrWeakElement);

export default IconTwotoneHdrWeakElement;
