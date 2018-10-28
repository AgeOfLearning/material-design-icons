import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHeadsetMicElement
 * @class IconTwotoneHeadsetMicElement
 * @extends {AoflElement}
 */
class IconTwotoneHeadsetMicElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHeadsetMicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-headset-mic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHeadsetMicElement.is, IconTwotoneHeadsetMicElement);

export default IconTwotoneHeadsetMicElement;
