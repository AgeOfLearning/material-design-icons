import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSdCardElement
 * @class IconRoundSdCardElement
 * @extends {AoflElement}
 */
class IconRoundSdCardElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSdCardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-sd-card';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSdCardElement.is, IconRoundSdCardElement);

export default IconRoundSdCardElement;
