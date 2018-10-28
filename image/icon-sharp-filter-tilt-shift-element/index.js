import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFilterTiltShiftElement
 * @class IconSharpFilterTiltShiftElement
 * @extends {AoflElement}
 */
class IconSharpFilterTiltShiftElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFilterTiltShiftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-filter-tilt-shift';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFilterTiltShiftElement.is, IconSharpFilterTiltShiftElement);

export default IconSharpFilterTiltShiftElement;
