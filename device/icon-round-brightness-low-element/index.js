import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBrightnessLowElement
 * @class IconRoundBrightnessLowElement
 * @extends {AoflElement}
 */
class IconRoundBrightnessLowElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBrightnessLowElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-brightness-low';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBrightnessLowElement.is, IconRoundBrightnessLowElement);

export default IconRoundBrightnessLowElement;
