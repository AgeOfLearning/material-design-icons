import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFilterTiltShiftElement
 * @class IconTwotoneFilterTiltShiftElement
 * @extends {AoflElement}
 */
class IconTwotoneFilterTiltShiftElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFilterTiltShiftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-filter-tilt-shift';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFilterTiltShiftElement.is, IconTwotoneFilterTiltShiftElement);

export default IconTwotoneFilterTiltShiftElement;
