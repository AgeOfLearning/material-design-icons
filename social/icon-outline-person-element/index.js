import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePersonElement
 * @class IconOutlinePersonElement
 * @extends {AoflElement}
 */
class IconOutlinePersonElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePersonElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-person';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePersonElement.is, IconOutlinePersonElement);

export default IconOutlinePersonElement;
