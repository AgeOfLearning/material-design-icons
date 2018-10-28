import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFlipElement
 * @class IconOutlineFlipElement
 * @extends {AoflElement}
 */
class IconOutlineFlipElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFlipElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-flip';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFlipElement.is, IconOutlineFlipElement);

export default IconOutlineFlipElement;
