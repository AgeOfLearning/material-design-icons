import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineShutterSpeedElement
 * @class IconOutlineShutterSpeedElement
 * @extends {AoflElement}
 */
class IconOutlineShutterSpeedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineShutterSpeedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-shutter-speed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineShutterSpeedElement.is, IconOutlineShutterSpeedElement);

export default IconOutlineShutterSpeedElement;
