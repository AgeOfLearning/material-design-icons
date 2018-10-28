import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFunctionsElement
 * @class IconSharpFunctionsElement
 * @extends {AoflElement}
 */
class IconSharpFunctionsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFunctionsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-functions';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFunctionsElement.is, IconSharpFunctionsElement);

export default IconSharpFunctionsElement;
