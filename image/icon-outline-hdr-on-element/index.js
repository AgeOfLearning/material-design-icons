import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHdrOnElement
 * @class IconOutlineHdrOnElement
 * @extends {AoflElement}
 */
class IconOutlineHdrOnElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHdrOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-hdr-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHdrOnElement.is, IconOutlineHdrOnElement);

export default IconOutlineHdrOnElement;
