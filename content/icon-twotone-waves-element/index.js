import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWavesElement
 * @class IconTwotoneWavesElement
 * @extends {AoflElement}
 */
class IconTwotoneWavesElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWavesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-waves';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWavesElement.is, IconTwotoneWavesElement);

export default IconTwotoneWavesElement;
