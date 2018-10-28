import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFilterHdrElement
 * @class IconSharpFilterHdrElement
 * @extends {AoflElement}
 */
class IconSharpFilterHdrElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFilterHdrElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-filter-hdr';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFilterHdrElement.is, IconSharpFilterHdrElement);

export default IconSharpFilterHdrElement;
