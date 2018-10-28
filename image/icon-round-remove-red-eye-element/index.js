import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRemoveRedEyeElement
 * @class IconRoundRemoveRedEyeElement
 * @extends {AoflElement}
 */
class IconRoundRemoveRedEyeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRemoveRedEyeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-remove-red-eye';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRemoveRedEyeElement.is, IconRoundRemoveRedEyeElement);

export default IconRoundRemoveRedEyeElement;
