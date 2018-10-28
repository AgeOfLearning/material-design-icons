import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBorderLeftElement
 * @class IconOutlineBorderLeftElement
 * @extends {AoflElement}
 */
class IconOutlineBorderLeftElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBorderLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-border-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBorderLeftElement.is, IconOutlineBorderLeftElement);

export default IconOutlineBorderLeftElement;
