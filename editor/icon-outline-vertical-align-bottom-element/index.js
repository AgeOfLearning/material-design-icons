import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineVerticalAlignBottomElement
 * @class IconOutlineVerticalAlignBottomElement
 * @extends {AoflElement}
 */
class IconOutlineVerticalAlignBottomElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineVerticalAlignBottomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-vertical-align-bottom';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineVerticalAlignBottomElement.is, IconOutlineVerticalAlignBottomElement);

export default IconOutlineVerticalAlignBottomElement;
