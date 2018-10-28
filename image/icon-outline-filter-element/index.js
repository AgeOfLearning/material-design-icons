import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFilterElement
 * @class IconOutlineFilterElement
 * @extends {AoflElement}
 */
class IconOutlineFilterElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFilterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-filter';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFilterElement.is, IconOutlineFilterElement);

export default IconOutlineFilterElement;
