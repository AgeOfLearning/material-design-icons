import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFilterTiltShiftElement
 * @class IconOutlineFilterTiltShiftElement
 * @extends {AoflElement}
 */
class IconOutlineFilterTiltShiftElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFilterTiltShiftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-filter-tilt-shift';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFilterTiltShiftElement.is, IconOutlineFilterTiltShiftElement);

export default IconOutlineFilterTiltShiftElement;
