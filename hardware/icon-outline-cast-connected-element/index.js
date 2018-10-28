import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCastConnectedElement
 * @class IconOutlineCastConnectedElement
 * @extends {AoflElement}
 */
class IconOutlineCastConnectedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCastConnectedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-cast-connected';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCastConnectedElement.is, IconOutlineCastConnectedElement);

export default IconOutlineCastConnectedElement;
