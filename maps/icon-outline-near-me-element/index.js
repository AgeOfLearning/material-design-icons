import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNearMeElement
 * @class IconOutlineNearMeElement
 * @extends {AoflElement}
 */
class IconOutlineNearMeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNearMeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-near-me';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNearMeElement.is, IconOutlineNearMeElement);

export default IconOutlineNearMeElement;
