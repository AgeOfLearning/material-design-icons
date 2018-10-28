import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFilterHdrElement
 * @class IconBaselineFilterHdrElement
 * @extends {AoflElement}
 */
class IconBaselineFilterHdrElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFilterHdrElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-filter-hdr';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFilterHdrElement.is, IconBaselineFilterHdrElement);

export default IconBaselineFilterHdrElement;
