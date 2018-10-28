import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTextRotateVerticalElement
 * @class IconOutlineTextRotateVerticalElement
 * @extends {AoflElement}
 */
class IconOutlineTextRotateVerticalElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTextRotateVerticalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-text-rotate-vertical';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTextRotateVerticalElement.is, IconOutlineTextRotateVerticalElement);

export default IconOutlineTextRotateVerticalElement;
