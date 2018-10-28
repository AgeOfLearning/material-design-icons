import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneVolumeOffElement
 * @class IconTwotoneVolumeOffElement
 * @extends {AoflElement}
 */
class IconTwotoneVolumeOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneVolumeOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-volume-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneVolumeOffElement.is, IconTwotoneVolumeOffElement);

export default IconTwotoneVolumeOffElement;
