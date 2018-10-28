import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHeadsetElement
 * @class IconSharpHeadsetElement
 * @extends {AoflElement}
 */
class IconSharpHeadsetElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHeadsetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-headset';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHeadsetElement.is, IconSharpHeadsetElement);

export default IconSharpHeadsetElement;
