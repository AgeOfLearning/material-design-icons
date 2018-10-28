import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHdrWeakElement
 * @class IconOutlineHdrWeakElement
 * @extends {AoflElement}
 */
class IconOutlineHdrWeakElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHdrWeakElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-hdr-weak';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHdrWeakElement.is, IconOutlineHdrWeakElement);

export default IconOutlineHdrWeakElement;
