import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBorderStyleElement
 * @class IconOutlineBorderStyleElement
 * @extends {AoflElement}
 */
class IconOutlineBorderStyleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBorderStyleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-border-style';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBorderStyleElement.is, IconOutlineBorderStyleElement);

export default IconOutlineBorderStyleElement;
