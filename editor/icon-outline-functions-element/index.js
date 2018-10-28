import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFunctionsElement
 * @class IconOutlineFunctionsElement
 * @extends {AoflElement}
 */
class IconOutlineFunctionsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFunctionsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-functions';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFunctionsElement.is, IconOutlineFunctionsElement);

export default IconOutlineFunctionsElement;
