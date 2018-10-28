import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNotInterestedElement
 * @class IconTwotoneNotInterestedElement
 * @extends {AoflElement}
 */
class IconTwotoneNotInterestedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNotInterestedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-not-interested';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNotInterestedElement.is, IconTwotoneNotInterestedElement);

export default IconTwotoneNotInterestedElement;
