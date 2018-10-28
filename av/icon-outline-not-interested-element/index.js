import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNotInterestedElement
 * @class IconOutlineNotInterestedElement
 * @extends {AoflElement}
 */
class IconOutlineNotInterestedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNotInterestedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-not-interested';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNotInterestedElement.is, IconOutlineNotInterestedElement);

export default IconOutlineNotInterestedElement;
