import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneVolumeUpElement
 * @class IconTwotoneVolumeUpElement
 * @extends {AoflElement}
 */
class IconTwotoneVolumeUpElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneVolumeUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-volume-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneVolumeUpElement.is, IconTwotoneVolumeUpElement);

export default IconTwotoneVolumeUpElement;
