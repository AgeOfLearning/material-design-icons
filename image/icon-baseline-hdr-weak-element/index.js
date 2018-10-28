import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHdrWeakElement
 * @class IconBaselineHdrWeakElement
 * @extends {AoflElement}
 */
class IconBaselineHdrWeakElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHdrWeakElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-hdr-weak';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHdrWeakElement.is, IconBaselineHdrWeakElement);

export default IconBaselineHdrWeakElement;
