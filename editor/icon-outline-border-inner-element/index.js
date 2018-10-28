import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBorderInnerElement
 * @class IconOutlineBorderInnerElement
 * @extends {AoflElement}
 */
class IconOutlineBorderInnerElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBorderInnerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-border-inner';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBorderInnerElement.is, IconOutlineBorderInnerElement);

export default IconOutlineBorderInnerElement;
