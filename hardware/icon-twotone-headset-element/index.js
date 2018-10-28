import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHeadsetElement
 * @class IconTwotoneHeadsetElement
 * @extends {AoflElement}
 */
class IconTwotoneHeadsetElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHeadsetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-headset';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHeadsetElement.is, IconTwotoneHeadsetElement);

export default IconTwotoneHeadsetElement;
