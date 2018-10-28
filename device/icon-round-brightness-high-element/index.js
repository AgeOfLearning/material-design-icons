import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBrightnessHighElement
 * @class IconRoundBrightnessHighElement
 * @extends {AoflElement}
 */
class IconRoundBrightnessHighElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBrightnessHighElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-brightness-high';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBrightnessHighElement.is, IconRoundBrightnessHighElement);

export default IconRoundBrightnessHighElement;
