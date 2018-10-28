import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFlipToFrontElement
 * @class IconOutlineFlipToFrontElement
 * @extends {AoflElement}
 */
class IconOutlineFlipToFrontElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFlipToFrontElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-flip-to-front';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFlipToFrontElement.is, IconOutlineFlipToFrontElement);

export default IconOutlineFlipToFrontElement;
