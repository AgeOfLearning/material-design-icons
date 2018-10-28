import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFunctionsElement
 * @class IconTwotoneFunctionsElement
 * @extends {AoflElement}
 */
class IconTwotoneFunctionsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFunctionsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-functions';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFunctionsElement.is, IconTwotoneFunctionsElement);

export default IconTwotoneFunctionsElement;
