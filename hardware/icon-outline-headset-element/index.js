import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHeadsetElement
 * @class IconOutlineHeadsetElement
 * @extends {AoflElement}
 */
class IconOutlineHeadsetElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHeadsetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-headset';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHeadsetElement.is, IconOutlineHeadsetElement);

export default IconOutlineHeadsetElement;
