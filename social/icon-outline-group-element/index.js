import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineGroupElement
 * @class IconOutlineGroupElement
 * @extends {AoflElement}
 */
class IconOutlineGroupElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineGroupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-group';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineGroupElement.is, IconOutlineGroupElement);

export default IconOutlineGroupElement;
