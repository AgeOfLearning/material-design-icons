import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneVolumeDownElement
 * @class IconTwotoneVolumeDownElement
 * @extends {AoflElement}
 */
class IconTwotoneVolumeDownElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneVolumeDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-volume-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneVolumeDownElement.is, IconTwotoneVolumeDownElement);

export default IconTwotoneVolumeDownElement;
