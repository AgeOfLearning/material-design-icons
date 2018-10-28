import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHeadsetMicElement
 * @class IconOutlineHeadsetMicElement
 * @extends {AoflElement}
 */
class IconOutlineHeadsetMicElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHeadsetMicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-headset-mic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHeadsetMicElement.is, IconOutlineHeadsetMicElement);

export default IconOutlineHeadsetMicElement;
