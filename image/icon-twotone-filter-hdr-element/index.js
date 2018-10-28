import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFilterHdrElement
 * @class IconTwotoneFilterHdrElement
 * @extends {AoflElement}
 */
class IconTwotoneFilterHdrElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFilterHdrElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-filter-hdr';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFilterHdrElement.is, IconTwotoneFilterHdrElement);

export default IconTwotoneFilterHdrElement;
