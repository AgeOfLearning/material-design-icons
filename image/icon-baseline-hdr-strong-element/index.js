import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHdrStrongElement
 * @class IconBaselineHdrStrongElement
 * @extends {AoflElement}
 */
class IconBaselineHdrStrongElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHdrStrongElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-hdr-strong';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHdrStrongElement.is, IconBaselineHdrStrongElement);

export default IconBaselineHdrStrongElement;
