import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFlareElement
 * @class IconBaselineFlareElement
 * @extends {AoflElement}
 */
class IconBaselineFlareElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFlareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-flare';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFlareElement.is, IconBaselineFlareElement);

export default IconBaselineFlareElement;
