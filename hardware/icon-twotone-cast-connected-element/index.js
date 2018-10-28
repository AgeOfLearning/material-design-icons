import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCastConnectedElement
 * @class IconTwotoneCastConnectedElement
 * @extends {AoflElement}
 */
class IconTwotoneCastConnectedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCastConnectedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-cast-connected';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCastConnectedElement.is, IconTwotoneCastConnectedElement);

export default IconTwotoneCastConnectedElement;
