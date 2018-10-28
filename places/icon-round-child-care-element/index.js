import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundChildCareElement
 * @class IconRoundChildCareElement
 * @extends {AoflElement}
 */
class IconRoundChildCareElement extends AoflElement {
  /**
   * Creates an instance of IconRoundChildCareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-child-care';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundChildCareElement.is, IconRoundChildCareElement);

export default IconRoundChildCareElement;
