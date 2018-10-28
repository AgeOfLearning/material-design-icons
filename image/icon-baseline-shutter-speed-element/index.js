import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineShutterSpeedElement
 * @class IconBaselineShutterSpeedElement
 * @extends {AoflElement}
 */
class IconBaselineShutterSpeedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineShutterSpeedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-shutter-speed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineShutterSpeedElement.is, IconBaselineShutterSpeedElement);

export default IconBaselineShutterSpeedElement;
