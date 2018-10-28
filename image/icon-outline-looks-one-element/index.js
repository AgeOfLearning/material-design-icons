import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLooksOneElement
 * @class IconOutlineLooksOneElement
 * @extends {AoflElement}
 */
class IconOutlineLooksOneElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLooksOneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-looks-one';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLooksOneElement.is, IconOutlineLooksOneElement);

export default IconOutlineLooksOneElement;
