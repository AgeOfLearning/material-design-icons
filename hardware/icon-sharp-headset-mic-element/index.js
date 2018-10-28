import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHeadsetMicElement
 * @class IconSharpHeadsetMicElement
 * @extends {AoflElement}
 */
class IconSharpHeadsetMicElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHeadsetMicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-headset-mic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHeadsetMicElement.is, IconSharpHeadsetMicElement);

export default IconSharpHeadsetMicElement;
