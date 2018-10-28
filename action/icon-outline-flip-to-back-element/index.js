import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFlipToBackElement
 * @class IconOutlineFlipToBackElement
 * @extends {AoflElement}
 */
class IconOutlineFlipToBackElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFlipToBackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-flip-to-back';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFlipToBackElement.is, IconOutlineFlipToBackElement);

export default IconOutlineFlipToBackElement;
