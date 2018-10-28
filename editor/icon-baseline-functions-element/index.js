import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFunctionsElement
 * @class IconBaselineFunctionsElement
 * @extends {AoflElement}
 */
class IconBaselineFunctionsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFunctionsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-functions';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFunctionsElement.is, IconBaselineFunctionsElement);

export default IconBaselineFunctionsElement;
