import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLooksElement
 * @class IconOutlineLooksElement
 * @extends {AoflElement}
 */
class IconOutlineLooksElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLooksElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-looks';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLooksElement.is, IconOutlineLooksElement);

export default IconOutlineLooksElement;
