import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFilterTiltShiftElement
 * @class IconBaselineFilterTiltShiftElement
 * @extends {AoflElement}
 */
class IconBaselineFilterTiltShiftElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFilterTiltShiftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-filter-tilt-shift';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFilterTiltShiftElement.is, IconBaselineFilterTiltShiftElement);

export default IconBaselineFilterTiltShiftElement;
