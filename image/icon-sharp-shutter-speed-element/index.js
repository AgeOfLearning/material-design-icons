import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpShutterSpeedElement
 * @class IconSharpShutterSpeedElement
 * @extends {AoflElement}
 */
class IconSharpShutterSpeedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpShutterSpeedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-shutter-speed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpShutterSpeedElement.is, IconSharpShutterSpeedElement);

export default IconSharpShutterSpeedElement;
