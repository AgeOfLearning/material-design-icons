import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHdrOnElement
 * @class IconBaselineHdrOnElement
 * @extends {AoflElement}
 */
class IconBaselineHdrOnElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHdrOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-hdr-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHdrOnElement.is, IconBaselineHdrOnElement);

export default IconBaselineHdrOnElement;
