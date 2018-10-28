import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineVerticalAlignTopElement
 * @class IconOutlineVerticalAlignTopElement
 * @extends {AoflElement}
 */
class IconOutlineVerticalAlignTopElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineVerticalAlignTopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-vertical-align-top';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineVerticalAlignTopElement.is, IconOutlineVerticalAlignTopElement);

export default IconOutlineVerticalAlignTopElement;
