import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineVerticalAlignCenterElement
 * @class IconOutlineVerticalAlignCenterElement
 * @extends {AoflElement}
 */
class IconOutlineVerticalAlignCenterElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineVerticalAlignCenterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-vertical-align-center';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineVerticalAlignCenterElement.is, IconOutlineVerticalAlignCenterElement);

export default IconOutlineVerticalAlignCenterElement;
