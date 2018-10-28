import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBorderBottomElement
 * @class IconOutlineBorderBottomElement
 * @extends {AoflElement}
 */
class IconOutlineBorderBottomElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBorderBottomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-border-bottom';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBorderBottomElement.is, IconOutlineBorderBottomElement);

export default IconOutlineBorderBottomElement;
