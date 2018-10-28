import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFilterTiltShiftElement
 * @class IconRoundFilterTiltShiftElement
 * @extends {AoflElement}
 */
class IconRoundFilterTiltShiftElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFilterTiltShiftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-filter-tilt-shift';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFilterTiltShiftElement.is, IconRoundFilterTiltShiftElement);

export default IconRoundFilterTiltShiftElement;
