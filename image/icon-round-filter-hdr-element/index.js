import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFilterHdrElement
 * @class IconRoundFilterHdrElement
 * @extends {AoflElement}
 */
class IconRoundFilterHdrElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFilterHdrElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-filter-hdr';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFilterHdrElement.is, IconRoundFilterHdrElement);

export default IconRoundFilterHdrElement;
