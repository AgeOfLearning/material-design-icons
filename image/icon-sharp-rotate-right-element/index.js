import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRotateRightElement
 * @class IconSharpRotateRightElement
 * @extends {AoflElement}
 */
class IconSharpRotateRightElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRotateRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-rotate-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRotateRightElement.is, IconSharpRotateRightElement);

export default IconSharpRotateRightElement;
