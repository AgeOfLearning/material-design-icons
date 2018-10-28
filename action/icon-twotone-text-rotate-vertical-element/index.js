import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTextRotateVerticalElement
 * @class IconTwotoneTextRotateVerticalElement
 * @extends {AoflElement}
 */
class IconTwotoneTextRotateVerticalElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTextRotateVerticalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-text-rotate-vertical';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTextRotateVerticalElement.is, IconTwotoneTextRotateVerticalElement);

export default IconTwotoneTextRotateVerticalElement;
