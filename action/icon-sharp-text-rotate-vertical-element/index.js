import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTextRotateVerticalElement
 * @class IconSharpTextRotateVerticalElement
 * @extends {AoflElement}
 */
class IconSharpTextRotateVerticalElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTextRotateVerticalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-text-rotate-vertical';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTextRotateVerticalElement.is, IconSharpTextRotateVerticalElement);

export default IconSharpTextRotateVerticalElement;
