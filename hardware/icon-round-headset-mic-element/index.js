import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHeadsetMicElement
 * @class IconRoundHeadsetMicElement
 * @extends {AoflElement}
 */
class IconRoundHeadsetMicElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHeadsetMicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-headset-mic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHeadsetMicElement.is, IconRoundHeadsetMicElement);

export default IconRoundHeadsetMicElement;
