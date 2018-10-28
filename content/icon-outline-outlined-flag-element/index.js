import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineOutlinedFlagElement
 * @class IconOutlineOutlinedFlagElement
 * @extends {AoflElement}
 */
class IconOutlineOutlinedFlagElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineOutlinedFlagElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-outlined-flag';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineOutlinedFlagElement.is, IconOutlineOutlinedFlagElement);

export default IconOutlineOutlinedFlagElement;
