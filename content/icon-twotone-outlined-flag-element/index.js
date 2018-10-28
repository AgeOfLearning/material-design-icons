import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneOutlinedFlagElement
 * @class IconTwotoneOutlinedFlagElement
 * @extends {AoflElement}
 */
class IconTwotoneOutlinedFlagElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneOutlinedFlagElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-outlined-flag';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneOutlinedFlagElement.is, IconTwotoneOutlinedFlagElement);

export default IconTwotoneOutlinedFlagElement;
