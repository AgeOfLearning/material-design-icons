import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneShutterSpeedElement
 * @class IconTwotoneShutterSpeedElement
 * @extends {AoflElement}
 */
class IconTwotoneShutterSpeedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneShutterSpeedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-shutter-speed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneShutterSpeedElement.is, IconTwotoneShutterSpeedElement);

export default IconTwotoneShutterSpeedElement;
