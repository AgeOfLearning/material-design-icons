import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundShutterSpeedElement
 * @class IconRoundShutterSpeedElement
 * @extends {AoflElement}
 */
class IconRoundShutterSpeedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundShutterSpeedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-shutter-speed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundShutterSpeedElement.is, IconRoundShutterSpeedElement);

export default IconRoundShutterSpeedElement;
