import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePersonAddElement
 * @class IconOutlinePersonAddElement
 * @extends {AoflElement}
 */
class IconOutlinePersonAddElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePersonAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-person-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePersonAddElement.is, IconOutlinePersonAddElement);

export default IconOutlinePersonAddElement;
