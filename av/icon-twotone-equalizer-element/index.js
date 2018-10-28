import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneEqualizerElement
 * @class IconTwotoneEqualizerElement
 * @extends {AoflElement}
 */
class IconTwotoneEqualizerElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneEqualizerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-equalizer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneEqualizerElement.is, IconTwotoneEqualizerElement);

export default IconTwotoneEqualizerElement;
