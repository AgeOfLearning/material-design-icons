import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFunctionsElement
 * @class IconRoundFunctionsElement
 * @extends {AoflElement}
 */
class IconRoundFunctionsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFunctionsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-functions';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFunctionsElement.is, IconRoundFunctionsElement);

export default IconRoundFunctionsElement;
