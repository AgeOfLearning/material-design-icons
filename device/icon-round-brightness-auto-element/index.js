import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBrightnessAutoElement
 * @class IconRoundBrightnessAutoElement
 * @extends {AoflElement}
 */
class IconRoundBrightnessAutoElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBrightnessAutoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-brightness-auto';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBrightnessAutoElement.is, IconRoundBrightnessAutoElement);

export default IconRoundBrightnessAutoElement;
