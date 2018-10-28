import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFilterHdrElement
 * @class IconOutlineFilterHdrElement
 * @extends {AoflElement}
 */
class IconOutlineFilterHdrElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFilterHdrElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-filter-hdr';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFilterHdrElement.is, IconOutlineFilterHdrElement);

export default IconOutlineFilterHdrElement;
