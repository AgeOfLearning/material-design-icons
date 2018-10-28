import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineExposureElement
 * @class IconBaselineExposureElement
 * @extends {AoflElement}
 */
class IconBaselineExposureElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineExposureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-exposure';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineExposureElement.is, IconBaselineExposureElement);

export default IconBaselineExposureElement;
