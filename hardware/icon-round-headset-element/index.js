import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHeadsetElement
 * @class IconRoundHeadsetElement
 * @extends {AoflElement}
 */
class IconRoundHeadsetElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHeadsetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-headset';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHeadsetElement.is, IconRoundHeadsetElement);

export default IconRoundHeadsetElement;
