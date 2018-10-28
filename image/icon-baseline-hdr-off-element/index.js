import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHdrOffElement
 * @class IconBaselineHdrOffElement
 * @extends {AoflElement}
 */
class IconBaselineHdrOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHdrOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-hdr-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHdrOffElement.is, IconBaselineHdrOffElement);

export default IconBaselineHdrOffElement;
